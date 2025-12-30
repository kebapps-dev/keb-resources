@echo off
setlocal enabledelayedexpansion
REM KEB Compact 3 SD Card Toolbox
REM This script provides various operations for the SD card on the C3 device
echo ==============================================
echo ^|    KEB COMPACT 3 - SD CARD TOOLBOX V1.2    ^|
echo ==============================================
echo  * requires PuTTY to be installed on PC
echo  * make sure to connect to C3 using PuTTY
echo    before running this script to accept 
echo    certificates.
echo  * ssh must be enabled on C3 System Manager
echo  * use a single partition SD card (FAT32)
echo ----------------------------------------------
echo.
set C3_DEVICE=192.168.201.228
set C3_USER=admin
set SUDO_PASSWORD=admin
@REM set /p C3_DEVICE="Enter the C3 device IP address: "
@REM set /p C3_USER="Enter the C3 username: "
@REM set /p SUDO_PASSWORD="Enter the C3 password: "

set OPERATION=0
REM ------------------------------------------------------------------------------------------------------------------------------------------------------------
echo ^(1/5^) Connecting to C3 device: %C3_DEVICE%...

REM Test connection first
plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo connected" >nul 2>&1

if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to connect to device %C3_DEVICE%
    echo Please check:
    echo   - Device IP address is correct
    echo   - Device is powered on and connected to the network
    echo   - Password is correct
    echo   - PuTTY/plink is installed correctly
    echo   - SSH server is running on the device
    echo.
    set /p DOWNLOAD_PUTTY="Would you like to download PuTTY? (y/n): "
    if /I "!DOWNLOAD_PUTTY!"=="Y" (
        start https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
    )
    pause
    exit /b 1
)

echo       Connected successfully to %C3_DEVICE%
echo.
REM ------------------------------------------------------------------------------------------------------------------------------------------------------------
:MENU
for /f "tokens=2" %%a in ('mode con ^| findstr "Columns"') do set COLS=%%a
set "LINE="
for /l %%i in (1,1,%COLS%) do set "LINE=!LINE!-"
echo !LINE!
echo ^(2/5^) Select operation:
echo   1 - Extract serviceConfig.json to SD (can be used within 5 minutes of C3 boot)
echo   2 - Backup entire CODESYS container contents to SD
echo   3 - Restore CODESYS container contents from SD backup 
echo   4 - Add new Docker container to C3 device
echo   5 - Open local tunnels to non-NOA C3 docker containers
echo   6 - Docker container controls
echo   ...
echo   9 - Exit
echo.
set /p OPERATION="Enter your choice: "

if not "%OPERATION%"=="1" if not "%OPERATION%"=="2" if not "%OPERATION%"=="3" if not "%OPERATION%"=="4" if not "%OPERATION%"=="5" if not "%OPERATION%"=="6" if not "%OPERATION%"=="9" (
    echo Invalid selection. Exiting.
    pause
    exit /b 1
)
echo.
REM ------------------------------------------------------------------------------------------------------------------------------------------------------------
REM Execute selected operation
if "%OPERATION%"=="1" (
    REM copy serviceConfig.json to sd card
    echo ^(4/5^) Searching for location of serviceConfig.json file...

    REM Mount SD card and copy serviceConfig.json
    echo echo %SUDO_PASSWORD% ^| sudo -S su -c 'mkdir -p /media/sdcard/mmcblk1p1 ^&^& mount /dev/mmcblk1p1 /media/sdcard/mmcblk1p1 2^>^/dev/null ^|^| true ^&^& cp /docker/volumes/KEBCloudConnectorData/_data/serviceConfig.json /media/sdcard/mmcblk1p1/ ^&^& umount /media/sdcard/mmcblk1p1' 2^>^/dev/null > "%~dp0populate_commands.txt"
    echo       Copying serviceConfig.json to SD card...
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% -m "%~dp0populate_commands.txt"
    
    if !ERRORLEVEL! NEQ 0 (
        echo.
        echo ERROR: Failed to copy file
        echo Please check:
        echo   - File exists at /docker/volumes/KEBCloudConnectorData/_data/serviceConfig.json
        echo   - Network connection is stable
        del "%~dp0populate_commands.txt"
        pause
        exit /b 1
    )
    
    del "%~dp0populate_commands.txt"
    echo       serviceConfig.json copied successfully to SD card
    echo.
    echo ^(5/5^) SD card has been unmounted safely.
    pause
    exit /b 0
) else if "%OPERATION%"=="2" (
    REM export entire codesyscontrol container filesystem to sd card
    echo ^(4/5^) Searching for codesyscontrol container...

    REM Get the container ID first - try different search patterns
    for /f "delims=" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps 2>/dev/null | grep -E 'codesyscontrol|codesys-gateway' | head -n1 | cut -d' ' -f1"') do set CONTAINER_ID=%%i

    if "!CONTAINER_ID!"=="" (
        echo ERROR: Could not find codesyscontrol or codesys-gateway container
        echo.
        echo Available containers:
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps --format 'table {{.ID}}\t{{.Image}}\t{{.Names}}'"
        echo.
        echo Please verify which container contains CODESYS Control runtime.
        pause
        exit /b 1
    )

    echo       Found container: !CONTAINER_ID!
    echo       Backing up container filesystem ^(this will take a few minutes^)...

    REM Mount SD card, export container filesystem to tar, then unmount
    echo echo %SUDO_PASSWORD% ^| sudo -S sh -c "mkdir -p /media/sdcard/mmcblk1p1 ^&^& mount /dev/mmcblk1p1 /media/sdcard/mmcblk1p1 2^>^/dev/null ^|^| true ^&^& rm -f /media/sdcard/mmcblk1p1/codesyscontrol_backup.tar ^&^& docker export !CONTAINER_ID! -o /media/sdcard/mmcblk1p1/codesyscontrol_backup.tar ^&^& umount /media/sdcard/mmcblk1p1" 2^>^/dev/null > "%~dp0populate_commands.txt"
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% -m "%~dp0populate_commands.txt" 2>nul
    
    if !ERRORLEVEL! NEQ 0 (
        echo.
        echo ERROR: Failed to backup container filesystem
        echo Please check:
        echo   - Docker container is running
        echo   - SD card has sufficient space
        echo   - Network connection is stable
        del "%~dp0populate_commands.txt"
        pause
        exit /b 1
    )
    
    del "%~dp0populate_commands.txt"
    echo       Container backup saved successfully to SD card
    echo.
    echo ^(5/5^) SD card has been unmounted safely.
    pause
    exit /b 0
) else if "%OPERATION%"=="3" (
    REM restore codesyscontrol container filesystem from sd card
    echo ^(4/5^) Checking for CODESYS container...
    
    REM Get the container ID and name
    for /f "delims=" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps -a 2>/dev/null | grep -E 'codesyscontrol|codesys-gateway' | head -n1 | cut -d' ' -f1"') do set CONTAINER_ID=%%i
    for /f "tokens=*" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps -a --format '{{.Names}}' 2>/dev/null | grep -iE 'codesyscontrol|codesys' | head -n1"') do set CONTAINER_NAME=%%i

    if "!CONTAINER_ID!"=="" (
        echo ERROR: No CODESYS container found
        echo.
        echo Please install the codesyscontrol container from the OEM App Catalog first,
        echo then use this option to restore the backup into it.
        pause
        exit /b 1
    )
    
    echo       Found container: !CONTAINER_ID!

    REM Mount SD card and verify backup file exists
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S mkdir -p /media/sdcard/mmcblk1p1 2>/dev/null && sudo mount /dev/mmcblk1p1 /media/sdcard/mmcblk1p1 2>/dev/null || true" 2>nul
    
    REM Check if backup tar file exists
    for /f "delims=" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "test -f /media/sdcard/mmcblk1p1/codesyscontrol_backup.tar && echo EXISTS || echo MISSING"') do set BACKUP_STATUS=%%i

    if "!BACKUP_STATUS!"=="MISSING" (
        echo ERROR: No container backup found on SD card
        echo Please ensure the SD card contains codesyscontrol_backup.tar file.
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S umount /media/sdcard/mmcblk1p1 2>/dev/null" 2>nul
        pause
        exit /b 1
    )

    echo       SD card verified. Container backup on SD found.
    
    REM Check tar file integrity
    echo       Checking backup file integrity...
    for /f "delims=" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "ls -lh /media/sdcard/mmcblk1p1/codesyscontrol_backup.tar 2>/dev/null | cut -d' ' -f5"') do set TAR_SIZE=%%i
    echo       Backup file size: !TAR_SIZE!b
    echo.
    echo       WARNING: This will OVERWRITE all contents of the container.
    echo       The container configuration ^(volumes, network, etc.^) will be preserved.
    echo.
    
    set /p CONFIRM="Are you sure you want to proceed? (y/n): "
    echo.
    
    if /I not "!CONFIRM!"=="Y" (
        echo       Restore cancelled by user.
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S umount /media/sdcard/mmcblk1p1 2>/dev/null" 2>nul
        pause
        exit /b 0
    )
    
    echo       Restoring container filesystem ^(this will take a few minutes^)...

    REM Stop the container and extract tar directly into container's writable layer
    echo       Stopping container...
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker stop !CONTAINER_ID! >/dev/null 2>/dev/null" 2>nul
    
    REM Extract last octet from IP address and format with leading zeros
    for /f "tokens=4 delims=." %%a in ("%C3_DEVICE%") do set LAST_OCTET=%%a
    set LAST_OCTET=00!LAST_OCTET!
    set LAST_OCTET=!LAST_OCTET:~-3!
    
    echo       Updating device name to c6c3_!LAST_OCTET! in backup...
    
    REM Build the individual digits
    set D1=!LAST_OCTET:~0,1!
    set D2=!LAST_OCTET:~1,1!
    set D3=!LAST_OCTET:~2,1!
    
    REM Create Python script to extract only the config file, update it, and put it back
    (
        echo import tarfile, re, os
        echo # Extract only the config file
        echo with tarfile.open('/media/sdcard/mmcblk1p1/codesyscontrol_backup.tar', 'r'^) as tar:
        echo     try:
        echo         member = tar.getmember('etc/CODESYSControl_User.cfg'^)
        echo         tar.extract(member, '/media/sdcard/mmcblk1p1/'^)
        echo     except:
        echo         pass
        echo # Update the config file
        echo cfg_path = '/media/sdcard/mmcblk1p1/etc/CODESYSControl_User.cfg'
        echo if os.path.exists(cfg_path^):
        echo     with open(cfg_path, 'r'^) as f:
        echo         content = f.read(^)
        echo     new_name = 'c\\\\006\\\\00c\\\\003\\\\00_\\\\00!D1!\\\\00!D2!\\\\00!D3!\\\\00'
        echo     # Try to replace existing NodeNameUnicode line
        echo     new_content = re.sub(r'^NodeNameUnicode=.*$', 'NodeNameUnicode=' + new_name, content, flags=re.MULTILINE^)
        echo     # If no replacement was made, add the section with proper formatting
        echo     if new_content == content:
        echo         new_content = content.rstrip(^) + '\n\n[SysTarget]\nNodeNameUnicode=' + new_name + '\n'
        echo     with open(cfg_path, 'w'^) as f:
        echo         f.write(new_content^)
        echo     # Update the file in the tar archive
        echo     with tarfile.open('/media/sdcard/mmcblk1p1/codesyscontrol_backup.tar', 'a'^) as tar:
        echo         tar.add(cfg_path, arcname='etc/CODESYSControl_User.cfg'^)
        echo     # Cleanup
        echo     import shutil
        echo     shutil.rmtree('/media/sdcard/mmcblk1p1/etc'^)
    ) > "%~dp0update_name.py"
    
    REM Upload and run the Python script
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "cat > /tmp/update_name.py" < "%~dp0update_name.py" 2>nul
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S python3 /tmp/update_name.py 2>/dev/null && rm /tmp/update_name.py 2>/dev/null" 2>nul
    
    if !ERRORLEVEL! NEQ 0 (
        echo       WARNING: Failed to update device name in backup
    )
    
    del "%~dp0update_name.py"
    
    REM Get the container's upperdir (writable layer) path
    echo       Getting container layer path...
    for /f "delims=" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker inspect !CONTAINER_ID! --format '{{.GraphDriver.Data.UpperDir}}'" 2^>nul') do set UPPER_DIR=%%i
    
    REM Extract tar directly to the container's writable layer (avoids temp storage)
    echo       Extracting backup directly into container layer...
    
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S sh -c 'UPPER_DIR=$(docker inspect !CONTAINER_ID! --format {{.GraphDriver.Data.UpperDir}}) && tar -xf /media/sdcard/mmcblk1p1/codesyscontrol_backup.tar -C $UPPER_DIR && docker start !CONTAINER_ID! >/dev/null'" 2>nul

    if !ERRORLEVEL! NEQ 0 (
        echo.
        echo ERROR: Failed to restore container
        echo Please check:
        echo   - Network connection is stable
        echo   - SD card files are accessible
        echo   - Backup tar file is valid
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S umount /media/sdcard/mmcblk1p1 2>/dev/null" 2>nul
        pause
        exit /b 1
    )
    

    REM Verify container is running
    echo       Verifying container status...
    for /f "delims=" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps --filter name=!CONTAINER_NAME! --format '{{.Status}}' 2>/dev/null"') do set CONTAINER_STATUS=%%i
    
    if "!CONTAINER_STATUS!"=="" (
        echo       WARNING: Container may not have started. Check docker logs.
        echo.
    ) else (
        echo       Container is running.
        echo.
    )
    
    REM Unmount SD card
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S umount /media/sdcard/mmcblk1p1 2>/dev/null" 2>nul

    echo ^(5/5^) Container restore complete. SD card has been unmounted and can be safely removed.
    echo.
    set /p REBOOT_CHOICE="Reboot device now? (y/n): "
    echo.
    if /I "!REBOOT_CHOICE!"=="Y" (
        echo       Rebooting device...
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S reboot" 2>nul
        echo       Device is rebooting. You may close this window.
    ) else (
        echo       Device was not rebooted.
    )
    pause
    exit /b 0
) else if "%OPERATION%"=="4" (
    REM Add new Docker container to C3 device
    echo ^(3/5^) Configuring new Docker container...
    echo.
    
    set "IMAGE="
    set "CONTAINER_NAME="
    set "DOCKER_OPTS="
    
    set /p IMAGE="Enter Docker image (repository/name): "
    set /p CONTAINER_NAME="Enter container name: "
    set /p DOCKER_OPTS="Enter Docker options or leave blank: "
    
    if "!IMAGE!"=="" (
        echo       ERROR: Image name is required.
        pause
        goto MENU
    )
    
    if "!CONTAINER_NAME!"=="" (
        echo       ERROR: Container name is required.
        pause
        goto MENU
    )
    
    echo.
    echo ^(4/5^) Checking for existing containers with same image...
    
    REM Get list of existing containers with the same image
    for /f "delims=" %%i in ('plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps -a --filter ancestor=!IMAGE! --format '{{.Names}}' 2>/dev/null"') do (
        set EXISTING_CONTAINERS=%%i
        goto :found_containers
    )
    set EXISTING_CONTAINERS=
    
    :found_containers
    if not "!EXISTING_CONTAINERS!"=="" (
        echo       Found existing containers using image: !IMAGE!
        echo.
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps -a --filter ancestor=!IMAGE! --format 'Name: {{.Names}} Status: {{.Status}}' 2>/dev/null"
        echo.
        set /p DELETE_CONFIRM="Remove these containers? (y/n): "
        echo.
        
        if /I "!DELETE_CONFIRM!"=="Y" (
            echo       Removing containers...
            plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S sh -c 'docker ps -a --filter ancestor=!IMAGE! -q | xargs -r docker rm -f' 2>/dev/null" >nul 2>&1
        ) else (
            echo       Keeping existing containers.
        )
        echo.
    )
    
    echo ^(5/5^) Deploying container...
    
    set "DOCKER_CMD=docker run -d --name !CONTAINER_NAME! --restart=always --network host !DOCKER_OPTS! !IMAGE!" >nul 2>&1
    
    echo       Command: !DOCKER_CMD!
    
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S !DOCKER_CMD!" >nul 2>&1
    
    if !ERRORLEVEL! EQU 0 (
        echo       SUCCESS: Container deployed.
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps --filter name=!CONTAINER_NAME! --format 'Name: {{.Names}} Status: {{.Status}} Ports: {{.Ports}}' 2>/dev/null" >nul 2>&1
        echo.
        pause
        goto MENU
    ) else (
        echo       ERROR: Deployment failed.
        pause
        goto MENU
    )
) else if "%OPERATION%"=="5" (
    REM Open SSH tunnel to C3
    set /p SHOW_CONTAINERS="(3/5) Would you like to view container info with exposed ports? (y/n): "
    echo.
    
    if /I "!SHOW_CONTAINERS!"=="Y" (
        echo Detecting containers and exposed ports on C3...
        echo.
        
        REM Get container info with exposed ports
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S sh -c 'for c in $(docker ps -q 2>/dev/null); do echo Container: $(docker inspect --format={{.Name}} $c 2>/dev/null | cut -c2-); echo Exposed ports: $(docker inspect --format={{.Config.ExposedPorts}} $c 2>/dev/null); echo --------------------------------------; done' 2>/dev/null"
        echo.
    )
    
    set /p tunnel_port="(4/5) Enter non-NOA port to forward: "
    
    if "!tunnel_port!"=="" (
        echo No port specified.
        pause
        exit /b 0
    )
    
    echo.
    echo ^(5/5^) Opening SSH tunnel on port !tunnel_port!...
    start "SSH-Tunnel-!tunnel_port!" /min cmd /k "plink -batch -N -T %C3_USER%@%C3_DEVICE% -pw %SUDO_PASSWORD% -L !tunnel_port!:127.0.0.1:!tunnel_port!"
    
    timeout /t 5 /nobreak >nul
    
    echo       Tunnel established on localhost:!tunnel_port!
    echo       Opening browser...
    start http://localhost:!tunnel_port!
    start https://localhost:!tunnel_port!
    echo       Keep the tunnel window open while using the service. It may take up to a minute for the page to become available.
    echo.
    goto MENU
    pause
    exit /b 0
) else if "%OPERATION%"=="6" (
    REM Stop/Start/Restart specific container
    echo ^(3/5^) Listing available containers...
    echo.
    
    REM Get list of all containers
    plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker ps -a --format 'table {{.Names}}\t{{.Status}}\t{{.Image}}' 2>/dev/null"
    
    echo.
    set /p CONTAINER_NAME="Enter container name: "
    
    if "!CONTAINER_NAME!"==" " (
        echo No container specified.
        pause
        goto MENU
    )
    
    echo.
    echo ^(4/5^) Select action:
    echo   1 - Stop
    echo   2 - Start
    echo   3 - Restart
    echo   4 - Remove
    echo.
    set /p ACTION="Enter your choice: "
    
    if "!ACTION!"=="1" (
        echo.
        echo ^(5/5^) Stopping container...
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker stop !CONTAINER_NAME! 2>/dev/null" >nul 2>&1
        
        if !ERRORLEVEL! EQU 0 (
            echo       SUCCESS: Container stopped.
        ) else (
            echo       ERROR: Failed to stop container.
        )
    ) else if "!ACTION!"=="2" (
        echo.
        echo ^(5/5^) Starting container...
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker start !CONTAINER_NAME! 2>/dev/null" >nul 2>&1
        
        if !ERRORLEVEL! EQU 0 (
            echo       SUCCESS: Container started.
        ) else (
            echo       ERROR: Failed to start container.
        )
    ) else if "!ACTION!"=="3" (
        echo.
        echo ^(5/5^) Restarting container...
        plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker restart !CONTAINER_NAME! 2>/dev/null" >nul 2>&1
        
        if !ERRORLEVEL! EQU 0 (
            echo       SUCCESS: Container restarted.
        ) else (
            echo       ERROR: Failed to restart container.
        )
    ) else if "!ACTION!"=="4" (
        echo.
        set /p REMOVE_CONFIRM="WARNING: This will permanently delete the container. Are you sure? (y/n): "
        
        if /I "!REMOVE_CONFIRM!"=="Y" (
            echo.
            echo ^(5/5^) Removing container...
            plink -batch -pw %SUDO_PASSWORD% %C3_USER%@%C3_DEVICE% "echo %SUDO_PASSWORD% | sudo -S docker rm -f !CONTAINER_NAME! 2>/dev/null" >nul 2>&1
            
            if !ERRORLEVEL! EQU 0 (
                echo       SUCCESS: Container removed.
            ) else (
                echo       ERROR: Failed to remove container.
            )
        ) else (
            echo       Removal cancelled.
        )
    ) else (
        echo       Invalid action.
    )
    
    echo.
    pause
    goto MENU
) else if "%OPERATION%"=="9" (
    REM Exit option
    echo Exiting...
    exit /b 0
)else (
    echo Invalid option. Please try again.
    goto MENU
)

timeout /t 1 /nobreak >nul
del /f /q "%~dp0populate_commands.txt" 2>nul

pause
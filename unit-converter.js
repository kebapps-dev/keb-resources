// Unit Converter Hub
// Provides quick conversions for common engineering units
// Uses unitConversions from main.js

// Category display names (units are pulled automatically from unitConversions)
const categoryDisplayNames = {
    speed: "Speed / Frequency",
    torque: "Torque",
    power: "Power",
    inertia: "Inertia",
    force: "Force",
    length: "Length",
    mass: "Mass",
    angle: "Angle",
    velocity: "Linear Speed",
    pressure: "Pressure",
    flow: "Flow Rate"
};

function convertUnit(value, fromUnit, toUnit, category) {
    // Use unitConversions from main.js
    if (typeof unitConversions === 'undefined' || !unitConversions[category]) {
        console.error('unitConversions not available or category not found:', category);
        return null;
    }
    
    const conversionData = unitConversions[category];
    if (!conversionData[fromUnit] || !conversionData[toUnit]) {
        console.error('Unit not found:', fromUnit, toUnit);
        return null;
    }
    
    // Convert to base unit first, then to target unit
    const baseValue = value * conversionData[fromUnit];
    const result = baseValue / conversionData[toUnit];
    
    return result;
}

function initializeUnitConverter() {
    const container = document.getElementById('unit-converter-content');
    if (!container) return;
    
    // Check if unitConversions is available from main.js
    if (typeof unitConversions === 'undefined') {
        container.innerHTML = '<p style="color: red;">Error: Unit conversion data not loaded from main.js</p>';
        return;
    }
    
    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px;">';
    
    // Loop through all categories in unitConversions
    for (const [categoryKey, categoryUnits] of Object.entries(unitConversions)) {
        // Get display name or use category key as fallback
        const displayName = categoryDisplayNames[categoryKey] || categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
        
        // Get all available units for this category
        const availableUnits = Object.keys(categoryUnits);
        if (availableUnits.length === 0) continue;
        
        html += `
            <div class="unit-converter-category" style="background: #f8f8f8; padding: 20px; border: 2px solid #222; border-radius: 12px;">
                <h2 style="margin-top: 0;">
                    ${displayName}
                </h2>
                <div style="display: grid; gap: 12px;">
                    <div>
                        <input type="number" 
                               id="${categoryKey}-input" 
                               placeholder="Enter value"
                               style="width: calc(100% - 27px);"
                               oninput="performConversion('${categoryKey}')">
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <select id="${categoryKey}-from" 
                                onchange="performConversion('${categoryKey}')">
        `;
        
        // Add all units from unitConversions
        for (const unit of availableUnits) {
            html += `<option value="${unit}">${unit}</option>`;
        }
        
        html += `
                        </select>
                        <select id="${categoryKey}-to" 
                                onchange="performConversion('${categoryKey}')">
        `;
        
        // Second dropdown with second unit selected by default
        for (let i = 0; i < availableUnits.length; i++) {
            const selected = i === 1 ? 'selected' : '';
            html += `<option value="${availableUnits[i]}" ${selected}>${availableUnits[i]}</option>`;
        }
        
        html += `
                        </select>
                    </div>
                    <div style="background: white; padding: 12px 12px;">
                        <strong id="${categoryKey}-result" style="font-size: 18px; color: #333;">-</strong>
                    </div>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    container.innerHTML = html;
}

function performConversion(category) {
    const inputElement = document.getElementById(`${category}-input`);
    const fromElement = document.getElementById(`${category}-from`);
    const toElement = document.getElementById(`${category}-to`);
    const resultElement = document.getElementById(`${category}-result`);
    
    const value = parseFloat(inputElement.value);
    if (isNaN(value)) {
        resultElement.textContent = '-';
        return;
    }
    
    const fromUnit = fromElement.value;
    const toUnit = toElement.value;
    
    const result = convertUnit(value, fromUnit, toUnit, category);
    
    if (result !== null) {
        // Format result with appropriate precision
        let formattedResult;
        if (Math.abs(result) < 0.001 || Math.abs(result) > 100000) {
            formattedResult = result.toExponential(6);
        } else {
            formattedResult = result.toFixed(6).replace(/\.?0+$/, '');
        }
        
        resultElement.textContent = `${formattedResult} ${toUnit}`;
    } else {
        resultElement.textContent = 'Conversion error';
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeUnitConverter);

// Rotary Table formulas (SI base units: kg, m, rad, s → kg·m², rad/s, Nm)
const rotarytableformulas = {
  maxMotorSpeed: (moveDistance, moveTime, accelTime, decelTime,gearRatio) => //Motor angular speed
    (moveDistance * gearRatio / (moveTime - 0.5*accelTime - 0.5*decelTime)),
  motoracceleration: (maxMotorSpeed, accelTime) => maxMotorSpeed / accelTime,
  motordeceleration: (maxMotorSpeed, decelTime) => maxMotorSpeed / decelTime,
  rotaryTableInertia: (mass, radius) => 0.5 * mass * (radius ** 2),
  reflectedInertia: (tableInertia, loadInertia, gearRatio) => (tableInertia + loadInertia) / (gearRatio ** 2),
  torqueConstantFriction: (fricTorque, gearRatio) => fricTorque / gearRatio,
  torqueRequiredAcceleration: (refInertia, motorInertia, gearInertia, brakeInertia, motorAccel, fricTorque) =>
    (refInertia + motorInertia + gearInertia + brakeInertia) * motorAccel + fricTorque,
  torqueRequiredDeceleration: (refInertia, motorInertia, gearInertia, brakeInertia, motorDecel, fricTorque) =>
    (refInertia + motorInertia + gearInertia + brakeInertia) * motorDecel + fricTorque,
  torqueRequiredConstantSpeed: (fricTorque) => fricTorque,
  constantRunTime: (moveTime, accelTime, decelTime) => moveTime - accelTime - decelTime,
  torqueRmsMotor: (accelTorque, decelTorque, constTorque, accelTime, decelTime, runTime, moveTime, dwellTime) =>
    Math.sqrt(((accelTorque ** 2 * accelTime) + (decelTorque ** 2 * decelTime) + (constTorque ** 2 * runTime)) / (dwellTime + moveTime)),
  ps18: () => 0,
  ps19: (gearNumerator, gearDenominator, co03) => Math.floor((gearNumerator * (2 ** co03)) / gearDenominator),
  ps23: (gearDenominator) => gearDenominator - 1,
  ps24: (gearNumerator, gearDenominator, co03, ps19) => (gearNumerator * (2 ** co03)) - (gearDenominator * ps19)
};

if (typeof window !== 'undefined') window.rotarytableformulas = rotarytableformulas;

function findClosestRotaryTableMotor() {
  const moveDistance = getValueWithUnit('rotationalMoveDistance');
  const moveTime = parseFloat(document.getElementById('totalMoveTime').value);
  const accelTime = parseFloat(document.getElementById('accelTime').value);
  const decelTime = parseFloat(document.getElementById('decelTime').value);
  const gearRatio = parseFloat(document.getElementById('gearboxRatioRotary').value);
  const mass = getValueWithUnit('massIndexTable');
  const radius = getValueWithUnit('radiusIndexTable');
  const loadInertia = getValueWithUnit('loadInertia');
  const fricTorque = getValueWithUnit('frictionTorque');
  const dwellTime = parseFloat(document.getElementById('dwellTime').value);
  const motorInertia = getValueWithUnit('motorInertia');
  const gearInertia = getValueWithUnit('gearboxInertia');
  const brakeInertia = getValueWithUnit('brakeInertia');
  const safetyFactor = getValueWithUnit('safetyFactor');
  const gearNumerator = parseFloat(document.getElementById('gearNumerator').value);
  const gearDenominator = parseFloat(document.getElementById('gearDenominator').value);
  const co03 = parseFloat(document.getElementById('co03').value);

  const maxMotorSpeed = rotarytableformulas.maxMotorSpeed(moveDistance, moveTime, accelTime, decelTime, gearRatio);
  const motorAccel = rotarytableformulas.motoracceleration(maxMotorSpeed, accelTime);
  const motorDecel = rotarytableformulas.motordeceleration(maxMotorSpeed, decelTime);
  const tableInertia = rotarytableformulas.rotaryTableInertia(mass, radius);
  const refInertia = rotarytableformulas.reflectedInertia(tableInertia, loadInertia, gearRatio);
  const constFricTorque = rotarytableformulas.torqueConstantFriction(fricTorque, gearRatio);
  const accelTorque = rotarytableformulas.torqueRequiredAcceleration(refInertia, motorInertia, gearInertia, brakeInertia, motorAccel, constFricTorque);
  const decelTorque = rotarytableformulas.torqueRequiredDeceleration(refInertia, motorInertia, gearInertia, brakeInertia, motorDecel, constFricTorque);
  const constSpeedTorque = rotarytableformulas.torqueRequiredConstantSpeed(constFricTorque);
  const runTime = rotarytableformulas.constantRunTime(moveTime, accelTime, decelTime);
  const rmsTorque = rotarytableformulas.torqueRmsMotor(accelTorque, decelTorque, constSpeedTorque, accelTime, decelTime, runTime, moveTime, dwellTime);
  const ps18 = rotarytableformulas.ps18();
  const ps19 = rotarytableformulas.ps19(gearNumerator, gearDenominator, co03);
  const ps23 = rotarytableformulas.ps23(gearDenominator);
  const ps24 = rotarytableformulas.ps24(gearNumerator, gearDenominator, co03, ps19);

  displayStandardResults({
    [`(1) Maximum Motor Speed (${window.selectedResultUnits?.speed || 'RPM'})`]: 
      convertResultValue(maxMotorSpeed, 'speed', window.selectedResultUnits?.speed || 'RPM').toFixed(2),
    [`(2) Rotary Table Inertia (${window.selectedResultUnits?.inertia || 'kg·m²'})`]: 
      convertResultValue(tableInertia, 'inertia', window.selectedResultUnits?.inertia || 'kg·m²').toFixed(2),
    [`(3) Required Peak Motor Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(Math.max(accelTorque, decelTorque) * safetyFactor, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(2),
    [`(4) Required Nominal Motor Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(rmsTorque * safetyFactor, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(2),
    [`Maximum GB Output Speed (${window.selectedResultUnits?.speed || 'RPM'})`]: 
      convertResultValue(maxMotorSpeed / gearRatio, 'speed', window.selectedResultUnits?.speed || 'RPM').toFixed(2),
    [`Acceleration GB Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(accelTorque * gearRatio, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(2),
    [`Calculated GB RMS Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(rmsTorque * gearRatio, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(2),
    'Round Table ps18 Value': ps18.toFixed(0),
    'Round Table ps19 Value': ps19.toFixed(0),
    'Round Table ps23 Value': ps23.toFixed(0),
    'Round Table ps24 Value': ps24.toFixed(0)
  });
}

// Rotary Table sizing suggestions
function getRotaryTableSizingSuggestions() {
  return `<b>Rotary Table Sizing Tips:</b><ul>
        <li>Determine move distance and time for speed and acceleration.</li>
        <li>Include mass and radius for inertia calculations.</li>
        <li>Account for friction torque and dwell time in duty cycle.</li>
    </ul>`;
}

// Rotary Table formulas display
function getRotaryTableFormulas() {
  return `
      <span class="formula"><b>(1)</b> \\( \\omega_{motor} = \\frac{\\theta \\cdot i}{t_{move}} \\)</span>
      <span class="formula"><b></b> \\( \\alpha_{motor} = \\frac{\\omega_{motor}}{t_{accel}} \\)</span>
      <span class="formula"><b>(2)</b> \\( J_{table} = \\frac{1}{2} \\cdot m \\cdot r^2 \\)</span>
      <span class="formula"><b>   </b> \\( J_{refl@motor} = \\frac{J_{table} + J_{load}}{i^2} \\)</span>
      <span class="formula"><b></b> \\( T_{const@motor} = \\frac{T_{friction}}{i} \\)</span>
      <span class="formula"><b>(3)</b> \\( T_{accel@motor} = (J_{motor} + J_{gearbox} + J_{brake} + J_{refl@motor}) \\cdot \\alpha_{motor} + T_{const@motor} \\)</span>
      <span class="formula"><b>(4)</b> \\( T_{rms@motor} = \\sqrt{\\frac{ (T_{accel@motor})^2 \\cdot t_{accel} + (T_{decel@motor})^2 \\cdot t_{decel}  + (T_{const@motor})^2 \\cdot t_{const} } {t_{move} + t_{dwell} } } \\)</span>
  `;
}

// Rotary Table result unit mappings
function getRotaryTableResultUnitMappings() {
  return {
    'Maximum Motor Speed': { type: 'speed', component: 'motor', defaultUnit: 'RPM' },
    'Maximum GB Output Speed': { type: 'speed', component: 'gearbox', defaultUnit: 'RPM' },
    'Calculated GB RMS Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Acceleration GB Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Deceleration GB Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Constant Speed GB Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Rotary Table Inertia': { type: 'inertia', component: 'system', defaultUnit: 'kg·m²' },
    'Required Nominal Motor Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Required Peak Motor Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' }
  };
}

// Expose to window
if (typeof window !== 'undefined') {
  Object.assign(window, {
    rotarytableformulas,
    findClosestRotaryTableMotor,
    getRotaryTableSizingSuggestions,
    getRotaryTableFormulas,
    getRotaryTableResultUnitMappings
  });
}
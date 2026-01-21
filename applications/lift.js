// Lift formulas (SI base units: kg, m, m/s, s → N, Nm, rad/s, W)
const liftformulas = {
  rotationalspeed: (maxSpeed, drumDiameter) => (2 * maxSpeed) / drumDiameter,
  forcegravity: (mass, gravity = 9.81) => mass * gravity,
  drumtorque: (force, drumDiameter) => force * (drumDiameter / 2),
  peakacceleration: (maxSpeed, accelDecelTime) => maxSpeed / accelDecelTime,
  peakdrumtorque: (drumDiameter, mass, linearAccel) => (drumDiameter / 2) * mass * (linearAccel + 9.81),
  motorpower: (torque, angularSpeed) => torque * angularSpeed
};

// Display Units
const liftDisplayUnits = {
  power: 'HP',
  torque: 'lb-in',
  speed: 'RPM'
};

function findClosestLiftMotor() {
  const loadWeight = getValueWithUnit('loadWeight');
  const maxSpeed = getValueWithUnit('maxSpeed');
  const drumDiameter = getValueWithUnit('drumDiameter');
  const gearEfficiency = parseFloat(document.getElementById('gearboxEfficiencyPercent').value) / 100 || 1.0;
  const accelDecelTime = parseFloat(document.getElementById('accelDecelTime').value);
  const safetyFactor = parseFloat(document.getElementById('safetyFactor').value);

  const gravityForce = liftformulas.forcegravity(loadWeight);
  const gearOutputSpeed = liftformulas.rotationalspeed(maxSpeed, drumDiameter);
  const loadTorque = liftformulas.drumtorque(gravityForce, drumDiameter) / gearEfficiency;
  const peakAccel = liftformulas.peakacceleration(maxSpeed, accelDecelTime);
  const loadPeakTorque = liftformulas.peakdrumtorque(drumDiameter, loadWeight, peakAccel) / gearEfficiency;
  const loadPower = loadTorque * gearOutputSpeed;
  const requiredMotorPower = (loadPower * safetyFactor) / gearEfficiency;

  displayStandardResults({
    [`(4) Required Motor Power (${window.selectedResultUnits?.power || liftDisplayUnits.power})`]: 
      convertResultValue(requiredMotorPower, 'power', window.selectedResultUnits?.power || liftDisplayUnits.power).toFixed(3),
    [`(1) Gearbox Output Speed (${window.selectedResultUnits?.speed || liftDisplayUnits.speed})`]: 
      convertResultValue(gearOutputSpeed, 'speed', window.selectedResultUnits?.speed || liftDisplayUnits.speed).toFixed(2),
    [`(2) Gearbox Required Torque (${window.selectedResultUnits?.torque || liftDisplayUnits.torque})`]: 
      convertResultValue(loadTorque, 'torque', window.selectedResultUnits?.torque || liftDisplayUnits.torque).toFixed(3),
    [`(3) Gearbox Peak Torque (${window.selectedResultUnits?.torque || liftDisplayUnits.torque})`]: 
      convertResultValue(loadPeakTorque, 'torque', window.selectedResultUnits?.torque || liftDisplayUnits.torque).toFixed(3)
  });
}

// Lift sizing suggestions
function getLiftSizingSuggestions() {
  return `<b>Lift Sizing Tips:</b><ul>
        <li>Calculate load weight and lift height for required torque.</li>
        <li>Include gearbox ratio and drum diameter for mechanical advantage.</li>
        <li>Consider acceleration/deceleration time for motor selection.</li>
    </ul>`;
}

// Lift formulas display
function getLiftFormulas() {
  return `
    <span class="formula"><b>   </b> \\( F_{gravity} = m \\cdot g \\)</span>
    <span class="formula"><b>(1)</b> \\( \\omega_{drum} = \\frac{2 \\cdot v_{max}}{D_{drum}} \\)</span>
    <span class="formula"><b>(2)</b> \\( T_{drum} = F_{gravity} \\cdot \\frac{D_{drum}}{2} \\)</span>
    <span class="formula"><b>   </b> \\( T_{accel} = m \\cdot a_{peak} \\)</span>
    <span class="formula"><b>(3)</b> \\( T_{peak} = T_{drum}  + T_{accel} \\)</span>
    <span class="formula"><b>   </b> \\( P_{load} = T_{drum} \\cdot \\omega_{drum} \\)</span>    
    <span class="formula"><b>(4)</b> \\( P_{motor} = \\frac{P_{load}}{\\eta_{gearbox}} \\)</span>
  `;
}

// Lift result unit mappings
function getLiftResultUnitMappings() {
  return {
    'Required Motor Power': { type: 'power', defaultUnit: liftDisplayUnits.power },
    'Motor Required Torque': { type: 'torque',  defaultUnit: liftDisplayUnits.torque },
    'Motor Peak Torque': { type: 'torque',  defaultUnit: liftDisplayUnits.torque },
    'Motor Speed': { type: 'speed', defaultUnit: liftDisplayUnits.speed },
    'Gearbox Required Torque': { type: 'torque', defaultUnit: liftDisplayUnits.torque },
    'Gearbox Peak Torque': { type: 'torque', defaultUnit: liftDisplayUnits.torque },
    'Gearbox Output Speed': { type: 'speed', defaultUnit: liftDisplayUnits.speed }
  };
}

// Expose to window
if (typeof window !== 'undefined') {
  Object.assign(window, {
    liftformulas,
    findClosestLiftMotor,
    getLiftSizingSuggestions,
    getLiftFormulas,
    getLiftResultUnitMappings
  });
}

  
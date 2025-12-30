// Conveyor formulas (SI base units: kg, rad, m/s → N, W, Nm)
const conveyorformulas = {
  frictionalForce: (loadMass, frictionCoefficient) => loadMass * frictionCoefficient * 9.81,
  inclineForce: (loadMass, inclineAngle) => loadMass * 9.81 * Math.abs(Math.sin(inclineAngle)),
  totalForce: (frictionalForce, inclineForce) => frictionalForce + inclineForce,
  linearToRotationalSpeed: (beltSpeed, rollerDiameter) => (beltSpeed * 2) / rollerDiameter,
  requiredMotorPower: (totalForce, beltSpeed) => totalForce * beltSpeed,
  requiredTorque: (totalForce, rollerDiameter) => (totalForce * rollerDiameter) / 2
};

function findClosestConveyorMotor() {
  const mass = getValueWithUnit('loadMass');
  const friction = parseFloat(document.getElementById('frictionCoefficient').value);
  const angle = getValueWithUnit('conveyorInclineAngle');
  const beltspeed = getValueWithUnit('beltSpeed');
  const diameter = getValueWithUnit('rollerDiameter');
  const gearboxRatio = getValueWithUnit('gearboxRatio');
  const safetyFactor = getValueWithUnit('safetyFactor');

  const fricForce = conveyorformulas.frictionalForce(mass, friction);
  const inclForce = conveyorformulas.inclineForce(mass, angle);
  const totalForce = conveyorformulas.totalForce(fricForce, inclForce);
  const rotSpeed = conveyorformulas.linearToRotationalSpeed(beltspeed, diameter);
  const power = conveyorformulas.requiredMotorPower(totalForce, beltspeed);
  const torque = conveyorformulas.requiredTorque(totalForce, diameter);

  displayStandardResults({
    [`(1) Frictional Force (${window.selectedResultUnits?.force || 'N'})`]: 
      convertResultValue(fricForce, 'force', window.selectedResultUnits?.force || 'N').toFixed(2),
    [`(2) Incline Force (${window.selectedResultUnits?.force || 'N'})`]: 
      convertResultValue(inclForce, 'force', window.selectedResultUnits?.force || 'N').toFixed(2),
    [`(3) Total Force (${window.selectedResultUnits?.force || 'N'})`]: 
      convertResultValue(totalForce, 'force', window.selectedResultUnits?.force || 'N').toFixed(2),
    [`(4) Required Motor Speed (${window.selectedResultUnits?.speed || 'RPM'})`]: 
      convertResultValue(rotSpeed * gearboxRatio, 'speed', window.selectedResultUnits?.speed || 'RPM').toFixed(2),
    [`(5) Required Motor Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(torque * safetyFactor / gearboxRatio, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(2),
    [`(6) Required Motor Power (${window.selectedResultUnits?.power || 'kW'})`]: 
      convertResultValue(power * safetyFactor, 'power', window.selectedResultUnits?.power || 'kW').toFixed(2),
    [`Gearbox Speed (${window.selectedResultUnits?.speed || 'RPM'})`]: 
      convertResultValue(rotSpeed, 'speed', window.selectedResultUnits?.speed || 'RPM').toFixed(2),
    [`Gearbox Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(torque, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(2)
  });
}

// Conveyor sizing suggestions
function getConveyorSizingSuggestions() {
  return `<b>Conveyor Sizing Tips:</b><ul>
    <li>Calculate belt speed and load mass for power requirements.</li>
    <li>Consider incline angle and friction coefficient.</li>
    <li>Check roller diameter for correct speed conversion.</li>
  </ul>`;
}

// Conveyor formulas display
function getConveyorFormulas() {
  return `
    <span class="formula"><b>(1)</b> \\( F_{friction} = m_{load} \\cdot g \\cdot\\mu_{friction} \\)</span>
    <span class="formula"><b>(2)</b> \\( F_{incline} = m_{load} \\cdot g \\cdot \\sin(\\theta) \\)</span>
    <span class="formula"><b>(3)</b> \\( F_{total} = F_{friction} + F_{incline} \\)</span>
    <span class="formula"><b>(4)</b> \\( \\omega_{motor} = \\frac{60 \\cdot v_{belt} \\cdot i}{\\pi \\cdot D_{roller}} \\)</span>
    <span class="formula"><b>(5)</b> \\( T_{motor} = \\frac{F_{total} \\cdot D_{roller}}{2 \\cdot i} \\)</span>
    <span class="formula"><b>(6)</b> \\( P_{motor} = F_{total} \\cdot v_{belt} \\)</span>
  `;
}

// Conveyor result unit mappings
function getConveyorResultUnitMappings() {
  return {
    'Required Motor Power': { type: 'power', component: 'motor', defaultUnit: 'kW' },
    'Required Motor Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Gearbox Torque': { type: 'torque', component: 'gearbox', defaultUnit: 'Nm' },
    'Required Motor Speed': { type: 'speed', component: 'motor', defaultUnit: 'RPM' },
    'Gearbox Speed': { type: 'speed', component: 'gearbox', defaultUnit: 'RPM' },
    'Total Force': { type: 'force', component: 'system', defaultUnit: 'N' },
    'Frictional Force': { type: 'force', component: 'system', defaultUnit: 'N' },
    'Incline Force': { type: 'force', component: 'system', defaultUnit: 'N' }
  };
}

// Expose to window
if (typeof window !== 'undefined') {
  Object.assign(window, {
    conveyorformulas,
    findClosestConveyorMotor,
    getConveyorSizingSuggestions,
    getConveyorFormulas,
    getConveyorResultUnitMappings
  });
}

if (typeof window !== 'undefined') window.getConveyorResultUnitMappings = getConveyorResultUnitMappings;
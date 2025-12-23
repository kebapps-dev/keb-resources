// Leadscrew formulas (SI base units: N, m, rad/s → Nm, W)
const leadscrewformulas = {
  screwRadius: (lead) => lead / (2 * Math.PI), // lead: m → radius: m
  rotSpeed: (linSpeed, screwRadius) => (linSpeed / screwRadius), // linSpeed: m/s, screwRadius: m → rad/s
  rotAcceleration: (linSpeed, accelTime, screwRadius) => (linSpeed / accelTime) / screwRadius, // linSpeed: m/s, screwRadius: m → rad/s²
  rotInertia : (mass, screwRadius) => mass * (screwRadius ** 2), // mass: kg, screwRadius: m → kg·m²
  totalInertia : (rotInertia, screwInertia, motorInertia, gearboxRatio) => rotInertia + screwInertia + (motorInertia/(gearboxRatio**2)), // kg·m²


  accelTorque: (totalInertia, rotAcceleration) => totalInertia * rotAcceleration, // totalInertia: kg·m², rotAcceleration: rad/s² → Nm
  loadTorque: (force, screwRadius, mechEff) => (force * screwRadius) / mechEff, // force: N, screwRadius: m → Nm
  peakTorque: (accelTorque, loadTorque) => (accelTorque + loadTorque), // Nm
  motorTorque: (peakTorque, gearboxRatio, gearboxEfficiency) => peakTorque / (gearboxRatio * gearboxEfficiency), // peakTorque: Nm → Nm
  motorPowerIncOverload: (peakTorque, rotSpeed, gearboxEfficiency, motorOverload) => (peakTorque * rotSpeed / gearboxEfficiency) * (1 / motorOverload) // motorTorque: Nm, rotSpeed: rad/s → W
};

if (typeof window !== 'undefined') window.leadscrewformulas = leadscrewformulas;

function findClosestLeadscrewMotor() {
  const linSpeed = getValueWithUnit('leadscrewLinSpeed'); // m/s
  const accelTime = getValueWithUnit('leadscrewAccelTime'); // s
  const mass = getValueWithUnit('leadscrewMass'); // kg
  const lead = getValueWithUnit('leadscrewLead'); // m
  const leadscrewInertia = getValueWithUnit('leadscrewInertia'); // kg·m²
  const leadscrewMechEff = Math.max(0.01, (getValueWithUnit('leadscrewMechEff') || 100) / 100); // dimensionless
  const force = getValueWithUnit('leadscrewForce'); // N
  const ratio = getValueWithUnit('leadscrewRatio'); // dimensionless
  const gearboxEfficiency = Math.max(0.01, (getValueWithUnit('leadscrewGearboxEff') || 100) / 100); // dimensionless
  const leadscrewMotorInertia = getValueWithUnit('leadscrewMotorInertia'); // kg·m²
  const motorOverload = getValueWithUnit('leadscrewOverload') / 100; // dimensionless

  const screwRadius = leadscrewformulas.screwRadius(lead);
  const motorSpeed = leadscrewformulas.rotSpeed(linSpeed, screwRadius);
  const totalInertia = leadscrewformulas.totalInertia(
    leadscrewformulas.rotInertia(mass, screwRadius), // estimate mass from force assuming vertical orientation
    leadscrewInertia,
    leadscrewMotorInertia,
    ratio
  );
  const accelTorque = leadscrewformulas.accelTorque(
    totalInertia, 
    leadscrewformulas.rotAcceleration(linSpeed, accelTime, screwRadius)
  );
  const loadTorque = leadscrewformulas.loadTorque(force, screwRadius, leadscrewMechEff);
  const peakTorque = leadscrewformulas.peakTorque(accelTorque, loadTorque);
  const motorTorque = leadscrewformulas.motorTorque(peakTorque, ratio, gearboxEfficiency);
  const motorPowerIncOverload = leadscrewformulas.motorPowerIncOverload(peakTorque, motorSpeed, gearboxEfficiency, motorOverload);

  displayStandardResults({
    [`(1) Required Motor Speed (${window.selectedResultUnits?.speed || 'RPM'})`]: 
      convertResultValue(motorSpeed, 'speed', window.selectedResultUnits?.speed || 'RPM').toFixed(3),
    [`Required Motor Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(motorTorque, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(3),
    [`Required Motor Power (${window.selectedResultUnits?.power || 'kW'})`]: 
      convertResultValue(motorPowerIncOverload, 'power', window.selectedResultUnits?.power || 'kW').toFixed(3)
  });
}

// Leadscrew sizing suggestions
function getLeadscrewSizingSuggestions() {
  return `<b>Leadscrew Sizing Tips:</b><ul>
    <li>Verify leadscrew pitch/lead for accurate speed and torque calculations.</li>
    <li>Include axial force and gearbox ratio for proper motor selection.</li>
    <li>Account for efficiency losses in the leadscrew and gearbox.</li>
    <li>Consider duty cycle and required positioning accuracy.</li>
  </ul>`;
}

// Leadscrew formulas display
function getLeadscrewFormulas() {
  return `
    <span class="formula"><b></b> \\( r_{screw} =   \\frac{L_{lead}}{2 \\pi} \\)</span>
    <span class="formula"><b>(1)</b> \\( RPM_{motor} = \\frac{v}{r_{screw}} \\)</span>
    <span class="formula"><b></b> \\( T_{accel} = J_{total} \\cdot \\alpha \\)</span>
    <span class="formula"><b></b> \\( T_{load} = \\frac{F \\cdot r_{screw}}{\\eta_{mech}} \\)</span>
    <span class="formula"><b></b> \\( T_{peak} = T_{accel} + T_{load} \\)</span>
    <span class="formula"><b>(2)</b> \\( T_{motor} = \\frac{T_{peak}}{i \\cdot \\eta_{gearbox}} \\)</span>
    <span class="formula"><b>(3)</b> \\( P = \\frac{T_{peak} \\cdot \\omega}{\\eta_{gearbox} \\cdot OL} \\)</span>
  `;
}

// Leadscrew result unit mappings
function getLeadscrewResultUnitMappings() {
  return {
    'Required Motor Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Required Motor Power': { type: 'power', component: 'motor', defaultUnit: 'kW' },
    'Required Motor Speed': { type: 'speed', component: 'motor', defaultUnit: 'RPM' }
  };
}

// Expose to window
if (typeof window !== 'undefined') {
  Object.assign(window, {
    leadscrewformulas,
    findClosestLeadscrewMotor,
    getLeadscrewSizingSuggestions,
    getLeadscrewFormulas,
    getLeadscrewResultUnitMappings
  });
}


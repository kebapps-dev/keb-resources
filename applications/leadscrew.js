// Leadscrew formulas (SI base units: N, m, rad/s → Nm, W)
const leadscrewformulas = {
  screwRadius: (lead) => lead / (2 * Math.PI), // lead: m → radius: m
  rotSpeed: (linSpeed, screwRadius) => (linSpeed / screwRadius), // linSpeed: m/s, screwRadius: m → rad/s
  rotAcceleration: (rotSpeed, accelTime) => rotSpeed / accelTime, // rotSpeed: rad/s, accelTime: s → rad/s²
  rotInertia : (mass, screwRadius) => mass * (screwRadius ** 2), // mass: kg, screwRadius: m → kg·m²
  totalInertia : (loadInertia, screwInertia, motorInertia, gearboxRatio) => 
  (loadInertia + screwInertia) / (gearboxRatio ** 2) + motorInertia, // kg·m²


  accelTorque: (totalInertia, rotAcceleration) => totalInertia * rotAcceleration, // totalInertia: kg·m², rotAcceleration: rad/s² → Nm
  loadTorque: (force, screwRadius, mechEff) => (force * screwRadius) / mechEff, // force: N, screwRadius: m → Nm
  peakTorque: (accelTorque, loadTorque) => (accelTorque + loadTorque), // Nm
  motorTorque: (peakTorque, gearboxRatio, gearboxEfficiency) => peakTorque / (gearboxRatio * gearboxEfficiency), // peakTorque: Nm → Nm
  motorPower: (peakTorque, rotSpeed) => (peakTorque * rotSpeed) // motorTorque: Nm, rotSpeed: rad/s → W
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
  const safetyFactor = getValueWithUnit('leadscrewSafetyFactor'); // dimensionless

  const screwRadius = leadscrewformulas.screwRadius(lead);
  const outputSpeed = leadscrewformulas.rotSpeed(linSpeed, screwRadius);
  const motorSpeed = outputSpeed * ratio;
  const totalInertia = leadscrewformulas.totalInertia(
    leadscrewformulas.rotInertia(mass, screwRadius),
    leadscrewInertia,
    leadscrewMotorInertia,
    ratio
  );
  const motorAcceleration = leadscrewformulas.rotAcceleration(motorSpeed, accelTime);
  const accelTorqueMotorSide = leadscrewformulas.accelTorque(totalInertia, motorAcceleration);
  const loadTorqueGearboxSide = leadscrewformulas.loadTorque(force, screwRadius, leadscrewMechEff);
  const loadTorqueMotorSide = loadTorqueGearboxSide / (ratio * gearboxEfficiency);
  const motorTorque = accelTorqueMotorSide + loadTorqueMotorSide;
  const motorPower = leadscrewformulas.motorPower(motorTorque, motorSpeed);

  displayStandardResults({
    [`(1) Required Motor Speed (${window.selectedResultUnits?.speed || 'RPM'})`]: 
      convertResultValue(motorSpeed, 'speed', window.selectedResultUnits?.speed || 'RPM').toFixed(3),
    [`(2) Required Motor Torque (${window.selectedResultUnits?.torque || 'Nm'})`]: 
      convertResultValue(motorTorque * safetyFactor, 'torque', window.selectedResultUnits?.torque || 'Nm').toFixed(3),
    [`(3) Required Motor Power (${window.selectedResultUnits?.power || 'kW'})`]: 
      convertResultValue(motorPower * safetyFactor, 'power', window.selectedResultUnits?.power || 'kW').toFixed(3),
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
    <span class="formula"><b>(1)</b> \\( \\omega_{motor} = \\frac{v \\cdot i}{r_{screw}} \\)</span>
    <span class="formula"><b></b> \\( \\alpha_{motor} = \\frac{\\omega_{motor}}{t_{accel}} \\)</span>
    <span class="formula"><b></b> \\( J_{load} = m \\cdot r_{screw}^2 \\)</span>
    <span class="formula"><b></b> \\( J_{total@motor} = \\frac{J_{load} + J_{screw}}{i^2} + J_{motor} \\)</span>
    <span class="formula"><b></b> \\( T_{accel@motor} = J_{total@motor} \\cdot \\alpha_{motor} \\)</span>
    <span class="formula"><b></b> \\( T_{load@gearbox} = \\frac{F \\cdot r_{screw}}{\\eta_{mech}} \\)</span>
    <span class="formula"><b></b> \\( T_{load@motor} = \\frac{T_{load@gearbox}}{i \\cdot \\eta_{gearbox}} \\)</span>
    <span class="formula"><b>(2)</b> \\( T_{peak@motor} = T_{accel@motor} + T_{load@motor} \\)</span>
    <span class="formula"><b>(3)</b> \\( P_{motor} = T_{peak@motor} \\cdot \\omega_{motor} \\)</span>
  `;
}

// Leadscrew result unit mappings
function getLeadscrewResultUnitMappings() {
  return {
    'Required Motor Torque': { type: 'torque', component: 'motor', defaultUnit: 'Nm' },
    'Required Motor Power': { type: 'power', component: 'motor', defaultUnit: 'kW' },
    'Required Motor Speed': { type: 'speed', component: 'motor', defaultUnit: 'RPM' },
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


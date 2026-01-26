// linearmotor formulas (SI base units: kg, rad, m/s → N, W, Nm)
const linearmotorformulas = {
};

function findClosestLinearmotorMotor() {
  const mass = getValueWithUnit('linearmotorMass');
  const distanceNtoN = getValueWithUnit('linearmotorDistanceNtoN');
  const velocity = getValueWithUnit('linearmotorVelocity');
  const ratedCurrent = parseFloat(document.getElementById('linearmotorRatedCurrent').value);
  const forceConstantKf = parseFloat(document.getElementById('linearmotorForceConstantKf').value);
  const emfConstant = parseFloat(document.getElementById('linearmotorEMFconstant').value);
  const zperPole = parseFloat(document.getElementById('linearmotorZperPole').value);

  const radius = distanceNtoN / (2 * Math.PI * zperPole);
  const cs17 = (mass * (radius ** 2));
  const Fn = forceConstantKf * ratedCurrent;
  const P = Fn * velocity;
  const dr06 = velocity / distanceNtoN;
  const dr04 = dr06 / zperPole * 60;
  const dr09 = P / (dr04 / 60 * 2 * Math.PI);
  const dr14 = emfConstant * velocity / dr04 * 1000; // EMK at 1000 RPM

  displayStandardResults({
    'dr03 - Rated Current (A) ': ratedCurrent.toFixed(2),
    'dr04 - Rated Speed (RPM) ': dr04.toFixed(2),
    'dr06 - Rated Frequency (Hz) ': dr06.toFixed(2),
    'dr09 - Rated Torque (Nm) ': dr09.toFixed(3),
    'dr14 - EMK @1000RPM': dr14.toFixed(3),
    [`cs17 - Rated Motor Inertia (${window.selectedResultUnits?.inertia || 'kg-cm²'})`]: 
      convertResultValue(cs17, 'inertia', window.selectedResultUnits?.inertia || 'kg-cm²').toFixed(3),
  });
}

// linearmotor sizing suggestions
function getLinearmotorSizingSuggestions() {
  return `<b>linearmotor Sizing Tips:</b><ul>
    <li>Calculate belt speed and load mass for power requirements.</li>
    <li>Consider incline angle and friction coefficient.</li>
    <li>Check roller diameter for correct speed conversion.</li>
  </ul>`;
}

// linearmotor formulas display
function getLinearmotorFormulas() {
  return `
    <span class="formula"><b>(1)</b> \\( F_{friction} = m_{load} \\cdot g \\cdot\\mu_{friction} \\)</span>
    <span class="formula"><b>(2)</b> \\( F_{incline} = m_{load} \\cdot g \\cdot \\sin(\\theta) \\)</span>
    <span class="formula"><b>(3)</b> \\( F_{total} = F_{friction} + F_{incline} \\)</span>
    <span class="formula"><b>(4)</b> \\( \\omega_{motor} = \\frac{60 \\cdot v_{belt} \\cdot i}{\\pi \\cdot D_{roller}} \\)</span>
    <span class="formula"><b>(5)</b> \\( T_{motor} = \\frac{F_{total} \\cdot D_{roller}}{2 \\cdot i} \\)</span>
    <span class="formula"><b>(6)</b> \\( P_{motor} = F_{total} \\cdot v_{belt} \\)</span>
  `;
}

// linearmotor result unit mappings
function getLinearmotorResultUnitMappings() {
  return {
    '(1) Rated Motor Inertia cs17': { type: 'inertia', component: 'motor', defaultUnit: 'kg-cm²' }
  };
}

// Expose to window
if (typeof window !== 'undefined') {
  Object.assign(window, {
    linearmotorformulas,
    findClosestLinearmotorMotor,
    getLinearmotorSizingSuggestions,
    getLinearmotorFormulas,
    getLinearmotorResultUnitMappings
  });
}

if (typeof window !== 'undefined') window.getLinearmotorResultUnitMappings = getLinearmotorResultUnitMappings;
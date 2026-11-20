// Physics Inter Part 1 - Bahawalpur Board past papers (2021, 2022, 2023, 2024; Group 1 aur Group 2)
// Answer key paper mein nahi tha: jawab maine khud hal kiye hain.
// "// check" wale jawab teacher ya key se zaroor mila lena.
// repeated: kitni baar past papers mein aaya (field na ho to 1).
const M = 'Measurements';
const VE = 'Vectors and Equilibrium';
const MF = 'Motion and Force';
const WE = 'Work and Energy';
const CM = 'Circular Motion';
const FD = 'Fluid Dynamics';
const OS = 'Oscillations';
const WV = 'Waves';
const PO = 'Physical Optics';
const OI = 'Optical Instruments';
const HT = 'Heat and Thermodynamics';

export default [
  // ---------- 2023 Group 1 ----------
  { id: 'p1', chapter: M, question: 'Physical quantities are divided into ___ categories:', options: ['1', '2', '3', '4'], correctAnswer: '2' },
  { id: 'p2', chapter: M, question: 'Dimension of Force is:', options: ['ML⁻²', 'MLT⁻²', 'ML⁻¹T', 'MLT²'], correctAnswer: 'MLT⁻²' },
  { id: 'p3', chapter: VE, question: 'A + (−A) =', options: ['2A', 'A', '0', '-1'], correctAnswer: '0' },
  { id: 'p4', chapter: VE, question: 'î · î = ĵ · ĵ = k̂ · k̂ =', options: ['1', '0', '-1', 'None of these'], correctAnswer: '1' },
  { id: 'p5', chapter: MF, repeated: 2, question: 'Acceleration "a" of the rocket is:', options: ['Mv/m', 'mv/m', 'mv/M', 'Mm/v'], correctAnswer: 'mv/M' },
  { id: 'p6', chapter: MF, question: 'Height of projectile h =', options: ['Vi sin²θ / 2g', 'Vi² sinθ / g', 'Vi sinθ / g', 'Vi² sin²θ / 2g'], correctAnswer: 'Vi² sin²θ / 2g' },
  { id: 'p7', chapter: WE, question: 'No work is done when θ =', options: ['0°', '180°', '90°', '360°'], correctAnswer: '90°' },
  { id: 'p8', chapter: CM, question: '1 rad =', options: ['2π/360°', '360°/2π', '2π/3', '57°π'], correctAnswer: '360°/2π' },
  { id: 'p9', chapter: MF, question: 'When the lift is moving upward with an acceleration "a", then tension in string is:', options: ['w + ma', 'w + ma²', 'ma − w', 'w − ma'], correctAnswer: 'w + ma' },
  { id: 'p10', chapter: FD, question: 'The mass of a droplet is:', options: ['ρ/V', 'V/ρ', 'ρV', '2ρV'], correctAnswer: 'ρV' },
  { id: 'p11', chapter: OS, question: 'Time period of pendulum T =', options: ['2π√(l/g)', '√(2πl/g)', '2π√(g/ρ)', '2g√(π/ρ)'], correctAnswer: '2π√(l/g)' },
  { id: 'p12', chapter: WV, question: 'Laplace expression for the speed of sound in gas v =', options: ['√(vγ/p)', '√(γP/ρ)', 'ρ√(γ/p)', 'γ√(ρ/p)'], correctAnswer: '√(γP/ρ)' },
  { id: 'p13', chapter: WV, question: 'In the fundamental note, the distance between node and antinode is:', options: ['ℓ = λ₁/4', 'ℓ = 4λ₁/2', 'ℓ = λ₁/2', 'ℓ = 2λ'], correctAnswer: 'ℓ = λ₁/4' }, // check
  { id: 'p14', chapter: OI, question: 'Angular magnification is defined as M =', options: ['α/β', 'β/α', 'αβ', 'α²β²'], correctAnswer: 'β/α' }, // check
  { id: 'p15', chapter: HT, question: "In Charles's law, the constant is:", options: ['Pressure', 'Temperature', 'Volume', 'Density'], correctAnswer: 'Pressure' },
  { id: 'p16', chapter: HT, question: 'Entropy of the universe is always:', options: ['Remain Constant', 'Increases', 'Decreases', 'Always Zero'], correctAnswer: 'Increases' },

  // ---------- 2023 Group 2 ----------
  { id: 'p17', chapter: M, question: 'The percentage uncertainty in radius of a circle is 3%. The total uncertainty in the area of a circle is:', options: ['4%', '3%', '6%', '9%'], correctAnswer: '6%' },
  { id: 'p18', chapter: VE, question: 'If A × B points along negative z-axis, the vectors A and B must lie in:', options: ['y-z Plane', 'y-x Plane', 'x-y Plane', 'z-x Plane'], correctAnswer: 'x-y Plane' },
  { id: 'p19', chapter: VE, question: 'A force of 10 N makes an angle of 60° with y-axis, its y-component is:', options: ['5√3 N', '8.66 N', '10 N', '5 N'], correctAnswer: '5 N' },
  { id: 'p20', chapter: M, question: 'The dimensions of ½ρv² are:', options: ['ML⁻¹T⁻²', 'M⁰L²T⁻²', 'ML⁻³', 'ML²T⁻²'], correctAnswer: 'ML⁻¹T⁻²' },
  { id: 'p21', chapter: M, question: 'Inertia may be expressed in S.I.:', options: ['Kg', 'Newton', 'Watt', 'Joule'], correctAnswer: 'Kg' },
  { id: 'p22', chapter: CM, question: "The escape velocity of a 30 Kg object from the Earth's surface is about:", options: ['22 Kms⁻¹', '11 Kms⁻¹', '330 Kms⁻¹', '30 Kms⁻¹'], correctAnswer: '11 Kms⁻¹' },
  { id: 'p23', chapter: MF, question: 'In the absence of external force, the impulse of a body is:', options: ['Constant', 'Maximum', 'Zero', 'Minimum'], correctAnswer: 'Zero' },
  { id: 'p24', chapter: CM, question: 'Which theory is better about gravitation:', options: ['Newton', "Plank's", "Huygen's", "Einstein's"], correctAnswer: "Einstein's" },
  { id: 'p25', chapter: CM, question: 'Angular displacement covered by Earth around the sun in one year is about:', options: ['π Radian', 'π/2 Radian', 'π/4 Radian', '2π Radian'], correctAnswer: '2π Radian' },
  { id: 'p26', chapter: OS, question: 'A swing is a good example of:', options: ['Mechanical Resonance', 'Chemical Resonance', 'Electrical Resonance', 'Doppler Effect'], correctAnswer: 'Mechanical Resonance' },
  { id: 'p27', chapter: FD, question: 'The terminal velocity of a fog droplet in air is:', options: ['Zero', 'Large', 'Very Small', 'Medium'], correctAnswer: 'Very Small' },
  { id: 'p28', chapter: PO, question: "In Michelson's interferometer one fringe is counted when mirror M1 is displaced by:", options: ['λ', 'λ/4', 'λ/8', 'λ/2'], correctAnswer: 'λ/2' },
  { id: 'p29', chapter: HT, question: 'In thermodynamics, internal energy of a gas molecules is independent of:', options: ['Initial State', 'Final State', 'Path Followed', 'All of these'], correctAnswer: 'Path Followed' },
  { id: 'p30', chapter: WV, question: 'The sound of frequency lower than 20 Hz is called:', options: ['Infra Sonic', 'Super Sonic', 'Sonic', 'Ultra Sonic'], correctAnswer: 'Infra Sonic' },
  { id: 'p31', chapter: OI, question: 'The resolving power of a compound microscope increases when we use:', options: ['White Light', 'Red Light', 'Blue Light', 'Yellow Light'], correctAnswer: 'Blue Light' },

  // ---------- 2024 Group 1 ----------
  { id: 'p32', chapter: M, question: 'The main frontiers of fundamental science are:', options: ['1', '2', '3', '4'], correctAnswer: '3' },
  { id: 'p33', chapter: VE, question: 'If |A · B| = |A × B|, then the angle between vectors A and B is:', options: ['0', 'π/4', 'π/2', 'π'], correctAnswer: 'π/4' },
  { id: 'p34', chapter: VE, question: 'The vector A = (1/√2) î + (1/√2) ĵ is a:', options: ['Null Vector', 'Unit Vector', 'Vector of magnitude √2', 'Vector of magnitude 1/√2'], correctAnswer: 'Unit Vector' },
  { id: 'p35', chapter: M, question: 'The sum of three numbers 2.7543, 4.10 and 1.273 upto correct decimal place is:', options: ['8.12', '8.13', '8.127', '8.1273'], correctAnswer: '8.13' },
  { id: 'p36', chapter: WE, question: 'The momentum and kinetic energy of a body having the same value at the speed of:', options: ['8 ms⁻¹', '1 ms⁻¹', '4 ms⁻¹', '2 ms⁻¹'], correctAnswer: '2 ms⁻¹' },
  { id: 'p37', chapter: CM, question: 'The relation for moment of inertia of the thin ring is:', options: ['mr²', '1/2 mr²', '2/5 mr²', '2/3 mr²'], correctAnswer: 'mr²' },
  { id: 'p38', chapter: WE, repeated: 3, question: 'Tidal energy is due to gravitational pull of:', options: ['Moon', 'Sun', 'Earth', 'Mars'], correctAnswer: 'Moon' },
  { id: 'p39', chapter: MF, question: 'Motion of projectile is:', options: ['One Dimensional', 'Two Dimensional', 'Three Dimensional', 'Four Dimensional'], correctAnswer: 'Two Dimensional' },
  { id: 'p40', chapter: CM, question: 'The unit of rotational K.E is:', options: ['rad s⁻¹', 'Js', 'J', 'Kgm²'], correctAnswer: 'J' },
  { id: 'p41', chapter: PO, question: 'If the path difference between two waves is λ/2, then interference will be:', options: ['Constructive', 'Destructive', 'Beats', 'Both A and B'], correctAnswer: 'Destructive' },
  { id: 'p42', chapter: OS, question: 'Time period of simple pendulum only depends on:', options: ['Mass', 'Length', 'Amplitude', 'Displacement'], correctAnswer: 'Length' },
  { id: 'p43', chapter: FD, question: "Stoke's law holds for bodies when they have:", options: ['Spherical Shape', 'Curved Shape', 'Rectangular Shape', 'Triangle Shape'], correctAnswer: 'Spherical Shape' },
  { id: 'p44', chapter: WV, question: 'The maximum value of beat frequency is:', options: ['10 Hz', '100 Hz', '20 Hz', '30 Hz'], correctAnswer: '10 Hz' }, // check
  { id: 'p45', chapter: HT, question: 'When ice melts, entropy:', options: ['Increases', 'Decreases', 'Constant', 'Zero'], correctAnswer: 'Increases' },
  { id: 'p46', chapter: OI, repeated: 2, question: 'Using the relation for magnification power M = 1 + d/f, if f = 5 cm and d = 25 cm then M will be:', options: ['4', '5', '6', '7'], correctAnswer: '6' },
  { id: 'p47', chapter: PO, question: 'The effective path difference between two x-ray beams reflected from a crystal plane is:', options: ['d sinθ', '(d/2) sinθ', '2d sinθ', '2 sinθ / d'], correctAnswer: '2d sinθ' },
  { id: 'p48', chapter: HT, question: 'For the isothermal process, the first law of thermodynamics can be written as:', options: ['Q = ΔU + W', 'Q = ΔU', 'Q = -ΔU', 'Q = W'], correctAnswer: 'Q = W' },

  // ---------- 2024 Group 2 ----------
  { id: 'p49', chapter: HT, question: 'The entropy of sand in a desert at night time will be:', options: ['Increases', 'Zero', 'Constant', 'Decreases'], correctAnswer: 'Decreases' },
  { id: 'p50', chapter: OI, question: 'The infrared light emitted from LED has a wavelength:', options: ['1.3 µm', '1.23 µm', '1.38 µm', '1 µm'], correctAnswer: '1.3 µm' }, // check
  { id: 'p51', chapter: PO, repeated: 2, question: 'The spacing between two adjacent dark fringes is:', options: ['λL/2d', 'λL/d', 'nλ/d', '2L/d'], correctAnswer: 'λL/d' },
  { id: 'p52', chapter: WV, question: 'The wavelength of the fundamental mode of vibration of a closed end pipe is:', options: ['2ℓ', 'ℓ', 'ℓ/2', '4ℓ'], correctAnswer: '4ℓ' },
  { id: 'p53', chapter: OS, question: 'When the bob of simple pendulum is at its dynamic equilibrium (mean) position, it has:', options: ['K.E', 'P.E and K.E', 'P.E', 'Both A and B'], correctAnswer: 'K.E' },
  { id: 'p54', chapter: FD, question: 'A two meter high tank containing water is hit by two bullets of same caliber at 1.5 m and 1 m above the ground, the speed of efflux is maximum for:', options: ['1 m', '1.5 m', '0.5 m', '0.3 m'], correctAnswer: '1 m' },
  { id: 'p55', chapter: CM, question: '100° is equal to:', options: ['1.7 rad', '16.5 rad', '1.82 rad', '1.75 rad'], correctAnswer: '1.75 rad' },
  { id: 'p56', chapter: MF, question: 'A man in an elevator descending with deceleration will conclude that his apparent weight has:', options: ['Increased', 'Decreased', 'Remain Constant', 'Reduced to Zero'], correctAnswer: 'Increased' },
  { id: 'p57', chapter: M, question: 'Acceleration of 1.5 ms⁻² expressed in Km Hour⁻² is:', options: ['324 Km Hour⁻²', '19440 Km Hour⁻²', '5400 Km Hour⁻²', '4 Km Hour⁻²'], correctAnswer: '19440 Km Hour⁻²' },
  { id: 'p58', chapter: MF, question: 'Distance covered by a freely falling body in 2 sec will be:', options: ['4.9 m', '29.2 m', '19.6 m', '44.1 m'], correctAnswer: '19.6 m' },
  { id: 'p59', chapter: VE, question: 'The angle between two vectors 2î − 3ĵ and 3k̂ is:', options: ['30°', '90°', '60°', '0°'], correctAnswer: '90°' },
  { id: 'p60', chapter: VE, question: 'A paratrooper having:', options: ['Dynamic Equilibrium', 'Static Equilibrium', 'Acceleration', 'Zero Velocity'], correctAnswer: 'Dynamic Equilibrium' },
  { id: 'p61', chapter: M, question: 'Kgm²s⁻² is the unit of:', options: ['Work', 'Force', 'Moment of Force', 'Both A and C'], correctAnswer: 'Both A and C' },

  // ---------- 2022 Group 1 ----------
  { id: 'p62', chapter: HT, question: 'Average translational kinetic energy of a gas molecule is related by:', options: ['1/2 KT', 'KT', '2/3 KT', '3/2 KT'], correctAnswer: '3/2 KT' },
  { id: 'p63', chapter: HT, question: 'The S.I. unit of product of pressure and volume is:', options: ['Watt', 'Joule', 'Pascal', 'Kelvin'], correctAnswer: 'Joule' },
  { id: 'p64', chapter: PO, question: 'When a beam of white light falls perpendicularly on a plane of glass, then the angle of refraction will be:', options: ['90°', '60°', '0°', '180°'], correctAnswer: '0°' },
  { id: 'p65', chapter: PO, question: 'The phase difference of 180° is equivalent to a path difference of:', options: ['λ/2', 'λ/4', '2λ', 'λ'], correctAnswer: 'λ/2' },
  { id: 'p66', chapter: WV, question: 'Speed of sound in air is independent of:', options: ['Density', 'Pressure', 'Temperature', 'Elasticity'], correctAnswer: 'Pressure' },
  { id: 'p67', chapter: WV, question: 'Speed of sound at 10°C is:', options: ['332 ms⁻¹', '339 ms⁻¹', '349 ms⁻¹', '360 ms⁻¹'], correctAnswer: '339 ms⁻¹' }, // check
  { id: 'p68', chapter: OS, question: 'Total energy of a particle in SHM is proportional to square of:', options: ['Acceleration', 'Velocity', 'Time Period', 'Amplitude'], correctAnswer: 'Amplitude' },
  { id: 'p69', chapter: FD, question: 'Pressure is low where speed is:', options: ['High', 'Low', 'Zero', 'Constant'], correctAnswer: 'High' },
  { id: 'p70', chapter: MF, question: 'The range of a projectile becomes half of the maximum range at angle of projection:', options: ['15°', '25°', '45°', '72°'], correctAnswer: '15°' },
  { id: 'p71', chapter: CM, question: 'How many radians are in a semi circle:', options: ['2π rad', 'π/2 rad', 'π rad', '10π rad'], correctAnswer: 'π rad' },
  { id: 'p72', chapter: CM, question: 'Escape velocity of an object is independent of:', options: ['Mass of the Object', 'Mass of the Planet', 'Radius of the Planet', 'Type of Planet'], correctAnswer: 'Mass of the Object' },
  { id: 'p73', chapter: MF, question: 'For the impulse to be zero, which of the following must be constant:', options: ['Force', 'Velocity', 'Acceleration', 'All these'], correctAnswer: 'Velocity' }, // check
  { id: 'p74', chapter: MF, question: 'The time to reach the maximum height by the projectile is:', options: ['Vi Sinθ / g', '2 Vi Sinθ / g', 'Vi² Sin²θ / g', 'Vi² Sinθ / g'], correctAnswer: 'Vi Sinθ / g' },
  { id: 'p75', chapter: VE, question: 'Minimum coplanar unequal forces for producing equilibrium are:', options: ['2', '3', '4', '5'], correctAnswer: '3' },
  { id: 'p76', chapter: VE, question: 'î · (ĵ × k̂) equals:', options: ['1', 'Zero', 'î', '-ĵ'], correctAnswer: '1' },
  { id: 'p77', chapter: M, question: 'The percentage uncertainties in length and width of a rectangle are 2% and 3%. Its area has percentage uncertainty:', options: ['1%', '5%', '6%', '2%'], correctAnswer: '5%' },
  { id: 'p78', chapter: M, question: 'The number 56.8546 is rounded off to three significant figures as:', options: ['57.0', '56.8', '56.9', '56.854'], correctAnswer: '56.9' },

  // ---------- 2022 Group 2 ----------
  { id: 'p79', chapter: VE, question: 'The magnitude of the vector product of two non-zero vectors A and B making an angle θ with each other is:', options: ['AB Sinθ · n̂', 'AB Cosθ', 'AB Sinθ', 'AB'], correctAnswer: 'AB Sinθ' },
  { id: 'p80', chapter: M, question: 'Error in the measurement of radius of a sphere is 1%. The error in the calculated value of volume is:', options: ['1%', '3%', '5%', '7%'], correctAnswer: '3%' },
  { id: 'p81', chapter: M, repeated: 2, question: 'The dimensions of the relation √(F × l / m) are equal to the dimensions of:', options: ['Force', 'Momentum', 'Acceleration', 'Velocity'], correctAnswer: 'Velocity' },
  { id: 'p82', chapter: VE, question: 'If cross product A × B is along y-axis, then A and B must lie in:', options: ['xy-Plane', 'yz-Plane', 'Space', 'xz-Plane'], correctAnswer: 'xz-Plane' },
  { id: 'p83', chapter: MF, question: 'In projectile motion, the vertical component of the velocity:', options: ['Remains Constant', 'Becomes Zero', 'Varies Point to Point', 'Increases with time'], correctAnswer: 'Varies Point to Point' },
  { id: 'p84', chapter: MF, question: 'For a typical rocket, how much mass of rocket is in the form of fuel:', options: ['50%', '60%', '80%', '100%'], correctAnswer: '80%' }, // check
  { id: 'p85', chapter: CM, question: 'If linear velocity and radius are both made half of a body moving in a circle, the centripetal force becomes:', options: ['Fc', 'Fc/2', 'Fc/4', '2Fc'], correctAnswer: 'Fc/2' },
  { id: 'p86', chapter: OS, question: 'In mass spring system, ½ K x₀² represents:', options: ['Total Energy', 'Kinetic Energy', 'Potential Energy', 'Velocity'], correctAnswer: 'Total Energy' },
  { id: 'p87', chapter: FD, question: 'The fluid is said to be incompressible if its density is:', options: ['Zero', 'Very High', 'Very Small', 'Constant'], correctAnswer: 'Constant' },
  { id: 'p88', chapter: CM, question: 'The ratio of moment of inertia of disc and hoop is:', options: ['1/2', '1/4', '3/4', '3/2'], correctAnswer: '1/2' },
  { id: 'p89', chapter: WV, question: 'Types of waves used in Sonar are:', options: ['Light Waves', 'Heat Waves', 'Sound Waves', 'Water Waves'], correctAnswer: 'Sound Waves' },
  { id: 'p90', chapter: OI, question: 'The light signal in optical fibre must be regenerated by a device called:', options: ['Motor', 'Generator', 'Repeater', 'Laser'], correctAnswer: 'Repeater' },
  { id: 'p91', chapter: HT, question: 'What remains constant in an adiabatic process:', options: ['Volume', 'Pressure', 'Temperature', 'Heat'], correctAnswer: 'Heat' },
  { id: 'p92', chapter: WV, question: 'If a stretched string is 4 m and has 4 loops of stationary wave, then wavelength is:', options: ['1 m', '2 m', '3 m', '4 m'], correctAnswer: '2 m' },
  { id: 'p93', chapter: HT, question: 'If P = pressure, V = volume of a gas, then PΔV represents:', options: ['Work', 'Density', 'Power', 'Temperature'], correctAnswer: 'Work' },
  { id: 'p94', chapter: PO, question: 'Fringe spacing increases if we use:', options: ['Red Light', 'Blue Light', 'Yellow Light', 'Green Light'], correctAnswer: 'Red Light' },

  // ---------- 2021 Group 1 ----------
  { id: 'p95', chapter: M, question: 'If the percentage uncertainty in the radius of a sphere is 3%, then total uncertainty in volume is:', options: ['4%', '7%', '9%', '13%'], correctAnswer: '9%' },
  { id: 'p96', chapter: VE, question: 'The magnitudes of dot and cross product of two vectors are 2√3 and 2 respectively, then the angle between vectors is:', options: ['30°', '45°', '60°', '90°'], correctAnswer: '30°' },
  { id: 'p97', chapter: VE, question: 'If two unit vectors are perpendicular to each other, then magnitude of their resultant is:', options: ['1', '√2', '√2.5', '2√2'], correctAnswer: '√2' },
  { id: 'p98', chapter: CM, question: 'The speed of a hoop on reaching the bottom of an inclined plane is:', options: ['√(3/4 gh)', '√(gh)', '√(4/3 gh)', '√(2gh)'], correctAnswer: '√(gh)' },
  { id: 'p99', chapter: WE, question: 'Kilo Watt-Second is the unit of:', options: ['Power', 'Energy', 'Momentum', 'Time'], correctAnswer: 'Energy' },
  { id: 'p100', chapter: MF, question: 'For which pair of angles, range is same:', options: ['(15°, 60°)', '(35°, 65°)', '(30°, 60°)', '(20°, 45°)'], correctAnswer: '(30°, 60°)' },
  { id: 'p101', chapter: CM, question: 'The ratio of rotational and translational K.E. of hoop is:', options: ['1 : 2', '1 : √2', '1 : 1', '√2 : 1'], correctAnswer: '1 : 1' },
  { id: 'p102', chapter: HT, question: 'The value of γ for diatomic gas is:', options: ['1.29', '1.4', '1.67', '1.73'], correctAnswer: '1.4' },
  { id: 'p103', chapter: OS, question: 'Time period of simple pendulum is directly proportional to:', options: ['ℓ', 'ℓ²', 'ℓ^(1/2)', 'g'], correctAnswer: 'ℓ^(1/2)' },
  { id: 'p104', chapter: FD, question: 'If radius of a droplet is halved, then its terminal velocity becomes:', options: ['Half', 'Double', 'One Fourth', 'Four Times'], correctAnswer: 'One Fourth' },
  { id: 'p105', chapter: WV, question: 'The speed of sound at a given temperature is v, by doubling pressure speed of sound is:', options: ['0.5 v', 'v', '2v', '3v'], correctAnswer: 'v' },
  { id: 'p106', chapter: HT, question: 'Pressure of a gas is equal to:', options: ['2/3 ρ<v²>', '3/2 ρ<v²>', '1/3 ρ<v²>', 'ρ<v²>'], correctAnswer: '1/3 ρ<v²>' },
  { id: 'p107', chapter: PO, question: 'Angle between wavefront and ray of light is:', options: ['0°', '45°', '60°', '90°'], correctAnswer: '90°' },
  { id: 'p108', chapter: HT, question: 'For a diatomic gas Cv = 5R/2, then γ for this gas is equal to:', options: ['5/7', '7/5', '4/3', '3/4'], correctAnswer: '7/5' },

  // ---------- 2021 Group 2 ----------
  { id: 'p109', chapter: WE, question: "In earth's gravitational field, work done in a closed path is:", options: ['Maximum', 'Positive', 'Negative', 'Zero'], correctAnswer: 'Zero' },
  { id: 'p110', chapter: FD, question: 'A two meter high tank is full of water. A hole appears at its middle, what is speed of efflux:', options: ['3.75 m/s', '4.91 m/s', '4.42 m/s', '5.11 m/s'], correctAnswer: '4.42 m/s' },
  { id: 'p111', chapter: OS, question: 'A particle executes SHM of amplitude A. Potential energy is maximum when the displacement is:', options: ['±A', 'Zero', '±A/2', '±A/√2'], correctAnswer: '±A' },
  { id: 'p112', chapter: PO, question: "In Young's double slit experiment the fringe spacing is equal to:", options: ['d/λL', 'L/λd', 'λL/d', 'Ld/λ'], correctAnswer: 'λL/d' },
  { id: 'p113', chapter: M, question: 'Which of the following measurement is more precise:', options: ['3127 s', '312.7 s', '31.27 s', '3.127 s'], correctAnswer: '3.127 s' },
  { id: 'p114', chapter: OS, question: 'A system takes 88 seconds to complete 25 oscillations. Time period of the system is:', options: ['3.52 s', '35.2 s', '3.82 s', '0.032 s'], correctAnswer: '3.52 s' },
  { id: 'p115', chapter: CM, question: 'If r = 5 m and F = 4 N are along same direction, then torque is:', options: ['5 N-m', '20 N-m', '10 N-m', 'Zero'], correctAnswer: 'Zero' },
  { id: 'p116', chapter: VE, question: 'If a vector makes angle θ with the x-axis, its x-component is:', options: ['A Sinθ', 'A Tanθ', 'A Cosθ', 'A Secθ'], correctAnswer: 'A Cosθ' },
  { id: 'p117', chapter: MF, question: 'Which of the given variables is present in all three equations of motion:', options: ['Acceleration', 'Distance', 'Time', 'Torque'], correctAnswer: 'Acceleration' },
  { id: 'p118', chapter: MF, question: 'Motion along y-axis is:', options: ['One Dimensional', 'Two Dimensional', 'Three Dimensional', 'Angular'], correctAnswer: 'One Dimensional' },
  { id: 'p119', chapter: CM, question: 'One radian is equal to:', options: ['2π rev', 'π/4 rev', 'π/2 rev', '1/(2π) rev'], correctAnswer: '1/(2π) rev' },
  { id: 'p120', chapter: CM, question: 'S.I. unit of angular acceleration is:', options: ['rad/s²', 'rev/s²', 'degree/s²', 'm/s²'], correctAnswer: 'rad/s²' },
  { id: 'p121', chapter: WV, question: 'If 20 waves pass through a medium in 1 second with speed of 20 ms⁻¹, then wavelength is:', options: ['20 m', '200 m', '400 m', '1 m'], correctAnswer: '1 m' },
  { id: 'p122', chapter: HT, repeated: 2, question: 'The efficiency of a heat engine is 100% when temperature of sink is:', options: ['0°C', '0°F', '0 K', '273 K'], correctAnswer: '0 K' },
  { id: 'p123', chapter: HT, question: 'Area under p-V diagram of Carnot engine represents:', options: ['Heat Input', 'Heat Output', 'Efficiency', 'Work done'], correctAnswer: 'Work done' },
];
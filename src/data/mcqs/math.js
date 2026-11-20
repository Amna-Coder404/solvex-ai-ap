// Mathematics Inter Part 1 - Bahawalpur Board past papers (2017, 2019, 2023, 2024)
// 2017 paper mein answer key chhapi thi, wahi use ki hai. Baqi papers ke jawab maine khud hal kiye hain.
// "// check" wale jawab teacher ya key se zaroor mila lena.
// repeated: kitni baar past papers mein aaya (field na ho to 1).
const CN = 'Complex Numbers';
const SF = 'Sets, Functions and Groups';
const MD = 'Matrices and Determinants';
const QE = 'Quadratic Equations';
const PF = 'Partial Fractions';
const SS = 'Sequences and Series';
const PC = 'Permutation, Combination and Probability';
const BT = 'Mathematical Induction and Binomial Theorem';
const FT = 'Fundamentals of Trigonometry';
const TI = 'Trigonometric Identities';
const TF = 'Trigonometric Functions and Their Graphs';
const ST = 'Solution of Triangles';
const IT = 'Inverse Trigonometric Functions';

export default [
  // ---------- Paper: 2023 ----------
  { id: 'm1', chapter: MD, question: 'If A = [[-2, 1], [3, 5]], then A − A^t is:', options: ['[[0, 2], [-2, 0]]', '[[0, 4], [4, 10]]', '[[0, -2], [2, 0]]', '[[-2, 0], [0, 2]]'], correctAnswer: '[[0, -2], [2, 0]]' },
  { id: 'm2', chapter: SF, question: 'Venn diagrams are useful only in case of:', options: ['Concrete Sets', 'Abstract Sets', 'Subsets', 'Universal Sets'], correctAnswer: 'Concrete Sets' },
  { id: 'm3', chapter: CN, question: 'If Z = 2 − 3i, then |Z|² =', options: ['√5', '5', '√13', '13'], correctAnswer: '13' },
  { id: 'm4', chapter: MD, question: 'If A is a square matrix of order 3, then |KA| =', options: ['3|A|', '9|A|', 'K|A|', 'K³|A|'], correctAnswer: 'K³|A|' },
  { id: 'm5', chapter: QE, question: 'An equation in which two algebraic expressions are equal for particular values of the variable is called:', options: ['An Equation', 'Conditional Equation', 'Identity', 'Both A and B'], correctAnswer: 'Conditional Equation' },
  { id: 'm6', chapter: QE, question: 'If for the quadratic equation ax² + bx + c = 0, b² − 4ac = 0, then the roots of the equation will be:', options: ['Rational', 'Irrational', 'Equal', 'Unequal'], correctAnswer: 'Equal' },
  { id: 'm7', chapter: QE, question: 'The sum of the roots of the equation 5x² − x − 2 = 0 is:', options: ['-2/5', '2/5', '-1/5', '1/5'], correctAnswer: '1/5' },
  { id: 'm8', chapter: SS, question: 'If a_n = (−1)^n (2n − 3), then the 5th term of the sequence is:', options: ['-7', '7', '49', '-49'], correctAnswer: '-7' },
  { id: 'm9', chapter: PC, question: 'A coin is tossed four times, then the probability of getting no head is:', options: ['1/16', '1/8', '1/4', '1/2'], correctAnswer: '1/16' },
  { id: 'm10', chapter: PC, question: 'The number of 4 digit numbers that can be formed out of digits 1, 2, 3, 4, 5, 6 when no digit is repeated is:', options: ['15', '36', '360', '720'], correctAnswer: '360' },
  { id: 'm11', chapter: SS, question: 'H.M. between 1/a and 1/b is:', options: ['2ab/(a + b)', '(a + b)/(2ab)', '2/(a + b)', '(a + b)/2'], correctAnswer: '2/(a + b)' },
  { id: 'm12', chapter: BT, question: '1 + 3 + 5 + ... + (2n + 5) = (n + 3)² is true for:', options: ['n ≥ -1', 'n ≥ -2', 'n ≥ 1', 'n ≥ 2'], correctAnswer: 'n ≥ -2' }, // check
  { id: 'm13', chapter: TI, question: 'Cos(2x + 30°) · Cos(2x − 30°) =', options: ['-1/2 [Sin4x − Sin60°]', '-1/2 [Sin4x + Sin60°]', '1/2 [Cos4x + Cos60°]', '1/2 [Cos4x − Cos60°]'], correctAnswer: '1/2 [Cos4x + Cos60°]' },
  { id: 'm14', chapter: FT, question: 'Which of the following is a pair of coterminal angles?', options: ['30°, -330°', '50°, -330°', '30°, 760°', '60°, 1480°'], correctAnswer: '30°, -330°' },
  { id: 'm15', chapter: BT, question: 'The coefficients of the terms equidistant from the beginning and end of the expansion of (a + x)^n, n ∈ N are equal as:', options: ['C(n, r) = C(n, n − r)', 'C(n, r) = C(n, n + r)', 'C(n, r) = C(n, r + 1)', 'C(n, r) = C(n − 1, r − 1)'], correctAnswer: 'C(n, r) = C(n, n − r)' },
  { id: 'm16', chapter: TF, question: 'Range of y = 3Sin2x is:', options: ['[-1, 1]', '[-3, 3]', '[-5, 5]', '[-6, 6]'], correctAnswer: '[-3, 3]' },
  { id: 'm17', chapter: IT, question: 'Sin⁻¹(1/√2) =', options: ['0', 'π/6', 'π/4', 'π/3'], correctAnswer: 'π/4' },
  { id: 'm18', chapter: ST, question: 'abc/R =', options: ['4rs', '4Δ', '4/(Δr)', 'Δr/4'], correctAnswer: '4Δ' },
  { id: 'm19', chapter: ST, question: 'Area of triangle ABC is equal to:', options: ['1/2 bc Sinα', '1/2 ab Sinα', '1/2 bc Cosα', '1/2 ac Sinγ'], correctAnswer: '1/2 bc Sinα' },
  { id: 'm20', chapter: FT, question: 'Reference angle of Cosx = -1/2 is:', options: ['π/6', 'π/4', 'π/2', 'π/3'], correctAnswer: 'π/3' },

  // ---------- Paper: 2019 ----------
  { id: 'm21', chapter: FT, question: 'The reference angle for Tanθ = √3 is:', options: ['π/6', '-π/6', 'π/3', '-π/3'], correctAnswer: 'π/3' },
  { id: 'm22', chapter: IT, question: 'Sin(Tan⁻¹ 0°) =', options: ['-1', '1', '0', '∞'], correctAnswer: '0' },
  { id: 'm23', chapter: ST, question: 'Radius of the e-circle opposite to vertex A of triangle ABC is:', options: ['Δ/s', 'Δ/(s − a)', 'Δ/(s − b)', 'Δ/(s − c)'], correctAnswer: 'Δ/(s − a)' },
  { id: 'm24', chapter: FT, question: 'The angle above the horizontal line is called an angle of:', options: ['Depression', 'Elevation', 'Allied', 'Quadrantal'], correctAnswer: 'Elevation' },
  { id: 'm25', chapter: TF, question: 'Period of Cosecθ is:', options: ['π', '-π', '2π', '-2π'], correctAnswer: '2π' },
  { id: 'm26', chapter: TI, question: 'Cos(θ − 180°) =', options: ['Sinθ', '-Cosθ', 'Cosθ', '-Sinθ'], correctAnswer: '-Cosθ' },
  { id: 'm27', chapter: FT, question: '9π/5 radians in degree measure is:', options: ['321°', '322°', '323°', '324°'], correctAnswer: '324°' },
  { id: 'm28', chapter: BT, question: 'Total number of terms in the expansion of (x/2 − 2/x²)^16 are:', options: ['17', '16', '15', '14'], correctAnswer: '17' },
  { id: 'm29', chapter: BT, question: 'The statement 4^k > 3^k + 4 is true for:', options: ['K < 2', 'K ≤ 2', 'K ≠ 2', 'K ≥ 2'], correctAnswer: 'K ≥ 2' },
  { id: 'm30', chapter: PC, question: 'A die is thrown, what is the probability to get 3 dots?', options: ['1/3', '1/6', '2/3', '5/6'], correctAnswer: '1/6' },
  { id: 'm31', chapter: PC, question: '8!/7! =', options: ['7!', '7', '8', '8!'], correctAnswer: '8' },
  { id: 'm32', chapter: SS, question: 'If H is the H.M. between a and b, then H =', options: ['2ab/(a + b)', '(a + b)/(2ab)', '(a + b)/2', '±√(ab)'], correctAnswer: '2ab/(a + b)' },
  { id: 'm33', chapter: PF, question: 'In P(x)/Q(x), if degree of P(x) ≥ degree of Q(x), then the fraction is:', options: ['Proper', 'Improper', 'Irrational', 'Identity'], correctAnswer: 'Improper' },
  { id: 'm34', chapter: QE, question: 'When x³ − 2x² + 3x + 3 is divided by x − 3, the remainder is:', options: ['-21', '21', '-51', '51'], correctAnswer: '21' },
  { id: 'm35', chapter: QE, question: 'An equation which remains unchanged when x is replaced by 1/x is:', options: ['Exponential', 'Radical', 'Reducible', 'Reciprocal'], correctAnswer: 'Reciprocal' },
  { id: 'm36', chapter: MD, question: 'If order of X = 3 × 2 and that of A = 2 × 2, then order of XA =', options: ['3 × 2', '2 × 3', '2 × 2', '3 × 3'], correctAnswer: '3 × 2' },
  { id: 'm37', chapter: MD, question: 'The matrix [a b c d] is:', options: ['Square', 'Unit', 'Null', 'Row'], correctAnswer: 'Row' },
  { id: 'm38', chapter: SF, question: 'If A = {a, {a, b}}, then the number of elements in P(A) is:', options: ['2', '3', '4', '8'], correctAnswer: '4' },
  { id: 'm39', chapter: SF, question: 'The property used in (a + 1) + 3/4 = a + (1 + 3/4) is:', options: ['Closure', 'Associative', 'Commutative', 'Additive'], correctAnswer: 'Associative' },

  // ---------- Paper: 2017 (answer key chhapi thi) ----------
  { id: 'm40', chapter: SF, question: 'If A = { }, then P(A) is equal to:', options: ['{ }', '{0}', '{{ }}', '{0, 1}'], correctAnswer: '{{ }}' },
  { id: 'm41', chapter: MD, question: 'If the determinant |-1 3; x 1| = 0, then x =', options: ['3', '-3', '1/3', '-1/3'], correctAnswer: '-1/3' },
  { id: 'm42', chapter: MD, question: '(A⁻¹)^t is equal to:', options: ['A', 'A⁻¹ A^t', '-A^t', '(A^t)⁻¹'], correctAnswer: '(A^t)⁻¹' },
  { id: 'm43', chapter: CN, question: 'Complex cube roots of -1 are:', options: ['w, w²', '1, w, w²', '-1, -w, -w²', '-w, -w²'], correctAnswer: '-w, -w²' },
  { id: 'm44', chapter: QE, question: 'For the quadratic equation ax² + bx + c = 0, the product of roots is:', options: ['b/a', '-b/a', 'c/a', 'ac'], correctAnswer: 'c/a' },
  { id: 'm45', chapter: PF, question: 'The fraction (2x² + 5)/(x − 3) is:', options: ['Proper', 'Rational', 'Polynomial', 'Improper'], correctAnswer: 'Improper' },
  { id: 'm46', chapter: SS, question: 'Arithmetic mean between 3√5 and 5√5 is:', options: ['4√5', '5√5', '10', '2√5'], correctAnswer: '4√5' },
  { id: 'm47', chapter: PC, question: '(n − 1)(n − 2)(n − 3) ... (n − r + 1) =', options: ['(n − 1)!/(n − r)!', 'n!/(n − r)!', '(n − 1)!/(n − r + 2)!', '(n − 1)/(n − r + 1)!'], correctAnswer: '(n − 1)!/(n − r)!' },
  { id: 'm48', chapter: PC, question: '⁶P₄ is equal to:', options: ['160', '260', '360', '340'], correctAnswer: '360' },
  { id: 'm49', chapter: BT, question: 'Sum of binomial coefficients is:', options: ['n', '2^n', '2n', 'n²'], correctAnswer: '2^n' },
  { id: 'm50', chapter: BT, question: 'In the expansion (a + b)^7, the 2nd term is:', options: ['a^7', '7a^6 b', '7ab', '0'], correctAnswer: '7a^6 b' },
  { id: 'm51', chapter: FT, question: 'One radian is equal to:', options: ['57.296°', '57°', '56°', '0.175°'], correctAnswer: '57.296°' }, // check (paper mein 56.296 likha nazar aaya, key A hai)
  { id: 'm52', chapter: TI, question: 'Sin(θ + 270°) =', options: ['Cotθ', 'Tanθ', 'Sinθ', '-Cosθ'], correctAnswer: '-Cosθ' },
  { id: 'm53', chapter: TF, question: 'Period of Sin(x/3) is:', options: ['π', '3π', '2π/3', '6π'], correctAnswer: '6π' },
  { id: 'm54', chapter: ST, question: 'If γ = 90°, then with usual notation:', options: ['c² = a² + b²', 'b² = a² + c²', 'a² = b² + c²', 'a² − b² = c²'], correctAnswer: 'c² = a² + b²' },
  { id: 'm55', chapter: ST, question: 'R is equal to:', options: ['Δ/(abc)', 'abc/Δ', 'b/(2 Sinβ)', 'Δ/s'], correctAnswer: 'b/(2 Sinβ)' }, // check (option D saaf nahi tha)
  { id: 'm56', chapter: FT, question: 'If Cosx = -√3/2, then the reference angle of Cosx is:', options: ['π/6', '-π/6', 'π/3', '5π/6'], correctAnswer: 'π/6' }, // check (sawal ka text dhundla tha)

  // ---------- Paper: 2024 ----------
  { id: 'm57', chapter: CN, question: 'Modulus of 5 − 3i is:', options: ['√4', '√16', '√25', '√34'], correctAnswer: '√34' },
  { id: 'm58', chapter: SF, question: 'If p is a logical statement, then p ∧ ~p is always:', options: ['Absurdity', 'Contingency', 'Tautology', 'Conditional'], correctAnswer: 'Absurdity' },
  { id: 'm59', chapter: SF, question: 'If A ⊆ B, then n(A − B) =', options: ['0', 'n(A)', 'n(B)', 'n(A) − n(B)'], correctAnswer: '0' }, // check (sawal ka text poora saaf nahi tha)
  { id: 'm60', chapter: SF, question: 'The property ∀ a ∈ R, a = a is called:', options: ['Symmetric', 'Transitive', 'Reflexive', 'Commutative'], correctAnswer: 'Reflexive' },
  { id: 'm61', chapter: SF, question: 'The set containing elements of A or B is denoted by:', options: ['A ∩ B', 'A ⊆ B', 'A ∪ B', 'B ⊆ A'], correctAnswer: 'A ∪ B' },
  { id: 'm62', chapter: QE, question: 'Roots of the equation x² − 5x + 6 = 0 are:', options: ['2, -3', '-2, -3', '2, 3', '-2, 3'], correctAnswer: '2, 3' },
  { id: 'm63', chapter: MD, question: 'If A = [[1, 1], [1, x]] and |A| = 4, then x =', options: ['2', '3', '4', '5'], correctAnswer: '5' },
  { id: 'm64', chapter: MD, question: 'A matrix of order m × 1 is called:', options: ['Row Matrix', 'Column Matrix', 'Diagonal Matrix', 'Null Matrix'], correctAnswer: 'Column Matrix' },
  { id: 'm65', chapter: QE, question: 'Degree of a constant polynomial is:', options: ['n', '2', '1', '0'], correctAnswer: '0' },
  { id: 'm66', chapter: SS, question: 'Σ K (K = 1 to n) =', options: ['n²(n + 1)²/4', 'n(n + 1)/2', 'n(n + 1)(n + 2)/6', 'n(n − 1)/2'], correctAnswer: 'n(n + 1)/2' },
  { id: 'm67', chapter: SS, question: 'The arithmetic mean between √2 and 3√2 is:', options: ['2√2', '3√2', '4√2', '√2'], correctAnswer: '2√2' },
  { id: 'm68', chapter: PF, question: 'x/(2x + 3) is:', options: ['Proper Fraction', 'Improper Fraction', 'Identity Fraction', 'Mixed Fraction'], correctAnswer: 'Improper Fraction' },
  { id: 'm69', chapter: PC, question: 'Probability of an impossible event is:', options: ['1', '0.5', '0.25', '0'], correctAnswer: '0' },
  { id: 'm70', chapter: TI, question: 'Tan(α − 90°) =', options: ['Cot α', '-Cot α', 'Tan α', '-Tan α'], correctAnswer: '-Cot α' },
  { id: 'm71', chapter: TF, question: 'Solution of Cotθ = 1/√3 in quadrant III is:', options: ['5π/3', '7π/6', '4π/3', '7π/3'], correctAnswer: '4π/3' },
  { id: 'm72', chapter: BT, question: 'Number of terms in the expansion of (a + x)^(2n+1) are:', options: ['2n + 2', '2n + 1', '2n', 'n + 1'], correctAnswer: '2n + 2' },
  { id: 'm73', chapter: TF, question: 'Period of Cot 3x is:', options: ['π', '2π/3', 'π/2', 'π/3'], correctAnswer: 'π/3' },
  { id: 'm74', chapter: TF, question: 'If Sinx = √3/2 and x ∈ [0, 2π], then x is:', options: ['5π/3, 4π/3', 'π/4, 3π/4', 'π/3, 2π/3', 'π/6, 5π/6'], correctAnswer: 'π/3, 2π/3' },
  { id: 'm75', chapter: IT, question: 'The value of Sin⁻¹(Cos π/6) is equal to:', options: ['π/2', '3π/2', 'π/6', 'π/3'], correctAnswer: 'π/3' },
  { id: 'm76', chapter: ST, question: 'Sec(α/2) =', options: ['√(s(s − a)/(bc))', '√(bc/(s(s − a)))', 's/Δ', 'Δ/(s − b)'], correctAnswer: '√(bc/(s(s − a)))' },
];
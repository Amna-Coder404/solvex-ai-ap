// Computer Science & Entrepreneurship Inter Part 1 (New Punjab Book 2025 - PECTAA)
// Tamam 9 Chapters ke Exercise Multiple Choice Questions (MCQs) aur unki Answer Key.

const U1 = 'Introduction to Software Development';
const U2 = 'Python Programming';
const U3 = 'Algorithms and Problem Solving';
const U4 = 'Computational Structures';
const U5 = 'Data Analytics';
const U6 = 'Emerging Technologies';
const U7 = 'Legal and Ethical Aspects of Computing System';
const U8 = 'Online Research and Digital Literacy';
const U9 = 'Entrepreneurship in Digital Age';

export default [
  // ---------- Unit 1: Introduction to Software Development (Page 18) ----------
  {
    id: 'cs1',
    chapter: U1,
    question: 'Primary purpose of the Software Development Life Cycle (SDLC) is to:',
    options: [
      'design websites',
      'deliver high-quality software within time and cost estimates',
      'manage database systems',
      'create hardware components',
    ],
    correctAnswer: 'deliver high-quality software within time and cost estimates',
  },
  {
    id: 'cs2',
    chapter: U1,
    question: 'A type of requirement specifying system performance:',
    options: [
      'Functional Requirements',
      'Non-Functional Requirements',
      'Technical Requirements',
      'Operational Requirements',
    ],
    correctAnswer: 'Non-Functional Requirements',
  },
  {
    id: 'cs3',
    chapter: U1,
    question: 'Role of a framework in the context of SDLC is to:',
    options: [
      'write code from scratch',
      'provide a structured foundation with predefined components and architectures',
      'manage hardware',
      'perform manual testing',
    ],
    correctAnswer: 'provide a structured foundation with predefined components and architectures',
  },
  {
    id: 'cs4',
    chapter: U1,
    question: 'Software development model involving short cycles or sprints:',
    options: [
      'Waterfall Model',
      'Agile Methodology',
      'Lean Software Development',
      'Scrum',
    ],
    correctAnswer: 'Agile Methodology',
  },
  {
    id: 'cs5',
    chapter: U1,
    question: 'Crucial aspect of comprehensive project planning:',
    options: [
      'Understanding the project scope and tasks',
      "Deciding the project's colour scheme",
      'Hiring a large development team',
      'Ignoring potential risks',
    ],
    correctAnswer: 'Understanding the project scope and tasks',
  },
  {
    id: 'cs6',
    chapter: U1,
    question: 'Factor that does not influence cost estimation of a software project:',
    options: [
      'Scope of the project',
      'Technology stack',
      'Number of meetings held',
      'Operational costs',
    ],
    correctAnswer: 'Number of meetings held',
  },
  {
    id: 'cs7',
    chapter: U1,
    question: 'The purpose of Use Case Diagrams is to:',
    options: [
      "document the system's architecture",
      "identify and document the system's functional requirements",
      'illustrate the database schema',
      "define the system's user interface design",
    ],
    correctAnswer: "identify and document the system's functional requirements",
  },

  // ---------- Unit 2: Python Programming (Page 39) ----------
  {
    id: 'cs8',
    chapter: U2,
    question: 'An action needed during Python installation to run from the command line easily:',
    options: [
      'Uncheck "Add Python to PATH"',
      'Choose a different IDE',
      'Check "Add Python to PATH"',
      'Install only the IDE',
    ],
    correctAnswer: 'Check "Add Python to PATH"',
  },
  {
    id: 'cs9',
    chapter: U2,
    question: 'A valid variable name in Python is:',
    options: ['variable1', '1variable', 'variable-name', 'variable name'],
    correctAnswer: 'variable1',
  },
  {
    id: 'cs10',
    chapter: U2,
    question: 'Output of the following piece of code is:\nage = 25\nprint("Age:", age)',
    options: ['Age: 25', '25', 'Age', 'age'],
    correctAnswer: 'Age: 25',
  },
  {
    id: 'cs11',
    chapter: U2,
    question: 'The operator used for exponentiation in Python is:',
    options: ['*', '**', '//', '^'],
    correctAnswer: '**',
  },
  {
    id: 'cs12',
    chapter: U2,
    question: 'A loop used to iterate over a collection such as lists is:',
    options: ['while', 'for', 'do-while', 'repeat'],
    correctAnswer: 'for',
  },
  {
    id: 'cs13',
    chapter: U2,
    question: 'A range() function used to generate a sequence of numbers:',
    options: [
      'Generates a list of numbers',
      'Creates a sequence of numbers',
      'Calculates the sum of numbers',
      'Prints a range of numbers',
    ],
    correctAnswer: 'Creates a sequence of numbers',
  },
  {
    id: 'cs14',
    chapter: U2,
    question: 'A keyword used to define a function in Python:',
    options: ['define', 'function', 'def', 'func'],
    correctAnswer: 'def',
  },
  {
    id: 'cs15',
    chapter: U2,
    question: 'The Output of the following code is:\ntemperature, humidity, wind_speed = 25, 60, 15\nprint("Hot and humid" if temperature > 30 and humidity > 50 else "Warm and breezy" if temperature == 25 and wind_speed > 10 else "Cool and dry" if temperature < 20 and humidity < 30 else "Moderate")',
    options: ['Hot and humid', 'Warm and breezy', 'Cool and dry', 'Moderate'],
    correctAnswer: 'Warm and breezy', // Note: Book mein options short likhay thay (Hot, Warm, Cool, Nothing)
  },
  {
    id: 'cs16',
    chapter: U2,
    question: 'The operation used to combine two lists in Python:',
    options: ['combine()', 'concat()', '+', 'merge()'],
    correctAnswer: '+',
  },

  // ---------- Unit 3: Algorithms and Problem Solving (Pages 54-55) ----------
  {
    id: 'cs17',
    chapter: U3,
    question: 'The characteristic of a well-defined problem is:',
    options: [
      'Ambiguous goals and unclear requirements',
      'Vague processes and inputs',
      'Clear goals, inputs, processes, and outputs',
      'Undefined solutions',
    ],
    correctAnswer: 'Clear goals, inputs, processes, and outputs',
  },
  {
    id: 'cs18',
    chapter: U3,
    question: 'Complexity class representing problems solvable efficiently by a deterministic algorithm:',
    options: ['NP', 'NP-hard', 'NP-complete', 'P'],
    correctAnswer: 'P',
  },
  {
    id: 'cs19',
    chapter: U3,
    question: 'The statement that applies to unsolvable problems:',
    options: [
      'They can be solved in polynomial time',
      'They cannot be solved by any algorithm',
      'They are always in NP class',
      'They require exponential time to solve',
    ],
    correctAnswer: 'They cannot be solved by any algorithm',
  },
  {
    id: 'cs20',
    chapter: U3,
    question: 'The meaning of NP in computational complexity is:',
    options: [
      'Non-deterministic Polynomial time',
      'Negative Polynomial time',
      'Non-trivial Polynomial time',
      'Numerical Polynomial time',
    ],
    correctAnswer: 'Non-deterministic Polynomial time',
  },
  {
    id: 'cs21',
    chapter: U3,
    question: 'Sorting algorithm more efficient for large datasets:', // Note: Book mein typo hai ("Search algorithm" likha hai jabke options sorting ke hain)
    options: ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 'Merge Sort',
  },
  {
    id: 'cs22',
    chapter: U3,
    question: 'A scenario where Dynamic Programming proves most useful:',
    options: [
      'Problems without overlapping subproblems',
      'Problems solved by making local choices',
      'Problems with overlapping subproblems and optimal substructure',
      'Problems divided into independent subproblems',
    ],
    correctAnswer: 'Problems with overlapping subproblems and optimal substructure',
  },
  {
    id: 'cs23',
    chapter: U3,
    question: 'An algorithm that sorts data by stepping through the list and swapping adjacent elements if needed is:',
    options: ['Selection Sort', 'Quick Sort', 'Bubble Sort', 'Merge Sort'],
    correctAnswer: 'Bubble Sort',
  },
  {
    id: 'cs24',
    chapter: U3,
    question: 'Time complexity of Depth-First Search (DFS) in a graph is:',
    options: ['O(n log n)', 'O(V)', 'O(V + E)', 'O(n)'],
    correctAnswer: 'O(V + E)',
  },
  {
    id: 'cs25',
    chapter: U3,
    question: 'Best description of time complexity:',
    options: [
      'Amount of memory an algorithm needs',
      'Time taken as a function of input size',
      'Efficiency as input size grows',
      'Upper bound of space requirements',
    ],
    correctAnswer: 'Time taken as a function of input size',
  },
  {
    id: 'cs26',
    chapter: U3,
    question: 'An algorithm with a time complexity of O(n log n):',
    options: ['Bubble Sort', 'Binary Search', 'Merge Sort', 'Insertion Sort'],
    correctAnswer: 'Merge Sort',
  },

  // ---------- Unit 4: Computational Structures (Page 65) ----------
  {
    id: 'cs27',
    chapter: U4,
    question: 'The function used to add an item at the end of a list in Python:',
    options: ['insert()', 'append()', 'remove()', 'pop()'],
    correctAnswer: 'append()',
  },
  {
    id: 'cs28',
    chapter: U4,
    question: 'The purpose of the in keyword used with a Python list:',
    options: [
      'Adds an item to the list',
      'Removes an item from the list',
      'Checks if an item exists in the list',
      'Returns the length of the list',
    ],
    correctAnswer: 'Checks if an item exists in the list',
  },
  {
    id: 'cs29',
    chapter: U4,
    question: 'An operation that removes an item from the top of the stack:',
    options: ['Push', 'Pop', 'Peek', 'Add'],
    correctAnswer: 'Pop',
  },
  {
    id: 'cs30',
    chapter: U4,
    question: 'The operation used to add an item to a queue:',
    options: ['Dequeue', 'Peek', 'Enqueue', 'Remove'],
    correctAnswer: 'Enqueue',
  },
  {
    id: 'cs31',
    chapter: U4,
    question: 'True statement about the height of a tree:',
    options: [
      'Number of edges from the root to the deepest node',
      'Number of nodes from the root to the deepest node',
      'Number of children of the root node',
      'Always equal to the number of nodes in the tree',
    ],
    correctAnswer: 'Number of edges from the root to the deepest node',
  },
  {
    id: 'cs32',
    chapter: U4,
    question: 'A scenario where a graph data structure is most suitable:',
    options: [
      'Managing a to-do list',
      'Modeling a line of customers in a store',
      'Representing connections in a social network',
      'All of the above',
    ],
    correctAnswer: 'Representing connections in a social network',
  },

  // ---------- Unit 5: Data Analytics (Pages 84-85) ----------
  {
    id: 'cs33',
    chapter: U5,
    question: 'An example of a basic statistical model:',
    options: [
      'Linear Regression',
      'Neural Networks',
      'Decision Trees',
      'Support Vector Machines',
    ],
    correctAnswer: 'Linear Regression',
  },
  {
    id: 'cs34',
    chapter: U5,
    question: 'The activity involved in experimental design in data science:',
    options: [
      'Creating visualizations',
      'Collecting and analyzing data systematically',
      'Writing code for machine learning',
      'Building databases',
    ],
    correctAnswer: 'Collecting and analyzing data systematically',
  },
  {
    id: 'cs35',
    chapter: U5,
    question: 'A commonly used tool for creating data visualizations:',
    options: ['MS Excel', 'Python', 'Tableau', 'All of these'], // Note: Book mein option (b) aur (d) scan mein cut gayi theen, lekin MS Excel / Tableau teeno book mein list hain
    correctAnswer: 'MS Excel',
  },
  {
    id: 'cs36',
    chapter: U5,
    question: 'The meaning of the slope in a linear regression model:',
    options: [
      'The intercept of the model',
      'The change in the dependent variable for a unit change in the independent variable',
      'The error term',
      'The mean of the data',
    ],
    correctAnswer: 'The change in the dependent variable for a unit change in the independent variable',
  },
  {
    id: 'cs37',
    chapter: U5,
    question: 'An example of a real-world application of statistical models:',
    options: [
      'Predicting house prices',
      'Creating social media posts',
      'Designing websites',
      'Writing essays',
    ],
    correctAnswer: 'Predicting house prices',
  },
  {
    id: 'cs38',
    chapter: U5,
    question: 'Option not considered a benefit of data visualization:',
    options: [
      'Identifying trends and patterns',
      'Communicating insights effectively',
      'Making data more complex',
      'Summarizing large datasets',
    ],
    correctAnswer: 'Making data more complex',
  },
  {
    id: 'cs39',
    chapter: U5,
    question: 'A primary goal of K-Means Clustering:',
    options: [
      'To classify data into predefined categories',
      'To group data into clusters based on similarity',
      'To predict continuous outcomes',
      'To reduce the dimensionality of data',
    ],
    correctAnswer: 'To group data into clusters based on similarity',
  },
  {
    id: 'cs40',
    chapter: U5,
    question: 'The meaning of "K" in K-Means Clustering:',
    options: [
      'Number of features in the dataset',
      'Number of clusters to be formed',
      'Number of iterations required for convergence',
      'Number of data points in the dataset',
    ],
    correctAnswer: 'Number of clusters to be formed',
  },

  // ---------- Unit 6: Emerging Technologies (Pages 99-100) ----------
  {
    id: 'cs41',
    chapter: U6,
    question: 'The main benefit of edge computing:',
    options: [
      'Lower cost',
      'Reduced latency',
      'Increased complexity',
      'Enhanced security',
    ],
    correctAnswer: 'Reduced latency',
  },
  {
    id: 'cs42',
    chapter: U6,
    question: 'A cloud deployment model with resources shared among multiple organizations with common concerns:',
    options: [
      'Public Cloud',
      'Private Cloud',
      'Community Cloud',
      'Hybrid Cloud',
    ],
    correctAnswer: 'Community Cloud',
  },
  {
    id: 'cs43',
    chapter: U6,
    question: 'The advantage of using a distributed ledger in blockchain technology:',
    options: [
      'Centralized control for quick decision-making',
      'Easy alteration of transaction histories',
      'Enhanced transparency and security through decentralized verification',
      'Lower computational requirements',
    ],
    correctAnswer: 'Enhanced transparency and security through decentralized verification',
  },
  {
    id: 'cs44',
    chapter: U6,
    question: 'A cloud deployment model combining public and private cloud features:',
    options: [
      'Public Cloud',
      'Hybrid Cloud',
      'Community Cloud',
      'Multi-Cloud',
    ],
    correctAnswer: 'Hybrid Cloud',
  },
  {
    id: 'cs45',
    chapter: U6,
    question: 'The purpose of a distributed ledger in blockchain:',
    options: [
      'Central authority management',
      'Secure and transparent data sharing among multiple participants',
      'Fewer participants required',
      'Data visibility only to central authority',
    ],
    correctAnswer: 'Secure and transparent data sharing among multiple participants',
  },
  {
    id: 'cs46',
    chapter: U6,
    question: 'A cloud service offering a platform for developing, running, and managing applications without managing infrastructure:',
    options: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Data as a Service (DaaS)',
    ],
    correctAnswer: 'Platform as a Service (PaaS)',
  },
  {
    id: 'cs47',
    chapter: U6,
    question: 'The service model enabling application deployment without server management:',
    options: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Serverless Architecture',
    ],
    correctAnswer: 'Serverless Architecture',
  },
  {
    id: 'cs48',
    chapter: U6,
    question: 'The feature introduced in Blockchain 2.0 beyond cryptocurrency:',
    options: [
      'Enhanced mining techniques',
      'Decentralized applications and smart contracts',
      'Better graphics',
      'Faster internet speeds',
    ],
    correctAnswer: 'Decentralized applications and smart contracts',
  },
  {
    id: 'cs49',
    chapter: U6,
    question: 'The primary advantage of serverless architectures:',
    options: [
      'Cost savings',
      'Constant server management',
      'Increased hardware needs',
      'Manual scaling',
    ],
    correctAnswer: 'Cost savings',
  },

  // ---------- Unit 7: Legal and Ethical Aspects of Computing System (Pages 113-114) ----------
  {
    id: 'cs50',
    chapter: U7,
    question: 'Option typically included in common Terms of Use clauses:',
    options: [
      'User obligations',
      'Privacy and data use',
      'Product advertising',
      'Termination of service',
    ],
    correctAnswer: 'User obligations', // Note: a, b, d teeno clauses hain, book mein 'a' pehla standard option hai
  },
  {
    id: 'cs51',
    chapter: U7,
    question: 'The purpose of the “Limitations of Liability” clause in Terms of Use:',
    options: [
      'Ensures full company responsibility',
      "Limits company's liability",
      'Provides user rights for damages',
      'Guarantees constant service availability',
    ],
    correctAnswer: "Limits company's liability",
  },
  {
    id: 'cs52',
    chapter: U7,
    question: 'The type of harmful software that secretly monitors user activity:',
    options: ['Spam', 'Cookies', 'Spyware', 'Pharming'],
    correctAnswer: 'Spyware',
  },
  {
    id: 'cs53',
    chapter: U7,
    question: 'The threat involving user redirection to fake websites:',
    options: ['Phishing', 'Spam', 'Spyware', 'Pharming'],
    correctAnswer: 'Pharming',
  },
  {
    id: 'cs54',
    chapter: U7,
    question: 'The impact of the digital divide on education:',
    options: [
      'Improves learning for all',
      'No educational impact',
      'Creates inequality in digital resource access',
      'Replaces traditional teaching methods',
    ],
    correctAnswer: 'Creates inequality in digital resource access',
  },
  {
    id: 'cs55',
    chapter: U7,
    question: 'The reason for understanding bias during information evaluation:',
    options: [
      'Ignoring other viewpoints',
      "Recognizing the source's agenda",
      'Validating all sources equally',
      'Avoiding evaluation altogether',
    ],
    correctAnswer: "Recognizing the source's agenda",
  },
  {
    id: 'cs56',
    chapter: U7,
    question: 'The positive societal impact of computing systems:',
    options: [
      'Spread of misinformation',
      'Improved information accessibility',
      'Heightened privacy concerns',
      'Widened technology gap',
    ],
    correctAnswer: 'Improved information accessibility',
  },
  {
    id: 'cs57',
    chapter: U7,
    question: 'The practice considered ethical when using information:',
    options: [
      'Copying content without permission',
      'Respecting copyright and avoiding plagiarism',
      'Ignoring source attribution',
      'Using unverified information',
    ],
    correctAnswer: 'Respecting copyright and avoiding plagiarism',
  },
  {
    id: 'cs58',
    chapter: U7,
    question: 'The behavior considered responsible digital conduct:',
    options: [
      'Using secure websites',
      'Spreading false info online',
      'Respecting online privacy',
      'Reporting suspicious activity',
    ],
    correctAnswer: 'Using secure websites',
  },

  // ---------- Unit 8: Online Research and Digital Literacy (Pages 122-123) ----------
  {
    id: 'cs59',
    chapter: U8,
    question: 'The key component of digital literacy:',
    options: [
      'Writing poetry',
      'Understanding agricultural methods',
      'Using digital tools effectively',
      'Practicing public speaking',
    ],
    correctAnswer: 'Using digital tools effectively',
  },
  {
    id: 'cs60',
    chapter: U8,
    question: 'Boolean operator used to exclude a term from search results:',
    options: ['OR', 'AND', 'NOT', 'NEITHER'],
    correctAnswer: 'NOT',
  },
  {
    id: 'cs61',
    chapter: U8,
    question: 'The essential skill for evaluating online sources:',
    options: [
      "Guessing the source's credibility",
      "Knowing the content creator's name",
      'Checking if content is from a trusted entity',
      'Reading the content multiple times',
    ],
    correctAnswer: 'Checking if content is from a trusted entity',
  },
  {
    id: 'cs62',
    chapter: U8,
    question: 'Importance of being specific when formulating a research question:',
    options: [
      'To ensure it covers a wide range of topics',
      'To clearly define what you want to find and avoid vagueness',
      'To include as much information as possible',
      'To make the research more generalizable',
    ],
    correctAnswer: 'To clearly define what you want to find and avoid vagueness',
  },
  {
    id: 'cs63',
    chapter: U8,
    question: 'The meaning of “peer-reviewed” article:',
    options: [
      'Edited by a single expert',
      'Published in a magazine',
      'Reviewed by other experts in the field',
      'Freely available online',
    ],
    correctAnswer: 'Reviewed by other experts in the field',
  },
  {
    id: 'cs64',
    chapter: U8,
    question: 'The key purpose of online libraries:',
    options: [
      'Providing access to entertainment',
      'Offering a variety of academic resources',
      'Promoting social media interaction',
      'Selling digital books and materials',
    ],
    correctAnswer: 'Offering a variety of academic resources',
  },
  {
    id: 'cs65',
    chapter: U8,
    question: 'An essential component of ethical research:',
    options: [
      'Collecting data regardless of participant privacy',
      'Avoiding plagiarism and giving proper credit',
      'Publishing only positive results',
      'Ignoring consent if research is important',
    ],
    correctAnswer: 'Avoiding plagiarism and giving proper credit',
  },
  {
    id: 'cs66',
    chapter: U8,
    question: 'The research ethics principle focused on honesty in reporting findings:',
    options: [
      'Confidentiality',
      'Integrity',
      'Informed Consent',
      'Avoiding Bias',
    ],
    correctAnswer: 'Integrity',
  },
  {
    id: 'cs67',
    chapter: U8,
    question: 'The option falls outside the category of intellectual property is:',
    options: ['Patents', 'Trademarks', 'Copyrights', 'Physical Properties'],
    correctAnswer: 'Physical Properties',
  },
  {
    id: 'cs68',
    chapter: U8,
    question: 'Way for a company to protect a trade secret:',
    options: [
      'Register it with the IPO',
      'Apply for a trademark',
      'Keep it confidential and use legal agreements',
      'Publish it in a journal',
    ],
    correctAnswer: 'Keep it confidential and use legal agreements',
  },
];
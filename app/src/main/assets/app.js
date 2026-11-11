const catalog = [
  {
    year: 1,
    semesters: [
      {
        name: 'Semester I',
        courses: [
          { code: 'Math 1101', title: 'Applied Mathematics I', credits: 4, ects: 7, prerequisite: 'None' },
          { code: 'Phys 1101', title: 'General Physics', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'Chem 1101', title: 'General Chemistry', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'CSEg 1101', title: 'Introduction to Computing', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'EnLa 1001', title: 'Communicative English Skill', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'LART 1001', title: 'Introduction to Civics & Citizenship Studies', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'HPEd 1011', title: 'Physical Fitness and Conditioning I', credits: 'P/F', ects: null, prerequisite: 'None' }
        ]
      },
      {
        name: 'Semester II',
        courses: [
          { code: 'Math 1102', title: 'Applied Mathematics II', credits: 4, ects: 7, prerequisite: 'Math 1101' },
          { code: 'CSEg 1102', title: 'Introduction to Emerging Technologies', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'CSEg 1104', title: 'Fundamentals of Programming', credits: 3, ects: 5, prerequisite: 'CSEg 1101' },
          { code: 'LART 1002', title: 'Logic and Critical Thinking', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'Meng 1032', title: 'Engineering Drawing', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'EnLa 1002', title: 'Basic Writing Skill', credits: 3, ects: 5, prerequisite: 'ENG 1011' },
          { code: 'HPEd 1022', title: 'Physical Fitness and Conditioning II', credits: 'P/F', ects: null, prerequisite: 'HPEd 1011' }
        ]
      }
    ]
  },
  {
    year: 2,
    semesters: [
      {
        name: 'Semester I',
        courses: [
          { code: 'Math 2101', title: 'Applied Mathematics III', credits: 4, ects: 7, prerequisite: 'Math 1102' },
          { code: 'ECEg 2201', title: 'Electronics Circuit I', credits: 4, ects: 7, prerequisite: 'Math 1101, Phys 1101; co-requisite EPCE 2101' },
          { code: 'EPCE 2101', title: 'Fundamentals of Electrical Engineering', credits: 4, ects: 7, prerequisite: 'Math 1101, Phys 1101' },
          { code: 'CSEg 2101', title: 'Data Structures & Algorithms', credits: 3, ects: 5, prerequisite: 'CSEg 1104' },
          { code: 'LART 1004', title: 'Geography of Ethiopia and the Horn', credits: 3, ects: 5, prerequisite: 'None' }
        ]
      },
      {
        name: 'Semester II',
        courses: [
          { code: 'ECEg 2202', title: 'Electronic Circuit II', credits: 4, ects: 7, prerequisite: 'ECEg 2101' },
          { code: 'ECEg 2204', title: 'Signals and System Analysis', credits: 3, ects: 5, prerequisite: 'Math 2101' },
          { code: 'EPCE 2202', title: 'Electromagnetic Field', credits: 3, ects: 5, prerequisite: 'Math 2101' },
          { code: 'ECEg 2208', title: 'Engineering Application Software', credits: 1, ects: 2, prerequisite: 'None' },
          { code: 'Math-2103', title: 'Computational Methods', credits: 3, ects: 5, prerequisite: 'Math 2101' },
          { code: 'Math 2201', title: 'Linear Algebra', credits: 3, ects: 5, prerequisite: 'None' }
        ]
      }
    ]
  },
  {
    year: 3,
    semesters: [
      {
        name: 'Semester I',
        courses: [
          { code: 'ECEg 3201', title: 'Digital Logic Design', credits: 4, ects: 7, prerequisite: 'ECEg 2201' },
          { code: 'EPCE 3201', title: 'Network Analysis & Synthesis', credits: 3, ects: 5, prerequisite: 'ECEg 2204' },
          { code: 'ECEg 3103', title: 'Probability and Random Processes', credits: 3, ects: 5, prerequisite: 'Math 1102' },
          { code: 'ECEg 3205', title: 'Digital Signal Processing', credits: 3, ects: 5, prerequisite: 'ECEg 2204' },
          { code: 'LART 2002', title: 'General Psychology and Life Skills', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'Phys 2208', title: 'Applied Modern Physics', credits: 3, ects: 5, prerequisite: 'Phys 1101' }
        ]
      },
      {
        name: 'Semester II',
        courses: [
          { code: 'ECEg 3202', title: 'Introduction to Communication Systems', credits: 4, ects: 7, prerequisite: 'ECEg 2202' },
          { code: 'Phys 3202', title: 'Solid State Physics', credits: 3, ects: 5, prerequisite: 'Phys 2208' },
          { code: 'LART 1003', title: 'History of Ethiopia and the Horn', credits: 3, ects: 5, prerequisite: 'None' },
          {
            code: 'Major Elective I',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 3306', title: 'Microelectronic Devices & Circuits', prerequisite: 'ECEg 2202' },
              { code: 'ECEg 3318', title: 'Optoelectronics', prerequisite: 'ECEg 2202' }
            ]
          },
          {
            code: 'Major Elective II',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'CSEg 2202', title: 'Object Oriented Programming', prerequisite: 'CSEg 1104' },
              { code: 'SEng 4208', title: 'Introduction to Artificial Intelligence', prerequisite: 'None' }
            ]
          },
          {
            code: 'Major Elective III',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'EPCE 3304', title: 'Introduction to Control Systems', prerequisite: 'EPCE 3201' },
              { code: 'EPCE 3302', title: 'Introduction to Electrical Machines', prerequisite: 'EPCE 2202' }
            ]
          }
        ]
      }
    ],
    summer: [
      { code: 'ECEg 3200', title: 'Industry Internship I', credits: 3, ects: 5, duration: 'Two months', prerequisite: 'None' }
    ]
  },
  {
    year: 4,
    semesters: [
      {
        name: 'Semester I',
        courses: [
          { code: 'ECEg 4201', title: 'Computer Architecture and Organization', credits: 3, ects: 5, prerequisite: 'ECEg 3201' },
          { code: 'ECEg 4203', title: 'Digital Communication', credits: 3, ects: 5, prerequisite: 'ECEg 3202' },
          { code: 'ECEg 4205', title: 'EM Waves and Guide Structure', credits: 3, ects: 5, prerequisite: 'EPCE 2202' },
          { code: 'SOSC 5003', title: 'Entrepreneurship and Business Development', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'ECEg 4206', title: 'Engineering Research and Development Methodology', credits: 2, ects: 3, prerequisite: 'ECEg 3200' },
          {
            code: 'Major Elective IV',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'EPCE 3206', title: 'Introduction to Power Systems', prerequisite: 'EPCE 3205' },
              { code: 'EPCE 3207', title: 'Electrical Measurement and Instrumentation', prerequisite: 'ECEg 2202' }
            ]
          }
        ]
      },
      {
        name: 'Semester II',
        courses: [
          { code: 'ECEg 4202', title: 'Microprocessor & Interfacing', credits: 4, ects: 7, prerequisite: 'ECEg 4201' },
          { code: 'ECEg 4204', title: 'Antenna and Radio Wave Propagation', credits: 3, ects: 5, prerequisite: 'ECEg 4205' },
          { code: 'ECEg 4208', title: 'Data Communication and Computer Networks', credits: 3, ects: 5, prerequisite: 'ECEg 4203' },
          { code: 'SOSC 2002', title: 'Introduction to Economics', credits: 3, ects: 5, prerequisite: 'None' },
          { code: 'IETP 4203', title: 'Integrated Engineering Project', credits: 3, prerequisite: 'Senior standing' },
          {
            code: 'Major Elective V',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 4310', title: 'Microwave Devices and Systems', prerequisite: 'ECEg 4205' },
              { code: 'ECEg 4312', title: 'Integrated Circuit Technology', prerequisite: 'ECEg 3306' }
            ]
          }
        ]
      }
    ],
    summer: [
      { code: 'ECEg 4200', title: 'Industry Internship II', credits: 3, ects: 5, duration: 'Two months', prerequisite: 'ECEg 3200' }
    ]
  },
  {
    year: 5,
    semesters: [
      {
        name: 'Semester I',
        courses: [
          { code: 'ECEg 5201', title: 'Wireless and Mobile Communication', credits: 3, ects: 5, prerequisite: 'ECEg 4203' },
          {
            code: 'Major Elective VI',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 5307', title: 'VLSI Design', prerequisite: 'ECEg 3201' },
              { code: 'CSEg 5307', title: 'Advanced Network', prerequisite: 'ECEg 4208' }
            ]
          },
          {
            code: 'Major Elective VII',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 5315', title: 'Embedded and Real-Time Systems', prerequisite: 'ECEg 4202' },
              { code: 'EPCE 4302', title: 'Programmable Logic Controllers and Robotics', prerequisite: 'EPCE 3204' }
            ]
          },
          {
            code: 'Major Elective VIII',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'EPCE 4306', title: 'Introduction to Mechatronics', prerequisite: 'None' },
              { code: 'ECEg 5321', title: 'Biomedical Instrumentation and Analysis', prerequisite: 'None' },
              { code: 'EPCE 3202', title: 'Power Electronics', prerequisite: 'ECEg 2202' }
            ]
          },
          { code: 'Free Elective', title: 'Free Elective', freeElective: true, credits: 3, ects: 5, prerequisite: 'Selected course' },
          { code: 'ECEg 5203', title: 'Capstone Project', credits: 2, ects: 3, prerequisite: 'Completion of all major courses' },
          { code: 'ECEg 5207', title: 'Final Year Project Phase I', credits: 2, ects: 3, prerequisite: 'None' }
        ]
      },
      {
        name: 'Semester II',
        courses: [
          { code: 'SOSC 5011', title: 'Project Management for Engineers', credits: 2, ects: 3, prerequisite: 'None' },
          {
            code: 'Major Elective IX',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 5302', title: 'Optics and Optical Communication', prerequisite: 'ECEg 4203' },
              { code: 'ECEg 5304', title: 'Analysis & Design of Digital Integrated Circuit', prerequisite: 'ECE 3206' }
            ]
          },
          {
            code: 'Major Elective X',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 5306', title: 'Telecommunication Networks and Switching', prerequisite: 'ECEg 4203' },
              { code: 'ECEg 5308', title: 'Introduction to Computer Vision', prerequisite: 'ECEg 4302' }
            ]
          },
          {
            code: 'Major Elective XI',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 5310', title: 'Satellite Communication', prerequisite: 'ECEg 4204' },
              { code: 'ECEg 5312', title: 'Digital Hardware Design', prerequisite: 'ECEg 4201' }
            ]
          },
          {
            code: 'Major Elective XII',
            title: 'Choose one course',
            elective: true,
            options: [
              { code: 'ECEg 5314', title: 'Digital Image Processing', prerequisite: 'ECEg 3205' },
              { code: 'ECEg 5316', title: 'Semiconductor Devices', prerequisite: 'ECEg 2201' }
            ]
          },
          { code: 'ECEg 5202', title: 'Final Year Project Phase II', credits: 4, ects: 10, prerequisite: 'Completion of all major courses' }
        ]
      }
    ]
  }
];

const courseIndex = [];
for (const year of catalog) {
  for (const semester of year.semesters) {
    for (const course of semester.courses) {
      if (course.options) {
        for (const option of course.options) {
          courseIndex.push({
            ...option,
            credits: 3,
            ects: option.code === 'EPCE 3302' ? 7 : 5,
            year: year.year,
            semester: semester.name,
            electiveGroup: course.code
          });
        }
      } else {
        courseIndex.push({
          ...course,
          year: year.year,
          semester: semester.name
        });
      }
    }
  }
  for (const course of year.summer || []) {
    courseIndex.push({ ...course, year: year.year, semester: 'Summer Semester' });
  }
}

const coursesByCode = new Map(
  courseIndex.map(course => [normalizeCode(course.code), course])
);

const courseList = document.getElementById('courseList');
const yearFilter = document.getElementById('yearFilter');
const searchInput = document.getElementById('searchInput');
let activeCourse = null;
const savedCourseMapScrollY = Number(localStorage.getItem('campus-scroll-courses')) || 0;
const savedExitExamScrollY = Number(localStorage.getItem('campus-scroll-exam')) || 0;
let allCoursesScrollY = Math.max(0, savedCourseMapScrollY);
let exitExamScrollY = Math.max(0, savedExitExamScrollY);
let detailReturnView = 'courses';
const collapsedSemesters = new Set();
let restoringScrollPosition = false;
let scrollSaveFrame = 0;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const exitExamAreas = [
  {
    name: 'Electrical and Electronics Foundations', weight: '26.32%', questions: 26, credits: 15,
    courses: [
      { code: 'ECEg 2201', title: 'Electronics Circuit I', credits: 4, competencies: ['Explain semiconductor-device operation and structure, including diodes, BJTs, and FETs.', 'Analyze diode characteristics and applications, transistor parameters and biasing, and amplifier frequency response.'], books: ['Robert Boylestad and Louis Nashelsky, Electronic Devices and Circuit Theory, 7th edition.'] },
      { code: 'ECEg 2202', title: 'Electronic Circuit II', credits: 4, competencies: ['Analyze negative-feedback amplifier topologies and differential amplifiers.', 'Explain operational-amplifier characteristics; design oscillator and multivibrator circuits.', 'Explain power semiconductor devices, tuned amplifiers, and power amplifiers.'], books: ['Jacob Millman, Integrated Electronics, McGraw-Hill.', 'Clifton G. Fonstad, Microelectronic Devices and Circuits, 2006.'] },
      { code: 'EPCE 2101', title: 'Fundamentals of Electrical Engineering', credits: 4, competencies: ['Analyze DC circuit laws, theorems, and first- and second-order transient circuits.', 'Apply circuit methods to AC steady state and determine instantaneous, RMS, maximum, and average power.', 'Analyze balanced and unbalanced three-phase circuits; explain electromagnetic phenomena and frequency response.'], books: ['C. K. Alexander and M. N. O. Sadiku, Fundamentals of Circuit Analysis, 10th edition.'] },
      { code: 'EPCE 3201', title: 'Network Analysis and Synthesis', credits: 3, competencies: ['Analyze electrical networks in different conditions and represent them in time and frequency domains.', 'Model active and passive networks; design one-port, two-port, and filter networks.'], books: ['K. M. Soni and M. E. Van Valkenburg, Network Analysis, Prentice Hall India.', 'F. F. Kuo, Network Analysis and Synthesis.'] }
    ]
  },
  {
    name: 'Programming and Computer Systems', weight: '24.56%', questions: 25, credits: 14,
    courses: [
      { code: 'CSEg 1104', title: 'Fundamentals of Programming', credits: 3, competencies: ['Describe engineering problem-solving and C++ syntax and semantics.', 'Use control flow, functions, and data structures to solve problems.', 'Use file and stream objects and object-oriented programming; build a small real-world application.'], books: ['Brian W. Kernighan and Dennis M. Ritchie, The C Programming Language.', 'Sartaj Sahni, Data Structures, Algorithms, and Applications in C++, 2001.'] },
      { code: 'ECEg 3201', title: 'Digital Logic Design', credits: 4, competencies: ['Use number systems, positional notation, and codes in digital systems.', 'Apply logic gates, Boolean algebra, and Karnaugh maps to simplify and design circuits.', 'Design combinational and sequential logic, shift registers, and memory circuits.'], books: ['M. Morris Mano, Digital Design, 4th edition.'] },
      { code: 'ECEg 4201', title: 'Computer Architecture and Organization', credits: 3, competencies: ['Explain register-transfer language, micro-operations, instruction cycles, and control units.', 'Describe basic computer design, instruction formats, and addressing modes.', 'Analyze I/O, memory management, arithmetic algorithms, pipelining, and multiprocessors.'], books: ['William Stallings, Computer Organization and Architecture.', 'M. M. Mano, Computer System Architecture.'] },
      { code: 'ECEg 4202', title: 'Microprocessor and Interfacing', credits: 4, competencies: ['Explain microcomputer organization and microprocessor architecture.', 'Write and analyze assembly and high-level code, instruction sets, and interrupt handling.', 'Analyze interfacing devices and design controllers and computers using advanced microprocessors.'], books: ['Douglas V. Hall, Microprocessors and Interfacing: Programming and Hardware, 2012.', 'Ramesh S. Gaonkar, Microprocessor Programming and Interfacing Using 8085, 4th edition, 2003.'] }
    ]
  },
  {
    name: 'Signal Processing', weight: '10.53%', questions: 10, credits: 6,
    courses: [
      { code: 'ECEg 2204', title: 'Signals and System Analysis', credits: 3, competencies: ['Manipulate common engineering signals and model LTI systems with differential equations.', 'Use Fourier series and transforms for time- and frequency-domain analysis.', 'Evaluate system properties and sampling; apply Laplace transforms and ROC concepts.'], books: ['Simon Haykin and Barry Van Veen, Signals and Systems, 2nd edition, Wiley, 2003.'] },
      { code: 'ECEg 3205', title: 'Digital Signal Processing', credits: 3, competencies: ['Explain digital-signal-processing fundamentals and applications; represent discrete-time signals.', 'Analyze discrete-time signals and systems in transform domains.', 'Interpret time- and frequency-domain processing and design transfer functions and digital filters.'], books: ['Alan V. Oppenheim and Ronald W. Schafer, Discrete-Time Signal Processing, 3rd edition, 2009.', 'John G. Proakis and Dimitris G. Manolakis, Digital Signal Processing: Principles, Algorithms and Applications, 1996.'] }
    ]
  },
  {
    name: 'Communication System Engineering', weight: '22.81%', questions: 23, credits: 13,
    courses: [
      { code: 'ECEg 3202', title: 'Introduction to Communication Systems', credits: 4, competencies: ['Apply signal and modulation concepts in communication systems.', 'Analyze AM efficiency and bandwidth, and design transmitters and receivers for angle modulation.', 'Represent noise mathematically and analyze AM and FM receiver performance in noise.'], books: ['Simon Haykin, Communication Systems, 4th edition, 2006.', 'B. P. Lathi, Modern Digital and Analog Communication Systems, 4th edition, 2010.'] },
      { code: 'ECEg 4203', title: 'Digital Communication', credits: 3, competencies: ['Analyze random variables, power spectral density, pulse modulation, and multiplexing.', 'Compare digital modulation and calculate bit-error performance.', 'Design matched filters or optimal receivers; apply information theory to source and channel coding.'], books: ['John G. Proakis and Masoud Salehi, Digital Communications, 5th edition, 2008.', 'Sanjay Sharma, Analog and Digital Communication Systems, 6th edition, 2012.'] },
      { code: 'ECEg 5201', title: 'Wireless and Mobile Communication', credits: 3, competencies: ['Analyze wireless communication-system and network performance.', 'Evaluate capacity improvement in GSM, WCDMA, and LTE, including sectorization and spatial filtering.', 'Assess shadowing, path loss, fading, cellular coverage and spectrum planning, multiple access, and wireless sensor or cooperative-diversity networks.'], books: ['Theodore S. Rappaport, Wireless Communications: Principles and Practice, 2nd edition.', 'Andrea Goldsmith, Wireless Communications, Cambridge University Press, 2005.'] },
      { code: 'ECEg 4208', title: 'Data Communication and Computer Networks', credits: 3, competencies: ['Classify network functions into layers and analyze data-communication interfaces and standards.', 'Apply error-detection and correction codes.', 'Configure routers, static routing, and IPv6; analyze transport and application protocols and LAN/WAN infrastructure.'], books: ['Behrouz A. Forouzan, Data Communications and Networking, Tata McGraw-Hill.', 'Andrew S. Tanenbaum and David J. Wetherall, Computer Networks, Pearson.'] }
    ]
  },
  {
    name: 'EMF and Wave Guides', weight: '15.79%', questions: 16, credits: 9,
    courses: [
      { code: 'EPCE 2202', title: 'Electromagnetic Field', credits: 3, competencies: ['Apply vector algebra and electrostatic laws to charge distributions in vacuum and material media.', 'Explain fields from moving charges, magnetostatic laws, and time-varying electromagnetic fields.', 'Summarize electrodynamics using Maxwell’s equations.'], books: ['Matthew N. O. Sadiku, Elements of Electromagnetics, Oxford University Press, 2001.'] },
      { code: 'ECEg 4204', title: 'Antenna and Radio Wave Propagation', credits: 3, competencies: ['Analyze antenna parameters and near- and far-field electric and magnetic fields.', 'Analyze antenna arrays and the operation of patch, Yagi-Uda, horn, and helical antennas.', 'Plan antenna measurement and interpret electromagnetic propagation and frequency-dependent effects.'], books: ['J. D. Kraus, Antennas and Wave Propagation, 4th edition.', 'Jordan and K. G. Balmain, Electromagnetic Waves and Radiating Systems, 2nd edition, 2000.'] },
      { code: 'ECEg 4205', title: 'EM Waves and Guided Structure', credits: 3, competencies: ['Use coordinate systems and vector calculus to describe electromagnetic fields.', 'Apply Maxwell’s equations and boundary conditions to wave propagation in lossy and lossless media.', 'Analyze polarization, power flow, transmission-line reflections, matching with a Smith chart, waveguides, modes, and resonators.'], books: ['Matthew N. O. Sadiku, Elements of Electromagnetics, Oxford University Press, 2001.'] }
    ]
  }
];

function courseKey(course) {
  return `${course.code}-${course.title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function matchesQuery(course, query) {
  return `${course.code} ${course.title} ${course.prerequisite || ''}`.toLowerCase().includes(query);
}

function normalizeCode(code) {
  return code.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const courseCategories = new Map();
[
  ['University requirement', [
    'SOSC 5003', 'EnLa 1001', 'EnLa 1002', 'LART 1001', 'LART 1002', 'SOSC 2002',
    'LART 2002', 'HPEd 1011', 'HPEd 1022', 'LART 1004', 'LART 1003', 'SOSC 5011'
  ]],
  ['Basic mandatory', [
    'Math 1101', 'Math 1102', 'Math 2101', 'Phys 2208', 'CSEg 2101', 'Meng 1032',
    'EPCE 2101', 'CSEg 1104', 'Chem 1101', 'Phys 1101', 'CSEg 1101', 'CSEg 1102',
    'Math 2201', 'Math-2103', 'Phys 3202'
  ]],
  ['Major mandatory', [
    'ECEg 2201', 'ECEg 2202', 'ECEg 2204', 'EPCE 2202', 'ECEg 2208', 'ECEg 3103',
    'ECEg 3201', 'EPCE 3201', 'ECEg 3205', 'ECEg 3202', 'ECEg 4201', 'ECEg 4203',
    'ECEg 4205', 'ECEg 3200', 'ECEg 4200', 'ECEg 4202', 'ECEg 4204', 'ECEg 4206',
    'ECEg 4208', 'ECEg 5201', 'ECEg 5203', 'IETP 4203', 'ECEg 5207', 'ECEg 5202'
  ]]
].forEach(([category, codes]) => {
  for (const code of codes) courseCategories.set(normalizeCode(code), category);
});

const dualMinorCodes = new Set([
  'ECEg 2202', 'ECEg 3205', 'ECEg 3202', 'ECEg 3201', 'ECEg 3306',
  'ECEg 3318', 'ECEg 4203', 'ECEg 4204', 'ECEg 5201'
].map(normalizeCode));

function curriculumCategory(course) {
  if (course.freeElective) return 'Free elective';
  if (course.electiveGroup) {
    const group = course.electiveGroup.replace(/^Major\s+Elective\s*/i, '').trim();
    return `Major elective${group ? ` · Group ${group}` : ''}`;
  }
  return courseCategories.get(normalizeCode(course.code)) || 'Major mandatory';
}

function renderSyllabusUnit([title], index) {
  return `<section class="syllabus-unit"><span class="syllabus-index">${String(index + 1).padStart(2, '0')}</span><h3 class="syllabus-unit-title">${escapeHtml(title)}</h3></section>`;
}

function prerequisiteWithTitles(prerequisite) {
  const codePattern = /\b(?:ECEg|CSEg|EPCE|Math|Phys|Chem|EnLa|LART|HPEd|Meng|SOSC|IETP|SEng|ENG|ECE)\s*-?\s*\d{3,4}\b/gi;
  return prerequisite.replace(codePattern, listedCode => {
    const course = coursesByCode.get(normalizeCode(listedCode));
    return course
      ? `${course.title} (${course.code})`
      : `${listedCode} (course name not listed)`;
  }).replace(/co-requisite\s*/gi, 'Co-requisite: ');
}

function semesterItems(semester, query) {
  return semester.courses.flatMap(course => {
    if (course.options) {
      return course.options
        .filter(option => !query || matchesQuery(option, query))
        .map(option => ({
          ...option,
          credits: 3,
          ects: option.code === 'EPCE 3302' ? 7 : 5,
          electiveGroup: course.code
        }));
    }
    return !query || matchesQuery(course, query) ? [course] : [];
  });
}

function renderCourseCard(course, year, semester) {
  const elective = course.electiveGroup ? ` · ${course.electiveGroup.toUpperCase()}` : '';
  const credits = course.credits === 'P/F' ? 'PASS / FAIL' : `${course.credits} CR`;
  const ects = course.ects ? ` · ${course.ects} ECTS` : '';
  const code = course.freeElective ? 'FREE ELECTIVE' : course.code;
  const title = course.freeElective ? '' : `<span class="course-title">${escapeHtml(course.title)}</span>`;
  return `<button class="course-card" data-course="${escapeHtml(courseKey(course))}">
    <span class="card-top"><span class="course-code">${escapeHtml(code)}</span><span class="term-tag">YEAR ${roman(year)}${elective}</span></span>
    ${title}
    <span class="card-bottom"><span>${escapeHtml(semester)} · ${credits}${ects}</span><span class="card-arrow">↗</span></span>
  </button>`;
}

function renderCatalog() {
  const query = searchInput.value.trim().toLowerCase();
  const yearValue = yearFilter.value;
  const visibleCount = courseIndex.filter(course =>
    (yearValue === 'all' || String(course.year) === yearValue) && matchesQuery(course, query)
  ).length;
  const groups = [];

  for (const year of catalog) {
    if (yearValue !== 'all' && String(year.year) !== yearValue) continue;
    const terms = year.semesters.map(semester => ({
      name: semester.name,
      courses: semesterItems(semester, query)
    }));
    if (year.summer) {
      terms.push({
        name: 'Summer Semester',
        courses: year.summer.filter(course => matchesQuery(course, query))
      });
    }
    const visibleTerms = terms.filter(term => term.courses.length);
    if (!visibleTerms.length) continue;

    groups.push(`<section class="year-group"><div class="year-heading"><span>YEAR ${roman(year.year)}</span><i></i></div>
      ${visibleTerms.map(term => {
        const semesterId = `year-${year.year}-${term.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const isCollapsed = collapsedSemesters.has(semesterId);
        return `<section class="semester-group">
        <button class="semester-heading${isCollapsed ? ' collapsed' : ''}" type="button" data-semester-toggle="${semesterId}" aria-expanded="${!isCollapsed}" aria-controls="${semesterId}-courses">
          <h3>${escapeHtml(term.name)}</h3><span>${String(term.courses.length).padStart(2, '0')} ITEMS</span><i class="semester-chevron">⌄</i>
        </button>
        <div class="course-list" id="${semesterId}-courses"${isCollapsed ? ' hidden' : ''}>${term.courses.map(course => renderCourseCard(course, year.year, term.name)).join('')}</div>
      </section>`;
      }).join('')}
    </section>`);
  }

  courseList.innerHTML = groups.join('');
  document.getElementById('courseCount').textContent = `${String(visibleCount).padStart(2, '0')} ITEMS`;
  document.getElementById('emptyState').hidden = visibleCount !== 0;
}

function roman(number) {
  return ['', 'I', 'II', 'III', 'IV', 'V'][number];
}

function openCourse(id) {
  activeCourse = courseIndex.find(course => courseKey(course) === id);
  if (!activeCourse) return;
  detailReturnView = document.getElementById('examView').hidden ? 'courses' : 'exam';
  saveViewScrollPosition(detailReturnView, window.scrollY);
  renderDetail();
  document.querySelector('#backButton span').textContent = detailReturnView === 'exam' ? 'EXIT EXAM GUIDE' : 'ALL COURSES';
  showView('detail');
}

const courseOutlines = {
  "math1101": {
    "description": "Generally the Course Covers Basic Ideas and Principles of Vectors& Matrices of Linear Algebra and Basic ideas of Calculus. In Particular the course Contains principles of vectors , matrices & determinants, limit and continuity, derivatives & their applications, integrals, integration techniques and their applications",
    "outcomes": [
      "CLO 1 · Apply the basic principles of vectors to solve the problems that needs concepts of vector operations",
      "CLO 2 · Solve the system of linear equations by using matrix and determinant",
      "CLO 3 · Evaluate basic limit and continuity problems",
      "CLO 4 · Analysis the extreme values of a given system by using basic rules and principles of differentiation",
      "CLO 5 · Use integration techniques and principles to solve integral problems; determine the volume, area , arc-length, surface area and center of mass of an object",
      "CLO 6 · Apply rules and principles of vectors, matrix, determinant, derivative and integration to solve various applications problems in Engineering"
    ],
    "units": [
      [
        "Vectors"
      ],
      [
        "Matrices and Determinants"
      ],
      [
        "Limits and Continuity"
      ],
      [
        "Derivatives and Their Applications"
      ],
      [
        "Integration and Its Applications"
      ]
    ],
    "workload": "160 total student learning hours.",
    "books": [
      "Robert Ellis and Denny Gulick, Calculus with analytic geometry, 6thed, Harcourt Brace Jovanovich, publishers",
      "Howard Anton, Elementary Linear Algebra with Applications 9th ed.",
      "Howard Anton, Calculus with Analytic Function, 5th ed.",
      "James Stewart, Calculus Early Transcendental,6th ed."
    ]
  },
  "phys1101": {
    "description": "This course provides science students with the basic concepts of physics that enable them to understand describe and explain natural phenomena. Emphasis is laid on general principles and fundamental concepts in measurements, mechanical and thermal interactions, fluid mechanics, electromagnetism, oscillations and waves with applications of physics in various fields of science. Permitting the students to voice and defend their own opinions and enhancing the students’ commitment to individual study and acquiring knowledge. Active involvement of learners is required at each phase. This is done through questioning and answering, reflection, reporting, solving problems associated with the respective topics.",
    "outcomes": [
      "CLO 1 · Recall basic physics by refreshing and summarizing the previous preparatory physics concepts before tackling the advanced physics courses.",
      "CLO 2 · Acquire knowledge in kinematics and dynamics of particles in one and two dimensions and to explain the basic concepts of charges, fields and potentials.",
      "CLO 3 · Elaborate the use and the working system of cells (batteries), resistors, generators, motors and transformers.",
      "CLO 4 · Understand the first law of thermodynamics for a closed system and apply it to solve problems.",
      "CLO 5 · Interpret systems that oscillate with simple harmonic motion.",
      "CLO 6 · Explain the application of physics in different sciences and technology fields."
    ],
    "units": [
      [
        "Preliminaries"
      ],
      [
        "Kinematics and Dynamics of Particles"
      ],
      [
        "Fluid Mechanics"
      ],
      [
        "Heat and Thermodynamics"
      ],
      [
        "Oscillations, Waves, and Optics"
      ],
      [
        "Electromagnetism and Electronics"
      ],
      [
        "Cross-Cutting Applications of Physics"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "chem1101": {
    "description": "The course is designed to study Properties, units and measurements; the composition of matter, chemical reactions, reactions stoichiometry, atomic structure and the periodic table, the chemical bond, structure of molecules, properties of solutions, chemical equilibria, introduction to functional groups and their typical reactions.",
    "outcomes": [
      "CLO 1 · Apply common SI units of measurement to interconvert units of measurement.",
      "CLO 2 · Categorize elements based on electronic configuration.",
      "CLO 3 · Identify the chemical reaction types",
      "CLO 4 · Determine mass, % composition, empirical and molecular formulas by applying the mole concept",
      "CLO 5 · Predict atomic structure, chemical bonding or molecular geometry based on various models.",
      "CLO 6 · Describe chemical equilibria, colligative properties of solutions and functional groups"
    ],
    "workload": "120 total student learning hours.",
    "books": [
      "R. Chang, General Chemistry: The Essential Concepts, 8th Ed, 2008",
      "J.E. Brady, J. W. Russel and J. R. Holum, General Chemistry Principles and Structure 5th Ed, 2006.",
      "S. S. Zumdahl and S.A. Zumdahl, Chemistry, 7th ed., 2007 51",
      "J.W. Hill and R.H. Petrucci, General Chemistry: An Integrated Approach, 2nd ed., 1999.",
      "M. S. Silberberg; Principles of General Chemistry, 2007."
    ],
    "units": [
      [
        "Properties, Measurements, and Units"
      ],
      [
        "The Composition of Matter"
      ],
      [
        "Chemical Reactions"
      ],
      [
        "Reaction Stoichiometry"
      ],
      [
        "Atomic Structure and the Periodic Table"
      ],
      [
        "Chemical Bonding"
      ],
      [
        "The Structures of Molecules"
      ],
      [
        "The Properties of Solutions"
      ],
      [
        "Chemical Equilibrium"
      ],
      [
        "Introduction to Functional Groups"
      ]
    ]
  },
  "cseg1101": {
    "description": "In this course the basic techniques of computational problem solving will be covered by using computational thinking while writing small and medium sized programs, mapping problems into computational frameworks emphasizing on scientific problems, understanding problems and formulation of problems based on the elective programming language (using python). The course includes the concepts and techniques of data structure, input/output, flow control and incidental program, and by using a systematic division of problem solution and concept of module, to solve problems in numerical value field and non-numerical value field with program experiment.",
    "outcomes": [
      "CLO 1 · Develop simple algorithms from a natural language problem description, hence, express the art of computational problem solving using computational thinking.",
      "CLO 2 · Apply the principles of top-down design approach to translate algorithms to python program using IDE.",
      "CLO 3 · Utilize the concept of modules and function to solve a given problem",
      "CLO 4 · Use persistent data, basic searching and sorting algorithms, and data structure to solve a given problem",
      "CLO 5 · Practice different computational problem solving techniques",
      "CLO 6 · Discuss the basic concepts of object-oriented programming."
    ],
    "units": [
      [
        "Introduction to Computational Thinking and Programming"
      ],
      [
        "Control Structures"
      ],
      [
        "Working with Objects, Operators, and Expressions"
      ],
      [
        "Functions"
      ],
      [
        "Scope of Variables, Modules, and Higher-Order Functions"
      ],
      [
        "Data Structures"
      ],
      [
        "Parameters, Files, Formatting, and String Methods"
      ],
      [
        "Sorting and Recursion"
      ],
      [
        "Searching and Merge Sort"
      ],
      [
        "Problem-Solving Techniques"
      ],
      [
        "Dynamic Programming"
      ],
      [
        "Object-Oriented Programming Concepts"
      ]
    ],
    "resources": [
      "deliver the",
      "Computer Lab",
      "Python 3, PyCharm IDE, Python Imaging Library (Pillow), cs1graphics.py",
      "cs1robots.py, and cs1media.py"
    ],
    "workload": "150 total student learning hours.",
    "books": [
      "Allen Downey, Jeffrey Elkner, How to Think Like a Computer Scientist: L with Python, Biolatera, 2002 2 Paul Gries, Jennifer Campbell, Jason Montojo, Practical Programm Introduction to Computer Science Using Python 3.6, 3rd Edition, Pr Bookshelf, 2017"
    ]
  },
  "enla1001": {
    "description": "Communicative English Skills is a course where students learn what they need to know for a career in Science. The course gives students the language, information, and skills they need to study science. It also provides students the language appropriate for studying science and real work situations as it comprises unique sections such as: ‘it’s my job’ wherein real people talk about their work in Science, ‘listening’ whereby students are exposed to situations related to science dialogues, technical explanations, and interviews, ‘reading’ whereby students meet a variety of science based texts, and the ‘writing section’ which is designed to let students compose short reports on different activities.",
    "outcomes": [
      "CLO 1 · Make presentations on a wide variety of natural science fields and situations. (PLO- 10)",
      "CLO 2 · Listen to dialogues, technical explanations and interviews and identify the central message.(PLO-10)",
      "CLO 3 · Comprehend varieties of texts related to science. (PLO-10)",
      "CLO 4 · Recognize various aspects of words.(meaning, collocations, pronunciation, etc.) (PLO-10)",
      "CLO 5 · Compose short texts, reports, etc. (PLO-10)",
      "CLO 6 · Apply grammatical items for communications in science context. (PLO-10)"
    ],
    "units": [
      [
        "Technology and Society"
      ],
      [
        "Studying Technology"
      ],
      [
        "Design"
      ],
      [
        "Appropriate Technology"
      ],
      [
        "Manufacturing"
      ],
      [
        "Transport"
      ],
      [
        "Information Technology"
      ],
      [
        "The Future of Technology"
      ]
    ],
    "resources": [
      "Computer Lab",
      "Software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Burns , Anne & Joseph S. 2018, International Perspectives on Teaching the Four Skills in ELT. Palgrave Macmillan. UK.",
      "Cystal, D. (1997).English as a Global Language: Cambridge University Press: Cambridge.",
      "Hewings, Martin & Simon H. 2015, Cambridge English Grammar and Vocabulary for Advanced. Cambridge University Press.",
      "Gideon (2015). English Language And Grammar: Koros Press Limited: United Kingdom.",
      "Palmer, Eric.2014, Teaching the Core Skills of Listening and Speaking. ASCD.USA."
    ]
  },
  "lart1001": {
    "description": "This course is designed for undergraduate students with the aim of familiarizinglearners to the essence of ethics and citizenship rights and responsibilities. It will helpstudents to acquire a necessary ethical qualities and civic competences while dealingwith issues that affect their society at all levels, country and human in general. The course starts with unfolding the notions, principles and theories of ethics which can shape our attitude, action and behavior in making moral judgment. Next, the course introduces learners to the nature, mutual interactions and historical evolutions of society, state, government and citizenship. It also elucidates issues pertaining to political governance such as constitution, democracy, and human rights in some details. To enable learners grasp basic knowledge of political, economic and social dynamics of international system in today’s globalized world, the course also introduces international relations and foreign policy and other major contemporary global issues. In light of this, the course does not present mere theoretical knowledge, but also practical knowledge of accentuating art of governing and protecting national interest in today’s complex world.",
    "outcomes": [
      "CLO 1 · Gain basic knowledge of ethics, and live up to expectations of ethical principles while executing their professions",
      "CLO 2 · Be equipped with ethical qualities and apply ethical values in making moral judgments and any other decisions that affect their day-to-day activities.",
      "CLO 3 · Understand theoretical discourses and practices of state and government, and their mutual interplay for building the best political order in today’s complex international system",
      "CLO 4 · Develop analytical and reflective skills of identifying national and global development priorities in complement with human rights and democracy",
      "CLO 5 · Elucidate the rights and responsibilities attributed to citizens, and possess desirable knowledge, skills and commitment to exercise entitlements and discharge obligations in the realm of citizenship.",
      "CLO 6 · Develop intellectual and practical skills of foreign policy, diplomacy, and global trends to defend one’s own national interest in international relations."
    ],
    "units": [
      [
        "Understanding Ethics and Morality"
      ],
      [
        "State and Government"
      ],
      [
        "Citizen and Citizenship"
      ],
      [
        "Constitution, Democracy, and Human Rights"
      ],
      [
        "International Relations and Foreign Policy"
      ],
      [
        "Major Contemporary Global Issues"
      ]
    ],
    "resources": [
      "Introduction to Civics and Ethics module (LAR 1011)",
      "Introduction to Global Trends module (IRGI 1021)"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Alexander, Larry (eds.).(1998). Constitutionalism: Philosophical Foundations. Cambridge: Cambridge University Press.",
      "Altinay, Hakan (2011) Global Civics: Responsibilities and Rights in an Interdependent World. The Brookings institution: Washington",
      "Barbelet, J.M. (1988) Citizenship. Minneapolis: University of Minnesota Press.",
      "Barber, Benjamin (1990) ‗Service, Citizenship, and Democracy. Civil Duty as an Entailment of Civil Rights‘, in Williamson Evers (ed.) National Service: Pro and Con. Stanford: Hoover Institution Press, pp. 27–43.",
      "Bellamy, R.2008. Citizenship: A Very Short Introduction. Oxford: Oxford University Press.",
      "Crawford, Robert (2000) Idealism and Realism in International Relations: Beyond the Discipline. Routledge: USA",
      "Fasil Nahum. 1997. Constitution for a Nation of Nations: The Ethiopian Prospect. Lawrenceville,NJ: Red Sea Publishers.",
      "Fishkin, James (1993) Democracy and Deliberation. New Haven, CN: Yale University Press.",
      "Francis Snare (1992). The Nature of Moral Thinking. Rutledge, U.S.A and Canada",
      "Genest, Mark A. (1996). Conflict and Cooperation: Evolving Theories of International Relations. Fourth Worth: Harcourt Brace and Co.",
      "Goldstein J. S. (2003) International Relations.5th edition. Washington, D.C. Pearson Education Press, Inc",
      "Griffiths, Martin (Ed.) (2007). International Relations Theory for the Twenty-First Century:An introduction. New York: Routledge",
      "John M.Rist Real Ethics. (2004).Reconsidering the Foundations of MoralityCambridgeuniversity press U.K and U.S.A 65",
      "Kymlicka, W. & Norman, W. (eds).2000. Citizenship in Diverse Societies.Oxford UniversityPress.",
      "Kymlicka, W. (1995) Multicultural Citizenship: A Liberal Theory of Rights. Oxford: Clarendon Press.",
      "Macedo, S. (2000).Diversity and distrust: civic education in a multicultural democracy. Cambridge, Mass: Harvard University Press.",
      "Mintz, Alex and Karl De Rouen (2010) Understanding Foreign Policy Decision Making, Cambridge University Pres: Cambridge",
      "Mouritzen, Poul (1987): The Demanding Citizen: Driven by Policy, Self- Interest, or Ideology? ‘, European Journal of Political Research 15 (4): 417– 35.",
      "Munitz, Milton K., (ed.) (1961). A Modern Introduction to Ethics, The Free Press of Clencoe"
    ]
  },
  "hped1011": {
    "description": "This course will provide the students with basic concepts of the five components of health related physical fitness (cardiovascular, muscular strength and endurance, flexibility, and body composition), hypokinetic disease and general principles of training. It is mainly practical oriented. As a result, the students will be exposed to various exercise modalities, sport activities, minor and major games, and various training techniques as a means to enhance health related physical fitness components. In addition, they will develop the skills to assess each component of fitness and will practice designing cardiovascular, muscular strength and endurance, and flexibility programs based on the fitness assessment. The course serves as an introduction to the role of exercise in health promotion, fitness, performance including the acute and chronic responses of the body to exercise",
    "outcomes": [
      "CLO 1 · Understand the knowledge of physical fitness and its benefits.",
      "CLO 2 · Improve their physical fitness and wellness for better quality life.",
      "CLO 3 · Choose appropriate physical activity for their regular physical activity program.",
      "CLO 4 · Develop positive attitude towards physical activity and participation.",
      "CLO 5 · Develop positive social relationship and work cooperatively with others.",
      "CLO 6 · Develop skills to assess health related physical fitness components."
    ],
    "units": [
      [
        "Concepts of Physical Fitness"
      ],
      [
        "The Health Benefits of Physical Activity"
      ],
      [
        "Making Well-Informed Food Choices"
      ],
      [
        "Health-Related Components of Fitness and Principles of Exercise Prescription"
      ],
      [
        "Assessment of Fitness Components"
      ]
    ],
    "workload": "102 total student learning hours.",
    "books": [
      "Dale B, Hahn (1999). Focus on health 2nd ed.",
      "Frank Gallugna (2000). Advanced PE for Edexcel. 69 edition /publication) 3 Thomas D, Paul M, Walton T (2007). Fit & Well; Core Concepts and Labs in physical Fitness and Wellness 7th Edition"
    ]
  },
  "math1102": {
    "description": "This course covers sequences, series, power series, Fourier series. Differential and integrals calculus of functions of several variables and their applications.The course aims to develop the basic ideas and methods of multi variable calculus, including the Taylor series of function, Fourier series, extrema, the examination of constrained maxima and minima using Lagrange multipliers and the integration of elementary functions of several variables. It aims to enable students to understand the extension from single variable to several variables of basic concepts such as continuity, differentiability and integration. Moreover, the course aims to strengthen the ability to apply mathematical concepts like partial differentiation and multiple integrals in computing some important quantities which will appear in engineering, such as rates of changes of quantities with several variables, the area and volume of physical bodies, the center of mass of some rigid body, and so on.",
    "outcomes": [
      "CLO 1 · Understand basics (of) and types of sequence and series and their properties",
      "CLO 2 · Acquire the knowledge on power series and application of Taylor’s series.",
      "CLO 3 · Know about Fourier series and half-range expansion.",
      "CLO 4 · Solve different limit problems partial derivatives",
      "CLO 5 · Formulate and solve different optimization problems.",
      "CLO 6 · Evaluate multiple integral problems and understand its applications"
    ],
    "units": [
      [
        "Sequences and Series"
      ],
      [
        "Power Series"
      ],
      [
        "Fourier Series"
      ],
      [
        "Differential Calculus of Functions of Several Variables"
      ],
      [
        "Multiple Integrals"
      ]
    ],
    "workload": "160 total student learning hours.",
    "books": [
      "Robert Ellis and Denny Gulick, Calculus with analytic geometry, 6th edition",
      "Leithold, The calculus with analytic geometric, 3rd ed.",
      "R. T. Smith and R. B. Minton, Calculus concepts and connections, Mc Gram-Hill book company, 2006.",
      "D.V. Widder, Advanced calculus, Prentice-Hall, 1979.",
      "James Stewart, Calculus with analytic geometry, 7th ed."
    ]
  },
  "cseg1102": {
    "description": "This course will enable students to explore current breakthrough technologies in the areas of Artificial Intelligence, Internet of Things and Augmented Reality, Data Science and other technologies that have emerged over the past few years. Besides helping learners become literate in emerging technologies, the course will prepare them to use technology in their respective professional preparations.",
    "outcomes": [
      "CLO 1 · Identify different emerging technologies",
      "CLO 2 · Recognize various emerging technologies and tools.",
      "CLO 3 · Discuss ethical and professional issues of emerging technologies",
      "CLO 4 · Differentiate different emerging technologies.",
      "CLO 5 · Select appropriate technology and tools for a given task"
    ],
    "units": [
      [
        "Introduction to Emerging Technologies"
      ],
      [
        "Artificial Intelligence"
      ],
      [
        "Internet of Things"
      ],
      [
        "Ethics and Professionalism in Emerging Technologies"
      ],
      [
        "Other Emerging Technologies"
      ]
    ],
    "resources": [
      "deliver the",
      "Adama Science and Technology university: Introduction to Civics and Ethics",
      "(Module) LAR 1011.",
      "Introduction to Global Trends module IRGI 1021"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Follett, J. (2014). Designing for Emerging Technologies: UX for Genomics, Robotics, and the Internet of Things: O'Reilly Media.",
      "Jung, T., &Dieck, M. C. t. (Eds.). (2018). Augmented Reality and Virtual Reality: Empowering Human, Place and Business",
      "Vong, J., & Song, I. (2014). Emerging Technologies for Emerging Markets: Springer Singapore",
      "Del Rosal, V. (2015).Disruption: Emerging Technologies and the Future of Work. Emtechub.",
      "Mohamed Anis Bach Tobji, Rim Jallouli, Yamen Koubaa, Anton Nijholt Digital Economy. Emerging Technologies and Business Innovation, 2018"
    ]
  },
  "cseg1104": {
    "description": "The course is designed to introduce structured programming in C++ by providing an overview of programming concepts, on creating and working computer programs in C++. It will address fundamental concepts of program analysis, design, coding, testing and development. It includes introduction to computer programming; programming paradigms; algorithms and problem-solving; introduction to data structures and Programming constructs. The course is designed on how to solve business and scientific problems through the technique of structured programming. It will prepare students for focused studies in any programming language.",
    "outcomes": [
      "CLO 1 · Describe problem solving process in science and engineering.",
      "CLO 2 · Describe the basics of C++ programming-syntax and semantic elements of the programming.",
      "CLO 3 · Use the control flow structures and functions to solve a given problem.",
      "CLO 4 · Implement the basic data structure elements in C++ that serve as holding heterogeneous data primitives",
      "CLO 5 · Develop a C++ program to implement file and stream objects using object oriented programming concepts.",
      "CLO 6 · Develop a mini application that solves a real world problem using C++."
    ],
    "units": [
      [
        "Problem Solving and Computer Programming"
      ],
      [
        "Basics of C++ Programming"
      ],
      [
        "Input/Output and Functions"
      ],
      [
        "Control Statements"
      ],
      [
        "Arrays and Pointers"
      ],
      [
        "Files and Streams"
      ],
      [
        "Structures and Object-Oriented Programming"
      ],
      [
        "Advanced Sorting Algorithms"
      ]
    ],
    "resources": [
      "simulation",
      "Software (Code Block)",
      "Computer Lab",
      "Visual Studio Code"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Sahni, S 2001. \"Data Structures, Algorithms and Apllications in C++ WCB/McGraw-Hill.",
      "Introduction to Algorithms by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
      "Data Structures and Algorithm Analysis in C++ by Mark Allen Weiss",
      "Cracking the Coding Interview by Gayle Laakmann McDowell",
      "MIT OpenCourseWare: Introduction to Algorithms",
      "Course General Course 80 Category"
    ]
  },
  "lart1002": {
    "description": "The main goal of the course is to improve critical and logical reasoning skills. Students will see how our ordinary intuitions on good or bad reasoning can be articulated explicitly in formal systems, and gain a new ability to evaluate arguments and reasoning they encounter every day with rigorous logical concepts and tools. As to the subject matter, it introduces systematic methods of reasoning, such as argument, deduction, induction, syllogistic, and propositional logic.",
    "outcomes": [
      "CLO 1 · Appreciate the importance of logic and critical thinking",
      "CLO 2 · know how to construct valid arguments of their own",
      "CLO 3 · Analyze the proper use of language for effective communication",
      "CLO 4 · Apply logical rules and principles for evaluating arguments",
      "CLO 5 · Identify logical fallacies",
      "CLO 6 · Understand the significance of logical and critical attitude for science"
    ],
    "units": [
      [
        "Introduction: The Nature of Argument"
      ],
      [
        "Language: Meaning and Definition"
      ],
      [
        "Informal Fallacies"
      ],
      [
        "Categorical Propositions"
      ],
      [
        "Categorical Syllogism"
      ],
      [
        "Propositional Logic"
      ]
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Hurley, Patrick J.(1997) A Concise Introduction to Logic (6-12)th Edition. Belmarnt: Wadsworth Publishing Company.",
      "Copi, Irving M.and Carl Cohen, (1990) Introduction to Logic, New York: Macmillan Publishing Company.",
      "Fogelin, Robert, J, (1987) Understanding Arguments: An Introduction to Informal Logic New York: Harcourt Brace Jvanovich Publisher.",
      "Guttenplan, Samuel: (1991) The Language of Logic. Oxford: Blackwell Publishers Stephen, C.(200) The Power of Logic. London and Toronto: Mayfield Publishing company.",
      "Simico, N.D and G.G James. (1983) Elementary Logic, Belmont, Ca: Wadsworth Publishing Company."
    ]
  },
  "meng1032": {
    "description": "This course introduces importance of engineering drawing, and Basic Geometric construction, and theory of projections, theory and practices of Multi view representations, Pictorial drawings, Auxiliary and sectional view drawing using drawing instrument.",
    "outcomes": [
      "CLO 1 · Apply drawing conventions and standards in engineering drawings to effectively communicate with engineers.",
      "CLO 2 · Apply methods and rules of construction for different types of geometrical shapes.",
      "CLO 3 · Sketch multi-view drawings of given objects or pictorial drawing",
      "CLO 4 · Draw pictorial drawings of objects from given multi-view drawings",
      "CLO 5 · Draw auxiliary and sectional views as a supplement of multi-view drawings"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Basic Geometric Constructions and Lettering"
      ],
      [
        "Theory of Projections and Multi-View Drawings"
      ],
      [
        "Pictorial Drawings"
      ],
      [
        "Auxiliary Views"
      ],
      [
        "Sectional Views"
      ]
    ],
    "resources": [
      "Software",
      "Video Tutorial"
    ],
    "workload": "120 total student learning hours.",
    "books": [
      "Theodore J. Branoff, Interpreting Engineering Drawings, 8th Edition, 2016.",
      "Edinburgh Gate Harlow, Technical Drawing with Engineering Graphics,14th Edition, 2014. References: 1. David A. Madsen, David P. Madsen, Engineering Drawing & Design, 6th Edition, 2017",
      "Frederick E. Giesecke, Alva Mitchell, Henry Cecil Spencer and Cindy M. Johnson Technical Drawing with Engineering Graphics, 15th edition, 2016.",
      "M.L. Mathur and R.S. Vaishwanar, Engineering Drawing and Graphics. 3rd edition, Jain Brothers, 2013.",
      "M. B. Shah and B. C. Rana, Engineering Drawing, 2nd Edition, 2009",
      "Cecil H. Jensen, Jay D. Helsel, and Dennis Short, Engineering Drawing and Design, Aug 17, 2007",
      "M.L. Mathur and R.S. Vaishwanar, Engineering Drawing and Graphics. 3rd edition, 87 Jain Brothers, 2013"
    ]
  },
  "enla1002": {
    "description": "Basic Writing Skills course aims at developing students’ basic writing skills in Science Context. The course gives students the language writing skills they need to study Science. It contains sentence level writing: sentence structure, sentence types sentence combinations, common sentence errors (fragment, run on, comma splices, misplaced modifier, dangling modifier, faulty parallelism, faulty reference of pronoun, faulty agreement and shifts); paragraph level writing: the essence of a paragraph, components of a paragraph (topic sentence, supporting sentences, concluding sentence), characteristics of effective paragraph (unity, coherence and completeness) and the steps in writing a paragraph and types of a paragraph; essay level writing: structure of an essay, thesis statement and supporting paragraphs, types of essays and techniques of essay development.",
    "outcomes": [
      "CLO 1 · Write grammatically and structurally correct sentence (PLO-10)",
      "CLO 2 · Identify and correct common sentence errors in paragraphs and essays(PLO-10)",
      "CLO 3 · Write coherent, unified and complete paragraphs of different types in science context (PLO-10)",
      "CLO 4 · Identify basic structures and elements of paragraph and essay (PLO-10)",
      "CLO 5 · Write different types of essays in science context (PLO-10)"
    ],
    "units": [
      [
        "Sentence"
      ],
      [
        "Combining Sentences"
      ],
      [
        "Common Sentence Errors"
      ],
      [
        "Paragraph Writing"
      ],
      [
        "Essay Writing"
      ]
    ],
    "resources": [
      "Computer Lab",
      "Software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Brandon, L. and Brandon, K. (2005).Paragraph and Essays. Boston: Wadsworth Cengage Learning.",
      "Erliana, Santi RahmadiN., Sabarun &M. Zaini Miftah.2014, Developing Sentences into Paragraph: Course material for Paragraph Writing. Genius Media Publishing",
      "Langan, John. 2010, Exploring Writing Sentences and Paragraphs. McGraw Hill. NY.",
      "Radford, Andrew. 2009, An Introduction to English Sentence Structure. Cambridge University Press, New York.",
      "Sherrise Roehr. USA. Murray, Neil. 2012, Cambridge University press. NY."
    ]
  },
  "hped1022": {
    "description": "This course is designed to acquaint freshman engineering and applied natural science students with the nature and scope of different ball games. It emphasize the value of establishing lifelong fitness using ball games as a means and focuses on the fundamental of volley ball, hand ball, basketball and football as a life time leisure activity also focuses on the development of personalized approach to healthy active living through participation in a verity of ball games that have the potential to engage students’ interest throughout their lives. Again the courses enables the participants enjoying practice and acquire proper technique and strategies associated with the ball games mentioned above and learn rules governing the game.",
    "outcomes": [
      "CLO 1 · Understand the value of playing ball games and its basic rules. (WA 1)",
      "CLO 2 · Improve their physical fitness and wellness for better quality life. (WA 12)",
      "CLO 3 · Demonstrate basic techniques of volleyball, basketball, football and hand ball games. (WA 5)",
      "CLO 4 · Develop positive attitude and participate in deferent ball games. (WA 1)",
      "CLO 5 · Improve team work and show Respect to their colleagues. (WA 9)",
      "CLO 6 · Use their leisure time properly and appropriate safety measures in playing ball games. (WA 3)"
    ],
    "units": [
      [
        "Volleyball"
      ],
      [
        "Handball"
      ],
      [
        "Basketball"
      ],
      [
        "Football"
      ]
    ],
    "workload": "80 total student learning hours.",
    "books": [
      "Federation International de Volleyball (FIVB) Coaching Manual",
      "International Handball Federation (IHF) Coaching Manual",
      "Federation of International Basketball Association (FIBA)Coaching Manual",
      "Federation of International Football Association (FIFA) Coaching Manual"
    ]
  },
  "math2101": {
    "description": "This course covers the topics in First order ordinary Differential Equation, second order ordinary Differential Equation , Laplace transforms and its application, scalar and vector fields and complex analytic function. Particularly, basic definitions and properties of linear and nonlinear, homogeneous and non-homogeneous differential equations, the Laplace transform of functions and the inverse Laplace transform will be discussed. Also different methods of solving an ordinary differential equations considered and practical problems in application of Engineering and Applied Science will be solved.",
    "outcomes": [
      "CLO 1 · Classify ordinary differential equation and identify the method of solving each type of ordinary differential equations",
      "CLO 2 · Apply the method of solving ordinary differential equations to formulate and solve engineering problems",
      "CLO 3 · State Laplace transformation and the inverse Laplace transform of a functions and then apply it to solve Differential and an Integro-differential equation",
      "CLO 4 · Identify scalar and vector fields, state and apply Green’s theorem, Gauss divergence theorem and stock’s theorem in practical problems",
      "CLO 5 · Analyze the theory of Complex Analytic functions, Complex integrals and find integration of complex analytic function by a method of Residue"
    ],
    "units": [
      [
        "First-Order Ordinary Differential Equations"
      ],
      [
        "Second-Order Ordinary Linear Differential Equations"
      ],
      [
        "Laplace Transforms"
      ],
      [
        "Vector Calculus"
      ],
      [
        "Complex Analysis"
      ]
    ],
    "resources": [
      "lab, simulation"
    ],
    "workload": "160 total student learning hours.",
    "books": [
      "Erwin Kreyszing:AdvancedEngineering Mathematics",
      "Edwards and Penney : Calculus and Analytic Geometry.",
      "Zill D. G: A first course in differential equations with application. International edition,1981",
      "Kaplan W: Ordinary differential equations",
      "Martin R. H :Ordinary Differential equations",
      "M.D Raisinghania: Ordinary and partials Differential Equations"
    ]
  },
  "eceg2201": {
    "description": "It introduces semiconductor devices, basic structure, principles, and operations. Analysis of BJT and FET basic operation with i-v characteristics and small signal analysis of BJT and FET. Application of semiconductor devices, BJT, and FET with real-time examples. Frequency Response of BJT and FET and various coupling methods. The basic construction of Amplifiers with various biasing methods and their application.",
    "outcomes": [
      "CLO 1 · Discuss basic semiconductor devices' working principles and structures with application.",
      "CLO 2 · Discuss the characteristics of Semiconductor diodes, types of various semiconductor diodes, its characteristics with applications of each diode.",
      "CLO 3 · Analysis of BJT with application and its various parametric representations.",
      "CLO 4 · Analysis of FET with various biasing techniques, applications and parametric Representation.",
      "CLO 5 · Explain the frequency response of amplifiers with various parameters and coupling Methods."
    ],
    "units": [
      [
        "Basic Semiconductor Theory"
      ],
      [
        "Semiconductor Diodes and Their Applications"
      ],
      [
        "Bipolar Junction Transistors"
      ],
      [
        "Field-Effect Transistors"
      ],
      [
        "Frequency Response of Amplifiers"
      ],
      [
        "Multistage Amplifiers"
      ]
    ],
    "resources": [
      "computerlab, simulation",
      "simulation Software",
      "Circuits lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Robert Boylestad, Louis Nashelsky: Electronic Devices and CircuitTheory,7th edition",
      "Jacob Millman, Microelectronics – Digital and Analog Circuits and Systems, McGraw-Hill series in electrical engineering, 1st Edition",
      "Electronic devices and circuits, Bell A David"
    ]
  },
  "epce2101": {
    "description": "The course deals with basic concepts of electrical engineering, basic circuit law and circuit analysis methods, fundamental circuit theorems, transient circuit analysis, steady state circuit and power analysis, introduction to polyphase circuits, electromagnetism, and frequency analysis.",
    "outcomes": [
      "CLO 1 · Analyze fundamental and derived circuit laws, and analysis theorems of DC circuits",
      "CLO 2 · Analyze first and second orders transient circuits",
      "CLO 3 · Apply fundamental and derived circuit laws, and theorems to the analysis of AC steady state circuits",
      "CLO 4 · Analyze a circuit to determine the instantaneous, RMS, maximum and average powers in AC circuits.",
      "CLO 5 · Analyze basic polyphase circuits and calculate circuit parameters of balanced and unbalanced three phase circuits",
      "CLO 6 · Discuss the basic concepts of electromagnetic phenomenon, and frequency response"
    ],
    "units": [
      [
        "Circuit Laws and Methods of Analysis"
      ],
      [
        "First- and Second-Order Transient Circuit Analysis"
      ],
      [
        "AC Steady-State Analysis"
      ],
      [
        "Steady-State Power Analysis"
      ],
      [
        "Polyphase Circuits"
      ],
      [
        "Introduction to Electromagnetism"
      ],
      [
        "Introduction to Frequency Response"
      ]
    ]
  },
  "cseg2101": {
    "description": "The course covers the design, analysis, and implementation of data structures and algorithms to solve engineering problems. Topics include basic data structures such as arrays, stacks, queues, and lists and advanced data structures such as trees and graphs. The algorithms used to manipulate these structures, and their application to solving practical engineering problems",
    "outcomes": [
      "CLO 1 · Describe the functions and applications of basic data structures.",
      "CLO 2 · Analyze the performance of different algorithms in terms of time and space complexity.",
      "CLO 3 · Apply the right kind of linear data structure for efficient problem solving.",
      "CLO 4 · Apply the right kind of non-linear data structure for efficient problem solving.",
      "CLO 5 · Discuss the runtime and memory efficiency of principal algorithms for sorting, searching, and hashing."
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Simple Searching and Sorting Algorithms"
      ],
      [
        "List Data Structure"
      ],
      [
        "Stack Data Structure"
      ],
      [
        "Queue Data Structure"
      ],
      [
        "Tree Data Structure"
      ],
      [
        "Graph Data Structure"
      ],
      [
        "Advanced Sorting Algorithms"
      ]
    ],
    "resources": [
      "simulation",
      "Software (Code Block)",
      "Computer Lab",
      "Visual Studio Code"
    ],
    "workload": "Total student learning time: 124 hours.",
    "books": [
      "Sahni, S 2001. \"Data Structures, Algorithms and Apllications in C++ WCB/McGraw-Hill.",
      "Introduction to Algorithms by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
      "Data Structures and Algorithm Analysis in C++ by Mark Allen Weiss",
      "Cracking the Coding Interview by Gayle Laakmann McDowell",
      "MIT OpenCourseWare: Introduction to Algorithms"
    ]
  },
  "lart1004": {
    "description": "This course covers a brief description on the location, shape and size of Ethiopia as well as basic skills of reading map, the physical background and natural resource endowment of Ethiopia and the Horn which includes its geology and mineral resources, topography, climate, drainage and water resources, soil, fauna and flora. It also deals with the demographic characteristics of the country and its implications on economic development.",
    "outcomes": [
      "CLO 1 · Demonstrate basic knowledge on the geographic attributes of Ethiopia and Horn.",
      "CLO 2 · Acquire general understanding of physical geographic processes, and human-environment relationships.",
      "CLO 3 · Develop ethical aptitudes and dispositions necessary to live in harmony with the natural environment",
      "CLO 4 · Develop an understanding of national population distributional patterns and dynamics",
      "CLO 5 · Describe the comparative advantages of economic regimes; and understand the impacts of globalization.",
      "CLO 6 · Identify their country’s overall geographic conditions and opportunities;"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "The Geology of Ethiopia and the Horn"
      ],
      [
        "The Topography of Ethiopia and the Horn"
      ],
      [
        "Drainage Systems and Water Resources of Ethiopia and the Horn"
      ],
      [
        "The Climate of Ethiopia and the Horn"
      ],
      [
        "Soils, Natural Vegetation, and Wildlife of Ethiopia and the Horn"
      ],
      [
        "The Population of Ethiopia and the Horn"
      ],
      [
        "Economic Activities in Ethiopia"
      ]
    ],
    "workload": "120 total student learning hours.",
    "books": [
      "Morgan R.P.C (2005). Soil Erosion and Conservation. National Soil Resources Institute, Cornfield University. Blackwell Publishing, Oxford, UK",
      "Assefa M., Melese W., Shimelis G. (2014). Nile River Basin; Eco hydrological Challenges, Climate Change and Hydro politics. Springer International Publishing, Switzerland.",
      "Robert, E.G, James, F.P & L. MichaelT. (2007). Essentials of Physical Geography. Thomson Higher Education, Belmont, 8th edition...",
      "Addis Ababa University (2001). Introductory Geography of Ethiopia, Teaching Text, Department of Geography."
    ]
  },
  "eceg2202": {
    "description": "Introducing feedback amplifier and the analysis of negative feedback amplifiers with various topologies and applications, More analysis of feedback amplifier withdifferential mode response and some other parameters. Introducing integrated circuit with various effective parameters and illustrate with real time applications.Introducing oscillators and different types of oscillator circuit with frequency determination and describe about multivibrator circuits with applications. Power semiconductor devices like SCR, TRIAC, DIAC devices with operation and characteristics. Explain in detail about single and double tuned amplifiers, ideal band pass amplifiers and power amplifiers.",
    "outcomes": [
      "CLO 1 · Discuss about Negative feedback amplifier with different topologies and in detail about the analysis of negative feedback amplifiers.",
      "CLO 2 · Analysis of Differential amplifiers with its applications.",
      "CLO 3 · Illustrate the characteristics of operational amplifiers with real time examples",
      "CLO 4 · Demonstrate the design of oscillator circuits, multivibrator circuits with examples and enforcing the students to design the oscillator circuits with different frequencies.",
      "CLO 5 · Explain the power semiconductor devices and their characteristics, tuned amplifiers with various characteristics, power amplifiers."
    ],
    "units": [
      [
        "Feedback Amplifiers"
      ],
      [
        "Differential Amplifiers"
      ],
      [
        "Operational-Amplifier Characteristics and Applications"
      ],
      [
        "Oscillators and Wave-Shaping Circuits"
      ],
      [
        "Power Semiconductor Devices"
      ],
      [
        "Tuned and Power Amplifiers"
      ]
    ],
    "resources": [
      "lab, simulation",
      "simulation lab",
      "Computer lab"
    ],
    "workload": "Total student learning time: 160 hours.",
    "books": [
      "Jacob Millman– Integrated Electronics , McGraw-Hill series in electrical engineering,1St Edition.",
      "Microelectronic Device and Circuits-2006 Electronic Edition- Clifton G. Fonstad",
      "Electronic devices and circuits, Bell A David"
    ]
  },
  "eceg2204": {
    "description": "This course deals with the analysis of continuous-time and discrete-time signals and systems. Topics include: representations of linear time-invariant systems, representations of signals, Laplace transform, transfer function, impulse response, step response, the convolution integral and its interpretation, Fourier analysis for continuous time signals and systems and an introduction to sampling.",
    "outcomes": [
      "CLO 1 · Recognize, sketch and manipulate basic signals commonly used in engineering applications",
      "CLO 2 · Formulate and solve differential equations describing linear, time invariant (LTI) systems, including both transient and steady-state responses",
      "CLO 3 · Explain mathematical foundations of frequency- domain and time domain analysis techniques Fourier series.",
      "CLO 4 · Fourier transform, applicable to continuous-time signals and systems and evaluate system property and limitation, fundamental problems in sampling",
      "CLO 5 · Determine Laplace transforms with their properties by using the concept of ROC and relate with Laplace transform and elaborate a design state"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Time-Domain Analysis of Continuous-Time Systems"
      ],
      [
        "Fourier Series"
      ],
      [
        "Fourier Transform"
      ],
      [
        "Sampling and Discrete-Time Signals"
      ],
      [
        "The Laplace Transform"
      ]
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Lathi, B. P. Linear Systems and Signals, 2nd Edition, Oxford University Press, 2005",
      "M.J.Roberts, “Signals & Systems Analysis using Transform Methods & MATLA B”, Tata McGrawHill, 2007."
    ]
  },
  "epce2202": {
    "description": "This course is deals with: review of Vectors and vector fields, Electrostatic Fields, Electric Fields in Material Body, Electrostatic Boundary-Value Problems, Magnetostatic Fields, Magnetic Forces & Materials, Forces due to Magnetics and Introduction to Time Varying Electromagnetic Fields",
    "outcomes": [
      "CLO 1 · Apply the basic concept of vector algebra to quantify the electrical effects of static charge distributions in vacuum and material body",
      "CLO 2 · Apply the laws governing electrostatic to different charge distributions",
      "CLO 3 · Quantify and explain the effects of charges moving with uniform velocity",
      "CLO 4 · Apply the laws governing Magnetostatic to different Current carrying conductor geometry",
      "CLO 5 · Discuss elements of electrodynamics and summarize electromagnetism through Maxwell’s equations.",
      "CLO 6 · Discuss how to generate Time Varying electromagnetic fields"
    ],
    "units": [
      [
        "Review of Vectors"
      ],
      [
        "Electrostatic Fields"
      ],
      [
        "Magnetostatic Fields"
      ],
      [
        "Introduction to Time-Varying Electromagnetic Fields"
      ]
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Matthew N. O. Sadiku, Elements of Electromagnetics, Oxford University Press, NewYork, 2001. Reference",
      "Hayt, W.H., Engineering Electromagnetics, 8th ed., McGraw-Hill, 2012.",
      "David J. Griffiths, Introduction to Electrodynamics, 3rd ed., Prentice-Hall, Inc., 1999. Policies",
      "Grading Policy Grading of the course will be according to the university’s rules and regulation. Academic Integrity ASTU values academic integrity. Therefore, all students must understand the meaning and consequences of cheating, plagiarism, and other academic offences under the Code of Student Conduct and Disciplinary Procedures. Referencing style The department of Electrical Power and Control Engineering advises students to use the \"IEEE Referencing Style\" for written work and oral presentations. However, students are permitted to use other recognized styles that appear in the Engineering literature. Other Requirements Students must attend at least 80% lecture and 100% tutorial/Labratory sessions except for some unprecedented mishaps. This course is a basic course for other upcoming courses. Students are expected to attend all classes regularly and study from text books once the topic is discussed in classes. Students are advised to prepare for classes by reading the available materials before coming to classes and participate actively to enhance better understanding of the course and attain the learning outcomes. There have been many reference books proposed for each topic which will be discussed in class. Students are encouraged to read and prepare based on the additional materials. Irrespective of continues assessment result, a student must score a minimum of 40% of the final exam to pass the course. (E.g., if final exam is out of 50 a student must score a minimum of 20 124"
    ]
  },
  "eceg2208": {
    "description": "The course gives an introduction of the various engineering application software that are in use in the field of electronics and communication engineering. The fundamentals of MATLAB programming are illustrated with emphasis on features that are applicable to communication systems problems. Introduction: Matlab desktop environment, variables assignment, operations on variables, relational and numerical expressions, operations on vectors and matrices, data types and casting. Programming with MATLAB: MATLAB scripts, decision and loop statements. Data Structures: cell arrays, structures sorting and indexing. Plotting, File input/output: using plotting functions and customizing tools. Advanced Mathematicswith MATLAB: statistical functions, fitting data to a curve, system of linear equations, calculus with MATLAB. Discrete Time Signal and Systems with MATLAB: discrete time signal, operations on signals, discrete time systems (LTI)",
    "outcomes": [
      "CLO 1 · Identify and familiarize with important engineering application software.",
      "CLO 2 · Discuss the basic features and recall the programming/simulation methodology of engineering application software.",
      "CLO 3 · Interpret engineering problems into forms whose solutions can be found expediently and economically with the help of engineering application software.",
      "CLO 4 · Analyze and interpret the programming/simulation outcomes."
    ],
    "units": [
      [
        "Introduction to MATLAB"
      ],
      [
        "Programming with MATLAB"
      ],
      [
        "Data Structures"
      ],
      [
        "Plotting, File Input, and Output"
      ],
      [
        "Advanced Mathematics with MATLAB"
      ],
      [
        "Discrete-Time Signals and Systems with MATLAB"
      ]
    ],
    "resources": [
      "Computer Lab",
      "MATLAB Software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "A Practical Introduction to Programming and Problem Solving, Stormy Attaway, Boston University, Fourth Edition",
      "MATLAB Recipes, A Problem-Solution Approach, Michael Paluszek and Stephanie Thomas, Apress",
      "Digital Signal Processing Using MATLAB, Vinay K. Ingle and John G. Proakis, BookWare Companion Series",
      "Modeling and Simulation of Systems Using MATLAB and Simulink, Dvendra K. Chaturvedi, CRC Press"
    ]
  },
  "math2103": {
    "description": "The course deals with the following major points: - Number system and numerical error analysis, review of matrices, solution of linear equation, solution of nonlinear equation, approximation and interpolation techniques, and numerical differentiation and integrations.",
    "outcomes": [
      "CLO 1 · Discuss different types of error, Significant figures, and number representation &Storage in Computers",
      "CLO 2 · Discuss basic concepts of matrices",
      "CLO 3 · Develop a program that will solve linear equations using direct, matrix, and iterative solution methods.",
      "CLO 4 · Identify and analyze different numerical methods for the determination of the roots of an equation and solve nonlinear equations.",
      "CLO 5 · Evaluate basic curve fitting using least square regression method and interpolation methods.",
      "CLO 6 · Analyze numerical solutions to solve differentiation, integration and ordinary differential equations."
    ],
    "units": [
      [
        "Number Systems and Numerical Error Analysis"
      ],
      [
        "Review of Matrices"
      ],
      [
        "Solutions of Systems of Linear Equations"
      ],
      [
        "Solutions of Nonlinear Equations"
      ],
      [
        "Interpolation and Approximation"
      ],
      [
        "Numerical Differentiation and Integration"
      ]
    ],
    "resources": [
      "Computer lab",
      "MATLAB simulation software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Chapra C.S. and Canale P.R., “Numerical Methods for Engineers with Programming and Software Application Reference",
      "Recktenwald, Gerald. Numerical Methods with Matlab, Prentice Hall, 2000.",
      "Erwin Kreysizg, Advanced Engineering Mathematics, 9th edition, Wiley,2005",
      "Brown, J. W. & Churchill, R. V, Complex Variables and Applications, 7th edition, 2003",
      "Steven C. Chapra , Computational methods for engineers,5th edition.",
      "Ralston A & P. Rabinowitz: A First Course in Numerical Analysis, 2nd ed, McGraw Hill, 132",
      "Mohammed Abdo, Introduction to Computational Methods.",
      "Jain M.K., S.R.K. Iyenger and R.K. Jain: Numerical Methods for Scientific and Engineering Computation, 2nd ed, Wiley Eastern Ltd., 1985"
    ]
  },
  "math2201": {
    "description": "This course deals with finite dimensional real vector spaces and linear transformations. It is an essential prerequisite for the proper comprehension of many branches of mathematics. Linear Algebra is also the ideal subject to introduce the student to the higher level of abstraction practiced in modern mathematics today.",
    "outcomes": [
      "CLO 1 · Understand and apply basic ideas of Vector Algebra and Matrix Algebra to mathematical and physical problems",
      "CLO 2 · Solve systems of linear equations using Gaussian Elimination method and Cramer’s rule",
      "CLO 3 · Find the row reduced echelon form of a matrix and also able to find eigen -value(s) and eigen-vector of a square matrix.",
      "CLO 4 · Understand the concept of a vector space over a field."
    ],
    "units": [
      [
        "Vectors"
      ],
      [
        "Vector Spaces"
      ],
      [
        "Matrices"
      ],
      [
        "Determinants"
      ],
      [
        "Linear Transformations"
      ],
      [
        "Eigenvalues and Eigenvectors"
      ]
    ],
    "workload": "120 total student learning hours."
  },
  "eceg3201": {
    "description": "In this course, students will study various digital logic families such as TTL, ECL, and CMOS, the logic gates under these families, and the electronic circuit techniques used to implement them. Subsequently, they will learn Boolean algebra, logic expressions, number systems and combinational logic design, including logic minimization and hazards. In addition, with the understanding of combinational logic design, students will learn how to design sequential systems, including analysis of the behavior of synchronization elements and system timing design. Finally, in this course, students will have hands-on design experiences by carrying out experiments with component-level devices and designing digital systems.",
    "outcomes": [
      "CLO 1 · Distinguish the analog and digital systems and apply positional notations, number systems and computer codes in digital systems.",
      "CLO 2 · Understand the concepts of a logic gates to construct various logic circuits",
      "CLO 4 · Design and implement combinational and sequential logic in digital systems",
      "CLO 5 · Design shift registers for various applications in digital systems CL06 Apply the concept of combinational and sequential circuits in memory devices"
    ],
    "units": [
      [
        "Introduction, Number Systems, and Codes"
      ],
      [
        "Digital Logic Gates"
      ],
      [
        "Boolean Algebra and Logic Expression Simplification"
      ],
      [
        "Analysis and Synthesis of Combinational Logic Circuits"
      ],
      [
        "Sequential Logic Circuits"
      ],
      [
        "Shift Registers"
      ],
      [
        "Memory and Programmable Logic"
      ]
    ],
    "workload": "Total student learning time: 166 hours."
  },
  "epce3201": {
    "description": "The course deals with the following major points: - Introduction to Network Analysis and Synthesis, network transform representations and analysis, network functions for one port and two ports, properties of driving point functions and transfer functions, calculation of network functions, poles and zeros, time domain behavior from pole-zero plot, elements of realizability theory, synthesis of one port networks using two kinds of elements, two-port networks and the relationship between transfer functions using two-port parameters and interconnection of two-port parameter, basics of filters, filter approximation, insertion loss synthesis and synthesis of active and passive networks and filters.",
    "outcomes": [
      "CLO 1 · Discuss the fundamental concepts and relevant technique in solving and analyzing different Electrical networks in different conditions",
      "CLO 2 · Apply mathematical knowledge to analyze and synthesize networks in time and frequency domain and estimate the performance of a particular network",
      "CLO 3 · Examine modeling techniques of active and passive electrical networks",
      "CLO 4 · Design one port and two port active and passive networks"
    ],
    "units": [
      [
        "Introduction to Network Analysis and Synthesis"
      ],
      [
        "Network Transform Representation and Analysis"
      ],
      [
        "Elements of Realizability Theory"
      ],
      [
        "Synthesis of One-Port Networks"
      ],
      [
        "Two-Port Networks"
      ],
      [
        "Filter Synthesis"
      ]
    ],
    "resources": [
      "Computer lab",
      "MATLAB simulation software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Circuits and systems, K.M. Soni, M E VanValkenburg, Network Analysis, Prentice Hall India",
      "Network analysis and synthesis, F.F.Kuo",
      "Circuits and networks analysis and synthesis,",
      "A Sudhakar, Shyammohan. Network theory and filter design, V. Aatre"
    ]
  },
  "eceg3103": {
    "description": "Introducing some application area of probability and random processes and revising Set theory, Function, Factorial, Permutation and Combination. Basic concept of Probability Theory: Probability models and axioms, Conditional probability, total probability, Independence and Bayes’ the0rem. Random Variables, Probability Distributions and Densities function, Discrete and Continuous random variables, Gaussian Random Variable and Q-Function, Conditional Distribution and Density Function. Expectations, variances, moments, Expectation of a Function of Random Variable, Characteristic Function, Central Limit Theorem and Transformation of Random Variables. Two and more random variables and their joint distributions and densities. Random processes, Auto and cross correlation Functions, covariance, Stationary Random Processes, Ergodic Random Processes and Power Spectral Density Function. Introduction to parameter estimation and prediction.",
    "outcomes": [
      "CLO 1 · Discuss about fundamental of probability theory & random processes and illustrate these concepts with electrical engineering applications.",
      "CLO 2 · Characterize probability models and function of random variables based on single & multiples random variables.",
      "CLO 3 · Evaluate and apply moments & characteristic functions",
      "CLO 4 · Demonstrate basic principles of random variables and random processes needed in applications",
      "CLO 5 · Explain the concept of random processes and determine covariance and spectral density of stationary random processes."
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Basic Concepts of Probability Theory"
      ],
      [
        "Random Variables"
      ],
      [
        "Expectation"
      ],
      [
        "Random Processes"
      ],
      [
        "Estimation Theory"
      ]
    ],
    "resources": [
      "MATLAB Software",
      "Computer lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Donald G. Childers: probability and random processes using MATLAB with applications to continuous and discrete time systems-Richard D. Irwin(1997)",
      "Miller, Scott L., Childers, Donald: Probability and Random Processes, with application to signal processing & communication, Oct, 2004",
      "Albert Leon-Garcia ,”Probability and Random Processes for Electrical Engineering”, 2/E Publisher: Prentice Hall, 1994",
      "Karalov, Leonid B., Sinai, Yakov G: Theory of probability and random processes Springer, 2nd ed., (2007)",
      "Venkatarama_Krishnan-Probability_and_random_processes-Wiley- Interscience(2006)"
    ]
  },
  "eceg3205": {
    "description": "Introducing the development of analytical representation and design of discrete time signals and systems. Discussing the Analysis of discrete time signals and systems in time domain and transform domains. ADC and DAC, Sampling theorem, Sampling Rate conversion, Aliasing, LTI signals and systems, Discrete time Fourier Transform, Fast Fourier Transform, Z-transform, and analysis and design of digital filters.",
    "outcomes": [
      "CLO 1 · Discuss about fundamentals of signal processing and applications of digital signal Processing.",
      "CLO 2 · Characterize discrete time signals representations in time domain",
      "CLO 3 · Analyze discrete time signals and discrete-time systems in transform domains",
      "CLO 4 · Interpret digital signal processing in time domain and in frequency domains",
      "CLO 5 · Design applications based on digital signal processing: transfer functions and digital filters"
    ],
    "units": [
      [
        "Signals and Signal Processing"
      ],
      [
        "Sampling of Continuous-Time Signals"
      ],
      [
        "Discrete-Time Signals and Systems in the Time Domain"
      ],
      [
        "Discrete-Time Signals in Transform Domains"
      ],
      [
        "LTI Discrete-Time Systems in Transform Domains"
      ],
      [
        "Digital Filter Design"
      ]
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Oppenheim, Schafer: Discrete-Time Signal Processing. Prentice Hall, 3rd edition, August 2009. latest edition",
      "J.G. Proakis, D.G. Manolakis: Digital Signal Processing – Principles,Algorithms and Applications. Prentice Hall, 1996. Newer editions may beavailable /publication) 3 M. Hayes: Schaums Outline of Digital Signal Processing, McGraw-Hill,second edition, September 2011",
      "J. G. Proakis and V. K. Ingle: Digital Signal Processing with MATLAB,Pearson Education, Inc., Upper Saddle River, NJ, 2007."
    ]
  },
  "lart2002": {
    "description": "Psychology is a science of human cognitive processes and behaviors. This course is designed to give students an overview of what psychological science has discovered about human behavior and mental processes throughout human history. Students will gain an understanding of the psychological phenomena that occur in daily life as well as the practical applications of psychological knowledge. Upon completing the course, students shall be able to demonstrate a basic knowledge of the science of psychology. Specifically, the course general psychology is concerned with discussing perspectives in psychology and basic psychological concepts such as sensation and perception, learning, personality, motivation, emotion, and basic life skills (intrapersonal, interpersonal, social and academic skills). Emphasis will be given to both theoretical and practical implications of these concepts to effectively function as individual and team in a community.",
    "outcomes": [
      "CLO 1 · Describe basic psychological concepts",
      "CLO 2 · Compare and contrast the major theoretical perspectives in psychology",
      "CLO 3 · Examine major concepts in psychology: personality; sensation and perception; learning, memory and forgetting.",
      "CLO 4 · Summarize motivational and emotional processes.",
      "CLO 5 · Demonstrate basic life skills (intrapersonal, interpersonal, social and academic skills) in everyday life.",
      "CLO 6 · Apply knowledge of psychology in their life."
    ],
    "units": [
      [
        "Essence of Psychology"
      ],
      [
        "Sensation and Perception"
      ],
      [
        "Learning and Theories of Learning"
      ],
      [
        "Memory and Forgetting"
      ],
      [
        "Motivation and Emotions"
      ],
      [
        "Personality"
      ],
      [
        "Life Skills"
      ]
    ],
    "resources": [
      "Well-furnished classroom",
      "Laptop",
      "Whiteboard",
      "Whiteboard marker"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "G l e i t m a n, H., G r o s s, J . and R e i s b e r g, D. (2011). Psychology.( 8th ed.). New York: W • W • NORTON & COMPANY",
      "Kearns, T. and Lee, D. (2016).General Psychology: An Introduction. IL: DEF Publishers. DOI: nobaproject.com",
      "Guthrie, R. V. (2003). Even the rat was white: A historical view of psychology 154 (2nd ed.). Boston: Allyn & Bacon.",
      "Halpern, D. F. (2002). Thought and knowledge: An introduction to critical thinking (4th ed.) Hillsdale, NJ: Erlbaum.",
      "Hock, R. R. (2002). Forty studies that changed psychology: Explorations into the history of psychological research. Upper Saddle River, NJ: Prentice Hall."
    ]
  },
  "phys2208": {
    "description": "The rationale of this course is to introduce students to the basic ideas of modern physics with emphasis on the Theory of Special Relativity, identification of the limitations of classical mechanics and the development of quantum mechanics, the wave particle duality, the atomic structure and nuclear transformation",
    "outcomes": [
      "CLO 1 · Apply the basic principles of the Special Theory of Relativity and its mathematical methods to show some effect of theory of relativity in modern Physics such as Doppler Effect, time dilation, length contraction, relativity of mass and energy",
      "CLO 2 · Compare and contrast the Galilean and Lorenz transformations by formulating equations.",
      "CLO 3 · Analyze the limitation of classical mechanics that leads to the development of quantum mechanics.",
      "CLO 4 · Differentiate particle properties of wave and wave properties of particles by using different physical phenomena such as Photoelectric Effect, Compton Effect/Scattering, X-ray diffraction, Black Body Radiation, Particle Diffraction etc…",
      "CLO 5 · Analyze atomic structure and atomic spectra using different model such as Thomson, Rutherford, and Bohr Atomic Models",
      "CLO 6 · Understand the principal aspects of radio activity"
    ],
    "units": [
      [
        "Special Theory of Relativity"
      ],
      [
        "Development of Quantum Mechanics"
      ],
      [
        "Particle Properties of Waves"
      ],
      [
        "Wave Properties of Particles"
      ],
      [
        "Atomic Structure"
      ],
      [
        "Nuclear Transformation"
      ]
    ],
    "resources": [
      "LCD Projector and white board"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Arthur Beiser, Concepts of Modern Physics, 6th ed., (2002).",
      "Raymond A. Serway, Physics: For Scientists & Engineers, 6th ed., Thomson Bruke, (2004).",
      "Hugh D. Young and Roger A. Freedmann, University Physics with Modern 159 latest edition Physics 12th ed., (2008).",
      "Douglas C. Giancoli, Physics for scientists and engineers, Printice Hall, 4th (2005).",
      "Robert Resnick and David Halliday, Fundamentals of Physics Extended, HRW 8th ed., (2008)."
    ]
  },
  "eceg3202": {
    "description": "This course introduces about basic of an analog communication system, analysis of AM and angle modulation signals in time and frequency domain, modulation and demodulation technique of linear AM, DSB, SSB, VSB signal and nonlinearmodulation techniques such as PM and FM, various types of noises and its mathematical representation, Effect of noise on AM and FM receiver and comparative performance of between AM and FM system.",
    "outcomes": [
      "CLO 1 · Apply the basic concept of signals as well as modulation in communication systems.",
      "CLO 2 · Analyze and compare different AM modulation schemes for their efficiency andBandwidth.",
      "CLO 3 · Analyze angle modulation schemes and design Rx as well as Tx for communicationsystems.",
      "CLO 4 · Understand the characteristics and mathematical representation of noise",
      "CLO 5 · Analyze the behavior of various types of AM receivers in the presence of noise.",
      "CLO 6 · Analyze the behavior of FM receiver and P&DE in the presence of noise."
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Amplitude Modulation"
      ],
      [
        "Angle Modulation"
      ],
      [
        "Noise"
      ],
      [
        "Noise in Amplitude-Modulation Systems"
      ],
      [
        "Noise in Frequency-Modulation Systems"
      ]
    ],
    "resources": [
      "deliverthe course",
      "MATLAB Software",
      "Computer lab",
      "LabVIEW Software"
    ],
    "workload": "Total student learning time: 160 hours."
  },
  "phys3202": {
    "description": "This course is intended to introduce students to the basic ideas that underlie solid state physics, with emphasis on the behavior of electrons in crystalline structures, particularly in materials that are metallic. The other contents are X-ray diffraction, Binding Energy in Crystals, Thermal properties of solids, Dielectric properties of solid, Magnetic properties of solids, The free electron Fermi gas.",
    "outcomes": [
      "CLO 1 · describe crystal structure of solids in terms of a space lattice + unit cell, and relate structures in real space to those in reciprocal space",
      "CLO 2 · elaborate how the diffraction of X rays are related to the properties of the reciprocal lattice, explain the concepts of the reciprocal lattice and the Brillouin zone",
      "CLO 3 · describe the various atomic bonds, properties of metallic crystals and cohesive energy.",
      "CLO 4 · apply knowledge of how crystalline structures vibrate and the associated theories of heat capacity",
      "CLO 5 · be familiar with and understand the magnetic and dielectric properties of solids for practical applications",
      "CLO 6 · discuss about the free electron’s gas, electrical, thermal and optical properties in terms of the free electron model"
    ],
    "units": [
      [
        "Crystal Physics"
      ],
      [
        "X-Ray Diffraction"
      ],
      [
        "Binding Energy in Crystals"
      ],
      [
        "Thermal Properties of Solids"
      ],
      [
        "Dielectric Properties of Solids"
      ],
      [
        "Magnetic Properties of Solids"
      ],
      [
        "The Free-Electron Fermi Gas"
      ]
    ],
    "resources": [
      "Power Point Projector"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Introduction to Solid State Physics by Charles Kittel, Wiley and Sons, 8th Edition. (Text Book)",
      "Solid State Physics by S.O. Pillai (Reference Book) 168 latest edition /publication) 3 Elements of Solid-State Physics by J.P. Srivastava (Reference Book)"
    ]
  },
  "lart1003": {
    "description": "This course describes why history is important, how history is studied and introduces the region Ethiopia and the Horn. It treats human evolution, Neolithic Revolution, settlement patterns as well as religion and religious processes in Ethiopia and the Horn. Based on these historical backgrounds, the course describes states, external contacts, economic formations and achievement in terms of architecture, writing, calendar, and others to the end of the 13th century. Historical processes including states formation and power rivalry, trade, external relation, threats and major battles, centralization and modernization attempts, Italian occupation, and socio-economic conditions from 1800 to 1941 makes central position in the modern history of the region.",
    "outcomes": [
      "CLO 1 · Identify the nature of history and criticize sources",
      "CLO 2 · Identify pertinent sources for the history of the peoples of Ethiopia and the Horn",
      "CLO 3 · Describe changes and continuities in Ethiopia and the Horn .",
      "CLO 4 · Discuss the causes, courses and consequences of events that happened in the region",
      "CLO 5 · Explain the nature of the region’s external contacts and their effects",
      "CLO 6 · Appreciate peoples‟ achievements, heritages and cultural diversities of the region"
    ],
    "units": [
      [
        "Peoples and Cultures in Ethiopia and the Horn"
      ],
      [
        "Polities, Economy, and Socio-Cultural Processes to the End of the 13th Century"
      ],
      [
        "Politics, Economy, and Socio-Cultural Processes from the Late 13th to the Early 16th Century"
      ],
      [
        "Politics, Economy, and Socio-Cultural Processes from the Early 16th to the End of the 18th Century"
      ],
      [
        "Internal Interactions and External Relations, 1800–1941"
      ],
      [
        "Internal Developments and External Relations, 1941–1994"
      ]
    ],
    "resources": [
      "deliver the"
    ],
    "workload": "120 total student learning hours."
  },
  "eceg3306": {
    "description": "In this course, in first two chapters the topics to be covered include review of Semiconductor devices, analysis of BJT as an amplifier and switch , Small signal model of BJT, MOSFET operation and MOS spice model. Further in chapter III the basics of CMOS, CMOS invertor, Implementation of circuits using CMOS invertor and CMOS based amplifiers and differential pair have to be discussed. the operational amplifier and advanced filters including Butterworth filter have to be discussed in chapter 4. The last chapter includes the topic of ADC and DAC and their performance matrices",
    "outcomes": [
      "CLO 1 · Explain the basic concepts realization of microelectronic devices and circuits;",
      "CLO 2 · Explain the analysis of BJT and MOS in context with microelectronics devices to circuits",
      "CLO 3 · Implementation of Digital and analog circuits using CMOS based circuits",
      "CLO 4 · Analyze and design op-amp based circuits and advanced filters",
      "CLO 5 · Learn and design the analog to digital convertor and vice versa."
    ],
    "units": [
      [
        "Introduction to Microelectronics"
      ],
      [
        "Transistor Analysis"
      ],
      [
        "CMOS Circuits"
      ],
      [
        "Operational Amplifiers and Filters"
      ],
      [
        "Analog-to-Digital and Digital-to-Analog Converters"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg3318": {
    "description": "In this course, students will study Optical properties of semiconductors, Optoelectronic material, Radiometry and Photometry, various Optics Lenses and Ray Tracing and Imaging. Comprehend wide range of optical diodes operation principles, structures, and their characteristics. Design conversant applications using lasers mechanisms, Types of Lasers, Modes of Operation.",
    "outcomes": [
      "CLO 1 · Investigate and analyse mathematical optical properties of semiconductors and familiar with optoelectronic materials.",
      "CLO 2 · Examine the approaches of various Optical mirrors and lenses",
      "CLO 3 · Evaluate mathematical operations, structure and applications of various optical LEDs.",
      "CLO 4 · Evaluate mathematical operations, structure, working principle and applications of various Optical LASERs",
      "CLO 5 · Design the applications of optical properties and processes in semiconductor optical detectors",
      "CLO 6 · Design and Development conversant applications of semiconductor optical sources using various modulator mechanisms"
    ],
    "units": [
      [
        "Optical Properties of Semiconductors"
      ],
      [
        "Optics"
      ],
      [
        "Optical Sources: Light-Emitting Diodes"
      ],
      [
        "Semiconductor Applications"
      ],
      [
        "Optoelectronic Detectors"
      ],
      [
        "Modulators"
      ]
    ],
    "resources": [
      "Opto Lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Optoelectronics and Photonics Principles and Practices, S.O.KASAP",
      "Semiconductor Devices for High-Speed Optoelectronics, GIOVANNI GHIONE",
      "Frederick F. Driscoll; Robert F. Coughlin. Solid State devices and Fundamentals of Optoelectronics, CLIFFORD R. POLLOCK, Cornell University.",
      "Semiconductor Optoelectronics Physics and Technology, Jasprit Singh, McGraw- Hill,Inc.",
      "S. Wang, Fundamentals of Semiconductor Theory & Device Physics, Prentice Hall, 1989"
    ]
  },
  "cseg2202": {
    "description": "In this course, students will explore the principles of object-oriented programming (OOP) and develop problem-solving skills using an object-oriented programming language. The course begins with a comparison of the structured programming paradigm and the object-oriented paradigm, including a brief review of control structures and data types, with a particular emphasis on structured data types and array processing. Subsequently, the course introduces the object-oriented programming paradigm, focusing on the definition and utilization of classes and objects. Key topics include inheritance, packages and interfaces, exception handling, file input/output (I/O), graphical user interfaces (GUI), and multithreading. 4 Academi c Staff:",
    "outcomes": [
      "CLO 1 · Describe the importance of object-oriented programming (OOP) and differentiate it from structured programming, highlighting its advantages and applications.",
      "CLO 2 · Explain key object-oriented programming concepts, including data abstraction, encapsulation, information hiding, inheritance, and polymorphism, with relevant examples.",
      "CLO 3 · Apply object-oriented programming principles to develop solutions for real-world problems using Java. Learning Outcomes (CLOs) SO-1 SO-2 SO-3 SO-4 SO-5",
      "CLO 5 · Design and implement Java applications to manipulate files effectively, ensuring proper exception handling techniques are utilized. Create GUI-based Java applications to address real-world problems, incorporating user interface design and functionality."
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Objects and Classes"
      ],
      [
        "Inheritance"
      ],
      [
        "Packages and Interfaces"
      ],
      [
        "Exception Handling"
      ],
      [
        "File Input and Output"
      ],
      [
        "GUI Programming"
      ],
      [
        "Multithreading"
      ]
    ],
    "workload": "122 total student learning hours."
  },
  "seng4208": {
    "description": "This course is an introductory course on Artificial Intelligence (AI) that presents an overview of AI principles and approaches. It will introduce the basic principles in artificial intelligence research, simple representation schemes, problem solving paradigms, constraint propagation, and search strategies. Areas of application such as knowledge representation, programing in logic, inference and reasoning mechanism, natural language processing, expert systems, vision and robotics will be explored. The PROLOG and others AI programming language will also be introduced.",
    "outcomes": [
      "CLO 1 · Discuss the basic principles of AI and different types of AI agents.",
      "CLO 2 · Identify various AI search algorithms.",
      "CLO 3 · Apply knowledge representation, reasoning, and machine learning techniques to real-world problems.",
      "CLO 4 · Demonstrate working knowledge of reasoning in the presence of incomplete and/or uncertain information.",
      "CLO 5 · Develop a simple knowledge-based system."
    ],
    "units": [
      [
        "Introduction to Artificial Intelligence"
      ],
      [
        "Intelligent Agents"
      ],
      [
        "Problem Solving"
      ],
      [
        "Knowledge and Reasoning"
      ],
      [
        "Uncertain Knowledge and Reasoning"
      ],
      [
        "Learning"
      ],
      [
        "Communicating, Perceiving, and Acting"
      ]
    ],
    "workload": "120 total student learning hours."
  },
  "epce3304": {
    "description": "The course deals with the following major points: - introduction to control system, control system modelling of physical system, time domain analysis of control systems, Root locus analysis, frequency domain analysis and classical controller design techniques.",
    "outcomes": [
      "CLO 1 · Discuss basic concepts of control system and identify different components of control system",
      "CLO 2 · Apply the knowledge of mathematics for modeling of control systems and formulate the electrical, mechanical, hydraulic and other system",
      "CLO 3 · Compute the time domain analysis, root locus, frequency domain analysis and determine the stability analysis of control system",
      "CLO 4 · Analyze the performance of uncontrolled system by determining system parameter (transient and steady-state parameters)",
      "CLO 5 · Design compensators and classical controller by using different techniques",
      "CLO 6 · Analyze the performance of controller"
    ],
    "units": [
      [
        "Introduction to Control Systems"
      ],
      [
        "Mathematical Modeling of Physical Systems"
      ],
      [
        "Time-Domain Analysis of Control Systems"
      ],
      [
        "Root-Locus Method"
      ],
      [
        "Frequency-Domain Analysis"
      ],
      [
        "Controller Design Techniques"
      ]
    ]
  },
  "epce3302": {
    "description": "The course deals with the following major points: - Electromagnetic principles; Transformers; 3-Phase Induction motors; D.C Machines.",
    "outcomes": [
      "CLO 1 · Discuss the fundamental concepts and relevant technique in solving and analyzing different Electrical networks in different conditions",
      "CLO 2 · Apply mathematical knowledge to analyze and synthesize networks in time and frequency domain and estimate the performance of a particular network",
      "CLO 3 · Examine modeling techniques of active and passive electrical networks",
      "CLO 4 · Design one port and two port active and passive networks"
    ],
    "units": [
      [
        "Electromagnetic Principles"
      ],
      [
        "Transformers"
      ],
      [
        "Three-Phase Induction Machines"
      ],
      [
        "DC Machines"
      ]
    ],
    "resources": [
      "Electrical Machine lab room, lab equipment &",
      "required measuring instruments and devices,",
      "Lab Manuals"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "John Hindmarsh, Electrical Machines and their Application, 4th edition.",
      "U.A. Bakshi, M.V. Bakshi, Electrical Machines, 4th edition, 2018, Technical",
      "Dr.P.S. BIMBHRA-Electrical Machinery theory, Performance and applications, 6th edition.",
      "J.B. Gupta, Theory and Performance of Electrical Machines, 15th edition",
      "Stephen J. Champman, electrical machinery Fundamentals 2nd Education Mc, Graw Hill.",
      "Ryff Peter F. Electrical Machines and Transformers Principles and Applications.",
      "Girma Mullisa, Electrical Machines, Electrical Engineering Department, AAU, 1992",
      "Kosow: Electric Machinery and Control, Prentice-Hall.",
      "Siskind: Electrical Machines, McGraw-Hill."
    ]
  },
  "eceg3200": {
    "description": "Encourage students to apply theoretical knowledge gained throughout their academic studies in industrial environments. Acquire practical industry experience and insight into real world engineering challenges. Develop student’s professional competencies, problem solving skills, project management abilities, and teamwork experience. Prepare students for their transition into the workforce by enhancing their communication and technical reporting skills. Foster innovation by engaging students in industry based project design, where they identify, analyze, and solve engineering problems. Strengthen the cooperation among universities and industries.",
    "outcomes": [
      "CLO 1 · Gain a comprehensive understanding of the host company’s profile, including its history, mission, organizational structure, and technological structure.",
      "CLO 2 · Observe and describe the technical structures & operational workflows within the host company including tools, technologies, and software used in technical processes.",
      "CLO 3 · Participate in the planning, design, development, operation and evaluation phase’s system using industry standard tools and methodologies.",
      "CLO 4 · Identify technical challenges, proposing solutions, and implementing effective problem solving strategies to optimize system performance.",
      "CLO 5 · Write a comprehensive final report about the internship experience, technical tasks performed, problems identified and solved, and overall contributions to the host company."
    ],
    "units": [
      [
        "Introduction to Industrial Internship"
      ],
      [
        "Host Company Analysis"
      ],
      [
        "Internship Experience and Activities"
      ],
      [
        "Problem Identification and Proposal Development"
      ],
      [
        "Comprehensive Reporting and Reflective Analysis"
      ]
    ],
    "resources": [
      "Different practical implementation lab",
      "Manuals"
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg4201": {
    "description": "This course focus on: Computer Arithmetic; The Central Processing Unit: Architecture and Instruction Set; Instruction Format and Addressing Modes; Register Transfer Descriptions; Organization of the Arithmetic and Logic Unit; The Control Unit Realization: Hardwired and Micro programmable; The Memory Hierarchy and Memory Management; Input-Output Devices; Software of a Computer System; Design of a Small Computer System Testing",
    "outcomes": [
      "CLO 1 · Illustrate various elementary concepts of computer architecture including, syntax of register transfer language, micro operations, instruction cycle, and control unit.",
      "CLO 2 · Describe the design of basic computer with instruction formats & addressing modes",
      "CLO 3 · Explore various input output, memory management techniques and algorithms for performing addition, subtraction, and division etc",
      "CLO 4 · Interpret the concepts of pipelining, multiprocessors, and inter processor communication"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Computer Arithmetic"
      ],
      [
        "Central Processing Unit"
      ],
      [
        "Memory Systems"
      ],
      [
        "Input and Output Systems"
      ],
      [
        "Advanced Concepts"
      ]
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "William Stallings: Computer Organization and Architecture",
      "M.M.Mano: Computer System Architecture",
      "Barry Wilkinson: Computer Architecture Design and Performance",
      "David A Patterson and JohnL.Hennessy: Computer Architecture A Quantita tive Approach",
      "David A Patterson and JohnL.Hennessy: Computer Organization and Design Hardware/Software Interface"
    ]
  },
  "eceg4203": {
    "description": "Comprehensive introduction to digital communication principles. The major part of the course is devoted to studying how to translate information into a digital signal to be transmitted, and how to retrieve the information back from the received signal in the presence of noise and inter-symbol interference (ISI). Various digital modulation schemes are discussed through the concept of signal space. Analytical and simulation models for digital modulation systems are designed and implemented in the presence of noise and ISI. Optimal receiver models for digital baseband and band-pass modulation schemes are covered in detail. Baseband transmission and Optimal Reception of Digital Signal will be also covered. This course will also give knowledge on information theory and coding.",
    "outcomes": [
      "CLO 1 · Apply the concept of random variable and power spectral density to analyze the characteristics of information.",
      "CLO 2 · Investigate pulsed modulation system using sampling and quantization methods and analyze their system performance.",
      "CLO 3 · Analyze various multiplexing techniques.",
      "CLO 4 · Analyze different digital modulation schemes and compute the bit error performance.",
      "CLO 5 · Design and implement the matched filters or optimal receiver to enhance the performance of communication system in presence of noise.",
      "CLO 6 · Apply the concept of information theory in source coding and channel coding to enhance the performance of digital transmission."
    ],
    "units": [
      [
        "Review of Random Variables and Stochastic Processes"
      ],
      [
        "Baseband Pulse Signaling"
      ],
      [
        "Digital Multiplexers"
      ],
      [
        "Digital Modulation Techniques"
      ],
      [
        "Baseband Transmission and Optimal Reception of Digital Signals"
      ],
      [
        "Information Theory and Channel Coding"
      ]
    ],
    "resources": [
      "MATLAB Software",
      "Computer lab",
      "LabVIEW Software",
      "Communication Lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Digital Communications - John G. Proakis . Masoud salehi, 5th Edition, McGraw- Hill, 2008.",
      "Analog and Digital Communication Systems-Dr. Sanjay Sharma,6th Edition, Delhi 2012",
      "Communication Systems 4th Edition Simon Haykins",
      "Digital and Analog Communication Systems - Sam Shanmugam, John Wiley, 2005."
    ]
  },
  "eceg4205": {
    "description": "Review of Vectors and Maxwell's Equations: Scalar & Vector Fields; Line, Surface, & Volume Integrals; Gradient of a Scalar field, Divergence & Curl of a Vector Field, the Divergence &Stokes's Theorems, Laplacian of a Scalar Field; Solenoid &Irrotational Vector Fields, Helmholtz’s Theorem; Field Quantities; Maxwell's Equations; Boundary Conditions; Time-Harmonic Fields. Position’s Equations and Laplace’s Equations, Electromagnetic Wave Propagation: Waves in General; Wave Propagation in Lossy Dielectrics; Plane Waves in Free Space; Plane Waves in Lossless Dielectrics; Plane Waves in Good Conductors; Power and Poynting Vector, Poynting Theorem; perpendicular Polarization parallel polarization standing waves Refection of Plane Wave at Normal and Oblique Incidence; Summary of TEM Waves, Transmission Lines: Electrical Dimension, Circuit and Field Analysis; Transmission Line Equations; Input Impedance, SWR, and Power; The Smith Chart; Some Application of Transmission Lines. Transients in loss less lines Waveguides: Rectangular Waveguides; TM Modes; in two dimensional planar TE Modes; Power Transmission and wave guide, coupling matching and Attenuation; Waveguide Resonators. Powers transmitted in a lossless wave guide. Power dissipation in a lossy wave guide.",
    "outcomes": [
      "CLO 1 · Define and recognize different co-ordinate systems to describe the spatial variations of the physical quantities dealt in electromagnetic field theory as they are functions of space and time. Apply different techniques of vector calculus to understand different concepts of EM field theory.",
      "CLO 2 · Characterize dynamic EM fields & waves and derive the Maxwell’s Equations to analyze & solve wave propagation problems with simple boundary conditions & interpret the results.",
      "CLO 3 · Analyze wave propagation in lossless and lossy media and calculate parameters such as attenuation and propagation constants, phase velocity, power density, etc.",
      "CLO 4 · Describe the polarization of an electromagnetic wave and derive Poynting's theorem for power conservation in electromagnetic systems.",
      "CLO 5 · Discuss the concept of transmission line and describe the mechanism for wave propagation and reflection along a transmission line.",
      "CLO 6 · Solve practical transmission line parameter and impedance matching through analytical and graphical tools such as Smith chart.",
      "CLO 7 · Analyze waveguides structures & propagating modes in rectangular waveguides and resonators."
    ],
    "units": [
      [
        "Mathematical Review"
      ],
      [
        "Maxwell’s Equations"
      ],
      [
        "Electromagnetic-Wave Propagation"
      ],
      [
        "Transmission Lines"
      ],
      [
        "Waveguides"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "sosc5003": {
    "description": "This interdisciplinary course in general is designed to introduce students to the concept of sustainable entrepreneurship, a manageable process that can be applied across careers and work settings. It focuses on building entrepreneurial attitudes and behaviors that will lead to creative solution within community and organizational environments. This course is designed to prepare individuals for ownership of their own innovative business, and assist start-ups to function more effectively, increase the chances of new business success, enhance profitability, and increase employment. More specifically, the course provides students with an introduction to the concepts and skills necessary to successfully commercialize new products and services. Entrepreneurship is not just about starting a business. It is also about identifying good opportunities and then creating, communicating, and capturing value from those opportunities; including innovation in a corporate context. It will also teach students the skills to analyze business opportunities, and articulate them as a compelling business description, and pitch to an audience of investors, customers, or business partners. It focuses on building entrepreneurial attitudes and behaviors that will lead to creative solution within community and organizational environments.",
    "outcomes": [
      "CLO 1 · Analyze the concept of entrepreneurship and develop a mindset that would consider entrepreneurship as a possible future career choice.",
      "CLO 2 · Apply the concept of start-up ideas development and feasibility analysis in crafting viable business model that underpins entrepreneurial venture establishment.",
      "CLO 3 · Explain the basic aspects of innovation and its significance role in opportunities recognition and prototype development.",
      "CLO 4 · Explain and analyze start-up precautionary aspects that would further contribute towards creating and growing an entrepreneurial venture.",
      "CLO 5 · Apply the concept of elevator pitch to communicate the value the new venture provides to customers, investors and other stakeholders."
    ],
    "units": [
      [
        "Entrepreneurship: An Overview"
      ],
      [
        "Business Idea Generation and Selection"
      ],
      [
        "Innovation and Pre-Start-Up"
      ],
      [
        "Start-Up Considerations"
      ]
    ],
    "resources": [
      "Opto Lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Bruce R. Barringer and Duane R. Ireland (2016), Entrepreneurship: Successfully launching new ventures, 5th edition; Pearson education.",
      "Longenecker, et al (2017): Small Business Management: Launching and Growing Entrepreneurial Venture, 18th edition, Cengage Learning.",
      "Hailay Gebretinsae, Entrepreneurship and Small Business Management, 2nd Edition.",
      "Stocks david and Willson Nick (2006), small business management and Entrepreneurship, 6th ed",
      "Coulter, May (2003), Entrepreneurship in action, 2nd ed., Prentice Hall of India, 215 New Delhi.",
      "Brychan Thomas, et al (2014): Innovation and Small Business, Volume 1, 1st edition.",
      "Brychan Thomas, et al (2014): Innovation and Small Business, Volume 2, 1st edition."
    ]
  },
  "eceg4206": {
    "description": "This course introduces different types of Research methods: necessity, types and levels of researches; problem formulation, modeling & experimentation; data collection/generation and processing; Presentation skills: research and project proposals; oral presentations formats; applications of audiovisual equipment; Management aspect of Research and Development (R&D) works and outputs: discussion forums; intellectual property rights; Management of R&D works.",
    "outcomes": [
      "CLO 1 · Apply current knowledge of quantitative and qualitative methods.",
      "CLO 2 · Identify reference and critically review current engineering developments.",
      "CLO 3 · Identify and formulate research problem; design and conduct experiments, devise appropriate measurements, analyze and interpret data and form reliable conclusions.",
      "CLO 4 · Communicate effectively in oral, written and graphical forms.",
      "CLO 5 · Work effectively: demonstrating ethical conduct, adaptability and responsibility."
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Literature Review and Technical Reading"
      ],
      [
        "Defining the Research Problem"
      ],
      [
        "Research Design"
      ],
      [
        "Methods of Data Collection"
      ],
      [
        "Processing and Analysis of Data"
      ],
      [
        "Testing of Hypotheses"
      ],
      [
        "Management Aspects of Research and Development"
      ]
    ],
    "resources": [
      "lab, simulation",
      "Presentation Software",
      "Writing Tools"
    ],
    "workload": "Total student learning time: 80 hours.",
    "books": [
      "C.R Kothari, “Research Methodology methods and Techniques”, 2 edition Publisher: New Age, 2004",
      "Kenneth S. Bordens and Bruce B. Abbott, “Research Design and Methods AProcess Approach”"
    ]
  },
  "epce3206": {
    "description": "The course deals with the following major points: - Introduces Fundamentals of power systems, Representation of power system components, Electrical design of transmission line, Mechanical design of transmission lines, Characteristic and performance of power transmission lines, Corona, Overhead line insulators, Underground cables.",
    "outcomes": [
      "CLO 1 · Discuss fundamentals of power systems and modeling its components for power transmission.",
      "CLO 2 · Analyze power transmission systems representations and calculation of transmission line parameters.",
      "CLO 3 · Apply Electrical and mechanical design considerations to installation of overhead transmission lines.",
      "CLO 4 · Discuss performance analysis of transmission lines, cable and overhead line insulators."
    ],
    "units": [
      [
        "Fundamentals of Power Systems"
      ],
      [
        "Representation of Power-System Components"
      ],
      [
        "Electrical Design of Overhead Lines"
      ],
      [
        "Mechanical Design of Overhead Lines"
      ],
      [
        "Performance of Transmission Lines"
      ]
    ],
    "resources": [
      "Computer Lab",
      "Laboratory"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "D. Das Electrical Power Systems, New Age International (P) Ltd Publishers, 2006. Reference",
      "V.K Mehta, Rohit Mehta, Principles Of Power System, S. Chad &company pvt.ltd ,Revised Edition ,2015",
      "C. L. Wadhwa, Electrical Power Systems, New Age International Publishers, 2004",
      "Syed Nasar, Electrical Power Systems (Schaum‟s Outline Series), McGraw-hill Publishing Company,",
      "W. D. Stevenson, J.J. Grainger, Power System Analysis McGraw-Hill, New Delhi, 1994.",
      "Dr. George G. Karady, Dr. Keith E. Holbert, Electrical Energy Conversion and Transport: An Interactive Computer-Based Approach, Wiley-IEEE Press, 2005.",
      "J. D. Glover and M. S. Sarma, Power System Analysis and Design, Brooks/Cole, Third Edition."
    ]
  },
  "epce3207": {
    "description": "The course deals with the following major points: - basic concepts of Electrical measurement and instrumentation, instrumentation type and performance characteristics (static and dynamic), basic concepts of sensors and their application, calibration of measuring sensors and instruments, general principles of signal conditioning and conversion, signal processing elements, output presentation element and design some simple Measurement systems using different sensors, actuators and semiconductors.",
    "outcomes": [
      "CLO 1 · Discuss basic concept, type and component of Electrical Instrumentation and Measurement (like how to use the measuring Instrument and measure various physical quantities with accuracy, precision, resolution in the real system)",
      "CLO 2 · Discuss different elements of Measurement system (Input elements (sensor), signal conditioning elements, signal processing elements & output presenting elements)",
      "CLO 3 · Compute about signal conditioning and conversion systems to various instrumentation and measuring systems",
      "CLO 4 · Analyze about various signal processing methods of instrumentation and measuring system",
      "CLO 5 · Analyze and design the output presentation elements of instrumentation and measuring system",
      "CLO 6 · Design some simple instrumentation and measuring system (electrical meters, bridges, oscillators, amplifiers etc)"
    ],
    "units": [
      [
        "Principles of Measurement"
      ],
      [
        "Sensors and Transducer Technology"
      ],
      [
        "Signal-Conditioning, Conversion, and Interfacing Elements"
      ],
      [
        "Signal Processing"
      ],
      [
        "Output Representation"
      ],
      [
        "Design of Meters"
      ]
    ],
    "resources": [
      "Instrumentation Lab",
      "MATLAB Software",
      "Computer Lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Prithwiraj Purkait, Electrical and Electronics Measurements and Instrumentation Reference",
      "John P. Bentley, principles of measurement system, third edition",
      "Robert B. Northrop, Introduction to instrumentation and measurements, 3rd edition",
      "Alan S. Morris and Reza Langari, Measurement and Instrumentation, theory and practice",
      "William C. Dunn, Introduction to instrumentation, sensors, and process control"
    ]
  },
  "eceg4202": {
    "description": "The Microprocessor and interfacing course intends in getting the concepts to the mastering of basic microprocessors and microcomputers. The discussion of the course will be based around the 8086 Intel microprocessor and selected advanced microprocessors and microcontrollers. However, this is not stiff and could be subjected to change. The fact that the 8086 is the considered basic processor architecture, make the discussion be based on the microprocessors. The discussion of the course will begin by introducing the microcontroller evolution in their historical background. The course will describe and explain the detailed architecture of the processor. Bus, memory, IO, and registers will be highly focused. The assembly language code will be studied, and different programs will be attempted. The most important discussion will be the interfacing of different types of devices and ICs to the microprocessor. This will help students in equipping them With appropriate knowledge in helping them to develop solutions to real world problems. Interfacing of interrupts, IO modules and other important concepts will be examined.",
    "outcomes": [
      "CLO 1 · Discuss about microcomputers and internal architecture of a microprocessor",
      "CLO 2 · Develop efficient codes in both assembly and high-level languages and analyze interrupts",
      "CLO 3 · Understand the assembly language programming and the instruction set",
      "CLO 4 · Analyze different types of interfacing devices",
      "CLO 5 · Design controllers and computers using advanced microprocessor"
    ],
    "units": [
      [
        "Introduction to Microcomputers"
      ],
      [
        "8086 Microprocessor Architecture"
      ],
      [
        "Programming the 8086"
      ],
      [
        "Interfacing with the 8086"
      ],
      [
        "Advanced Microprocessors and Microcontrollers"
      ]
    ],
    "workload": "Total student learning time: 160 hours."
  },
  "eceg4204": {
    "description": "This course initially describes the Radiation Integrals and Auxiliary Potential Functions. This leads to the development of various types of antennas and their applications in various types of communication systems. Then a detailed characteristic aspect of antennas is described as Antenna Parameters: Radiation Resistance, Radiation Pattern, Radiation Intensity, Directive Gain and Directivity, Power Gain. Later on, this course gives a detailed classification of various types of antennas in different frequency bands as; Wire Antennas: Antenna Types; Hertzian Dipole; Half-Wave Dipole Antenna; Quarter-Wave Monopole Antenna; Small Loop Antenna. Aperture Antennas, Frequency Independent Antennas, Broadband Antennas and Planar Antennas, Antenna Arrays: Two Element Array; N- Element Linear Array; Broadside Array; Ordinary End-Fire Array; Phased (Scanning) Array; Hansen-Woodard End-Fire Array. This course also describes about the smart antennas required for the future generation wireless mobile communication systems where the signal processing techniques are combined along with array antennas: Beam Shaping Techniques Multi-beam antennas, active antennas, efficient adaptive array control algorithms. This course finally describes about the various problems associated with signal propagating through the wireless channels (both fixed and mobile) as; Radio Wave Propagation: Ground Wave Propagation; Space Wave Propagation; Line of Sight Propagation; Ionospheric Propagation; Noise. The related research areas include Log-Periodic Antennas, Fractal Antenna, Microstrip Antennas, Rectangular Patch & Circular Patch Antenna, Antenna Arrays, Ridge Antennas, the current and future generation wireless communication systems, and the medical industry.",
    "outcomes": [
      "CLO 1 · Analyze the antenna design parameters and field evaluation under various conditions and formulate the electric as well as the magnetic fields Equation set for Far field and near field conditions.",
      "CLO 2 · Discuss the Array system of different antennas and field analysis under application of different currents to the individual antenna elements.",
      "CLO 3 · Interpret operations of fundamental antennas like patch antennas, Yagi-Huda antennas, Horn antennas and helical structure and also their operation methodology in practice.",
      "CLO 4 · Design a lens structure and also the bench step for antenna parameter measurement of testing for their effectiveness.",
      "CLO 5 · Characterize about the means of propagation of Electromagnetic wave i.e. free space propagation and also about frequency dependent layer selection, its respective issues for an effective transmission of information in the form of EM wave to a remote location and related issues."
    ],
    "units": [
      [
        "Introduction to Antenna Radiation Mechanisms"
      ],
      [
        "Fundamental Parameters of Antennas"
      ],
      [
        "Linear-Wire and Loop Antennas"
      ],
      [
        "Antenna Arrays"
      ],
      [
        "Antenna Structures"
      ],
      [
        "Antenna Measurements"
      ],
      [
        "Radio-Wave Propagation"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg4208": {
    "description": "This is a senior level undergraduate course for students who wish to gain a broad understanding of data communications, communication networks and Internet protocols. Students are expected to have a basic knowledge data transmissions and digital communications. There will be several real-life projects related to data communications and students will use software for implementation or simulation. These projects complement the theoretical aspects and have considerable pedagogic value in helping students understand concepts and design.",
    "outcomes": [
      "CLO 1 · Classify the division of network functionalities into layers",
      "CLO 2 · Analyze the components of a data communication interface and relate it to a specific interfacestandard;",
      "CLO 3 · Identify several codes and apply the error detection and correction techniques in data communication",
      "CLO 4 · Analyze the routers and their configuration, static routing and IPv6 configuration",
      "CLO 5 · Analyze features, services and operations of various transport/ application layer protocols",
      "CLO 6 · Understand the Infrastructure and various issues in LAN and WAN networks"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Physical Layer"
      ],
      [
        "Data Link Layer"
      ],
      [
        "Network Layer"
      ],
      [
        "Transport and Application Layers"
      ],
      [
        "LAN and WAN Networks"
      ]
    ],
    "resources": [
      "computerlab, simulation",
      "Cisco Packet Tracer",
      "Wireshark, GNS3",
      "Computer lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Behrouz A. Forouzan, Data Communications and Networking, Tata McGraw-Hill",
      "S. Tannenbaum, D. Wetherall, Computer Networks, Prentice Hall, Imprint of Pearson 5th edition",
      "William Stallings: Data & Computer Communications",
      "Larry L. Peterson and Bruce S. Davie: Computer Networks",
      "Rita Puz˘manova b: Routing and Switching"
    ]
  },
  "sosc2002": {
    "description": "This course provides a general introduction to economics combining elements of micro and macro fundamentals. The main objective of this course is to introduce and acquaint students with the preliminary principles (theories) and knowledge of economics and the application of economic theories (principles) in the actual world; the daily activities of the households, firm business or any other form of enterprises at micro levels. Students will also able to contextualize the key macroeconomic variables and policy instruments. Specifically, the course introduces students with theory of consumer behavior, production, and cost of production. In these theories how decisions are made by different economic agents will be discussed. Furthermore, the course covers different characteristics of perfect and imperfect market structure. Lastly the course tries to introduce basic macroeconomic concepts such as national income accounting, unemployment, inflation, fiscal and monetary policy instruments",
    "outcomes": [
      "CLO 1 · Describe the major economic units constituting a given society and their corresponding roles",
      "CLO 2 · Explain the objective functions of consumers and how they attain this objective under resource constraints",
      "CLO 3 · Define producers’ objective functions, describe their cost structures in the short and the long run, and apply partial equilibrium approaches to find optimal prices and quantities under different degrees of competition.",
      "CLO 4 · Tabulate markets into different categories on the basis of the number of buyers and sellers and outline the various social welfare implications of each market structure.",
      "CLO 5 · Understand how aggregate economic measures are constructed, their weaknesses, and alternative measures of national wellbeing",
      "CLO 6 · Identify the sources and adverse effects of economic crises and describe the pool of policy instruments that can be deployed to mitigate the consequences of these crises. Course Learning Outcomes Students Outcome (SO) SO-1 SO-2 SO-3 SO-4 SO-5 SO-6 Teaching Methods Assessment Test Quiz Assignm ent Project Lab- reportL T P O"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Theory of Consumer Behavior and Demand"
      ],
      [
        "Theory of Production"
      ],
      [
        "Theory of Costs"
      ],
      [
        "Perfect Competition"
      ],
      [
        "Pure Monopoly"
      ],
      [
        "Monopolistic Competition"
      ],
      [
        "Fundamentals of Macroeconomics"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "ietp4203": {
    "description": "This is an integrated, multidisciplinary engineering project aiming to address a special engineering topic that is being guided by a faculty member. The literature review, design, project management, business perception, multidisciplinary teamwork, entrepreneurship are all included in the team project. 12 Distribution of Student Learning Time (SLT) Course Content Outline CLO Teaching and Learning Activities Total (SLT) Guided learning (F to F) Guided Learning (NF to F) Independent Learning (NF to F) L T P O Introduction • Overview about integrated and multidisciplinary Project • Team work • Overview of project management • Entrepreneurship, Business Plan, Cash Flow, Contracting works, marketing strategy. CLO3 2 3 3 8 Project proposal • Literature review • Problem identification • Development of methods • Project budget plan • Project work plan CLO1 CLO4 2 3 2 15 22 Project planning and Design • Technical Design ✓ Material selection ✓ Drawing and specification ✓ Engineering codes and standards • Economic analysis CLO1 CLO2 CLO3 CLO4 10 50 7 8 75 • Component assembly and prototype (Simulation) development • Prototype testing • Results and discussions • Product/process operational manuals Total 105 Assessment Assessment Percentage Total- 100(%) F to F NF to F 1 Project Proposal Document 10 0 2 (preparation) 2 2 Project Proposal oral presentation 10 1 1 (preparation) 2 3 Project progress report 10 1 2 (preparation) 3 4 Poster Evaluation 5 2 (preparation) 2 5 Prototype Evaluation 30 1 1 6 Project report evaluation 20 2 (preparation) 2 7 Oral Presentation Evaluation 10 1 1 (preparation) 2 8 Peer Evaluation 5 1 1 Sub-Total 15 Grand Total SLT 120 L = Lecture, T = Tutorial, P = Practical, O = Others, F to F = Face to Face, NF to F = Non Face to Face 13 Special requirements and resources to deliver the course • Workshop and laboratory is required for project work (product development, device manufacturing/assembly etc.) • Software, computer and simulation room is needed to simulate and design. • Industry visit 14 Text book and reference: • Relevant books, research Journal articles, workshop and conference papers related to the project topic. • Integrated Engineering Team project guideline.",
    "outcomes": [
      "CLO 1 · Apply engineering knowledge and the proper design process to produce a creative and innovative solution.",
      "CLO 2 · Develop prototype for the chosen integrated engineering project.",
      "CLO 3 · Internalize the principle of project management and team sprit",
      "CLO 4 · Demonstrate effective communication, report writing and presentation"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Project proposal"
      ],
      [
        "Project planning and design"
      ],
      [
        "Prototype development and testing"
      ]
    ],
    "workload": "120 total student learning hours."
  },
  "eceg4310": {
    "description": "Review of Smith Chart applications: impedance, susceptance, VSWR calculations, quarter wave impedance transformer, the slotted line impedance finder. Microwave Network Analysis: impedance matrix, susceptance matrix, hybrid matrix, ABCD matrix, scattering parameters, signal flow graphs. Matching Networks and Tuning: Impedance matching RLC networks, Microstrip matching networks, Single Stub Tuning. Amplified design considerations; stability considerations, power gain considerations, amplifier tuning. Oscillator Design; oscillation conditions, oscillator configurations",
    "outcomes": [
      "CLO 1 · Apply Smith chart use for solution of transmission line problems and impedance matching.",
      "CLO 2 · Analyze microwave networks using impedance, admittance, transmission and scattering matrix representations.",
      "CLO 3 · Design microwave matching networks using L section, single and double stub and quarter wave transformer.",
      "CLO 4 · Describe, analyze and design basic passive and active microwave circuits such as couplers, amplifiers, mixers, oscillators.",
      "CLO 5 · To improve skills in written communication, through a laboratory and project reports."
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Microwave Network Analysis"
      ],
      [
        "Noise and Microwave Amplifier Design"
      ],
      [
        "Microwave Transistor Oscillator Design"
      ]
    ],
    "resources": [
      "Microwave Work Bench",
      "Micwave Office| AWR Software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Microwave Transistor Amplifiers Analysis and Design, Second Edition, Guillermo Gonzalez.",
      "Microwave Engineering, Fourth Edition, David M. Pozar.",
      "Microwave Devices and Circuits, Third Edition, Samuel Y. Liao."
    ]
  },
  "eceg4312": {
    "description": "In this course, students will study wide range of IC technology fabrication process, IC technology industrial machines and tools. Course covers various internal elements manufacturing methods and models. With this course student will able to understand the vital concepts of IC manufacturing process.",
    "outcomes": [
      "CLO 1 · Examine the approaches of Crystal Growth fabrication and silicon wafers properties.",
      "CLO 2 · Investigate the various epitaxial methods and advantages of epitaxial over the conventional methods",
      "CLO 3 · Understand the lithography process: drawing of circuits on wafer and also analyses the etching techniques",
      "CLO 4 · Describe the different deposition methods in IC fabrication using chemical or vapor depositions",
      "CLO 5 · Evaluate the IC thermal oxidation and Dopant-Diffusion manufacture and measurement methods.",
      "CLO 6 · Analyze the dominant and preferred method for doping and growing of metallization layers in silicon wafers in IC manufacturing."
    ],
    "units": [
      [
        "Introduction and Crystal-Wafer Growth"
      ],
      [
        "Epitaxy"
      ],
      [
        "Lithography and Etching"
      ],
      [
        "Deposition"
      ],
      [
        "Oxidation"
      ],
      [
        "Diffusion, Ion Implantation, and CMOS Fabrication"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg4200": {
    "description": "Advance Practical Expertise: Build on foundational skills from Industrial Internship I by engaging in more complex and high-impact engineering tasks. The course Deepen Technical Proficiency by Developing expertise in advanced technologies and methodologies relevant to the student’s field. Enhance Project Management: Strengthen skills in managing substantial engineering projects, including strategic planning, execution, and evaluation.Refine Problem-Solving and Innovation: Tackle advanced engineering problems with innovative solutions and strategic thinking. Cultivate Professional Skills: Further develop professional competencies, including leadership, advanced communication, and strategic thinking. Strengthen Industry-Academia Ties: Enhance collaboration between academic learning and industry practices through involvement in significant projects.",
    "outcomes": [
      "CLO 1 · Demonstrate an advanced understanding of the host company’s technological and organizational structure, including recent developments and innovations.",
      "CLO 2 · Lead and contribute to high-impact engineering projects, utilizing sophisticated tools and methodologies.",
      "CLO 3 · Design, implement, and evaluate complex engineering systems, integrating theoretical knowledge with advanced practical applications.",
      "CLO 4 · Apply advanced problem-solving techniques to resolve intricate technical challenges and develop innovative solutions.",
      "CLO 5 · Produce a detailed final report that captures advanced technical tasks, strategic solutions, and significant contributions made during the internship."
    ],
    "units": [
      [
        "Introduction to Industrial Internship II"
      ],
      [
        "Host Company Analysis"
      ],
      [
        "Problem Formulation"
      ],
      [
        "Project Development and Implementation"
      ],
      [
        "Conclusion and Recommendations"
      ]
    ],
    "resources": [
      "Different practical implementation lab",
      "Manuals"
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg5201": {
    "description": "Introduction of wireless and mobile communication systems: History of mobile radio communication, examples of wireless communications (Zigbee, Bluetooth, and Internet of Things), and trends in cellular radio communication systems (1G to 6G mobile networks). Evolution of mobile telephony system: introduction mobile telephony system, GSM mobile telephony system, UMTS/WCDMA mobile telephony system, LTE mobile network, \"5G mobile networks\". Cellular Concept and System Design Fundamentals: Cellular Concept & Frequency Reuse, Channel Assignment Strategies, Handoff Strategies, Interference and System Capacity, Trunking and Grade of Services. Mobile Radio Channel Modeling & Mitigations: Wireless Channel Models and Signal Propagations, Small Scale Fading and Multipath propagation, Mitigation Techniques for Fading Wireless Channels, Equalization Techniques, Diversity Techniques, Coding Techniques. Multiple Access Techniques for Wireless Systems: Frequency Division Multiple Access, Time Division Multiple Access, Code Division Multiple Access, Space Division Multiple Access, Spread Spectrum Multiple Access, OFDMA wideband systems.",
    "outcomes": [
      "CLO 1 · Analyze wireless communications system and network performance.",
      "CLO 2 · Evaluate the measures to increase the capacity in GSM, WCDMA and LTE systems-Sectorization and Spatial Filtering for Interference Reduction",
      "CLO 3 · Identify the effects of shadowing, path loss, and fading on performance.",
      "CLO 4 · Design cellular systems to achieve coverage area, spectrum allocation and quality of service specifications.",
      "CLO 5 · Analyze the different wireless multiple access techniques, path loss models, wireless sensors networks and cooperative diversity networks."
    ],
    "units": [
      [
        "Introduction to Wireless and Mobile Communication"
      ],
      [
        "Evolution of Mobile Telephony Systems"
      ],
      [
        "Cellular Concepts and System Design"
      ],
      [
        "Mobile-Radio Channel Modeling and Mitigation"
      ],
      [
        "Multiple-Access Techniques for Wireless Systems"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg5203": {
    "description": "The aim of the capstone project in the senior (final) year of Electronics and Communication Engineering majors is to familiarize them with the process of designing electrical power and control systems as practiced in industry. This course requires students to develop a project based on the knowledge and skills acquired in earlier coursework and integrate their technical knowledge through practical design effort.",
    "outcomes": [
      "CLO 1 · Apply the knowledge and skills acquired throughout their academic program to develop innovative solutions to real-world problems.",
      "CLO 2 · Conduct thorough research, analyze data, and synthesize information to inform their Capstone project.",
      "CLO 3 · Demonstrate project management skills, including planning, organizing, and executing a comprehensive project plan.",
      "CLO 4 · Communicate effectively through written and oral presentations, showcasing their Capstone project findings and recommendations.",
      "CLO 5 · Reflect on their learning experience and evaluate their personal and professional growth throughout the Capstone project."
    ],
    "units": [
      [
        "Capstone Project"
      ]
    ],
    "resources": [
      "Different Software",
      "Computer Lab",
      "3 Different practical implementation lab"
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg5207": {
    "outcomes": [
      "CLO 1 · Identify engineering problem and gather relevant information from various scientific literature.",
      "CLO 2 · Formulate a hypothesis and conduct preliminary experimental investigations.",
      "CLO 3 · Develop and adapt the appropriate experimental methodologies through the use of different tools such as design expert, simulation and design software and other computational tools.",
      "CLO 4 · Write the research proposal following standard proposal writing formats and present it in clear and understandable way."
    ],
    "workload": "80 total student learning hours.",
    "description": "",
    "units": [
      [
        "Introduction"
      ],
      [
        "Problem Identification and Literature Review"
      ],
      [
        "Preliminary Research Work"
      ],
      [
        "Proposal Development"
      ]
    ]
  },
  "eceg5307": {
    "description": "Very Large-Scale Integrated Circuits (VLSI) have become the prime medium of realization of modern Electronics Systems. The main objective of this course is the study of MOSFETs and their fabrication techniques in order to design various combinational and sequential circuits using CMOS Logic. This course also introduces the concepts and techniques of modern integrated circuit design and analysis along with optimization of combinational and sequential circuit using static and dynamic based CMOS Circuits. This course is one of the vital courses for designing the processors and verifications.",
    "outcomes": [
      "CLO 1 · Model combinational and sequential digital circuits using VHDL Programming.",
      "CLO 2 · Discuss VLSI design flow, design styles and the fabrication processes of MOS",
      "CLO 3 · Analyze the operation of Metal oxide field effect transistor and understand the behavior of the circuit with respect to aspect ratio and designs.",
      "CLO 4 · Design and analyze the static and dynamic behavior of MOS Inverter circuits.",
      "CLO 5 · Design CMOS based combinational and sequential logic circuits at transistor level.",
      "CLO 6 · Design and Analysis of Pass transistor and transmission gate-based circuits"
    ],
    "units": [
      [
        "VHDL Basics"
      ],
      [
        "VHDL Modeling"
      ],
      [
        "MOS Transistor"
      ],
      [
        "MOS Inverters and Their Characteristics"
      ],
      [
        "MOS Logic Design"
      ],
      [
        "Dynamic CMOS Logic Circuits"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "cseg5307": {
    "description": "This course covers latest trends in the various layers of computer networking, emerging networking technologies and network security. At the end of this course, Students will be able to design and implement networking protocols and equipment.",
    "outcomes": [
      "CLO 1 · Analyze the various applications running in the network, set of requirements for network design, network architectures that guides the design and implementation of networks, network programming interface, and various factors that impact network performance.",
      "CLO 2 · Differentiate the various solutions for encoding, framing, error detection, error correction, and media access control in different real world technologies. Also differentiate between switching mechanisms in a switched local area networks which uses different technologies. Implement switching algorithms",
      "CLO 3 · Compare and contrast the network data plane and control plane to implement an software defined network(SDN). Argue how the introduction of hierarchy, and expanding the address space tackle the issue of network scalability. Weigh how multicast routing and the introduction of multiprotocol label swithcing(MPLS) improves the internet capability.",
      "CLO 4 · Select transport algorithms in the context of different required services (simple demultiplexing service, a reliable byte-stream service, a request/reply service, and a service for real-time applications.). Support alternative transport protocols such as QUIC.",
      "CLO 5 · Judge the best places to implement congestion control in the network under different resource allocation scheme.",
      "CLO 6 · Defend why security functionality is needed to be provided in all the layers of the network. Experiment securing network applications, TCP connections, network layer and wireless LANS."
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "The Link Layer and LANs"
      ],
      [
        "Advanced Internetworking"
      ],
      [
        "Transport Layer"
      ],
      [
        "Congestion Control and Resource Allocation"
      ],
      [
        "Network Security"
      ]
    ],
    "resources": [
      "simulation",
      "computer lab",
      "Software: Wireshark, Mininet, NS3, GNS3",
      "Visit: Ethio Telecom"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Computer Networking: A TOP-DOWN APPROACH (Kurose and Ross), Seventh Edition",
      "Computer Networks 5th By Andrew S. Tanenbaum",
      "Larry L. Peterson, Bruce S. Davie, 2021, “Computer Networks: A Systems Approach”, 6th edition, Elsevier/Morgan Kaufmann.",
      "Behrouz A. Forouzan, 2017, \"DATA Communications and Networking”, McGraw- Hill Education, 5th edition"
    ]
  },
  "eceg5315": {
    "description": "This course is designed to provide students a working knowledge of embedded systems and its application to the modern technology. In this course the fundamentals of embedded systems, hardware and firmware designs will be explored. Different types of microcontrollers commonly used in the world today will be introduced. The student can have the choice on which microcontrollers that can be used for specific design. Embedded programs using assembly language and higher programming language will be used in the program. Real-time operating systems, low power computing, interfacing as well as optimization are the core topics to be discussed in designing embedded systems.",
    "outcomes": [
      "CLO 1 · Discuses and explain on the role ofembedded systems in real world",
      "CLO 2 · Be able to discuss on concepts, components both hardware and software ofembedded systems",
      "CLO 3 · Write software programs for small to medium scale embedded systems",
      "CLO 4 · Design and development processes ofembedded systems",
      "CLO 5 · Discuss and compare different types ofreal-time operating system"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Embedded Microcontrollers"
      ],
      [
        "Embedded-System Programming"
      ],
      [
        "Real-Time Operating Systems"
      ],
      [
        "Low-Power Computing"
      ],
      [
        "Networked Embedded Systems"
      ]
    ],
    "resources": [
      "Proteus Simulation Software",
      "Computer Lab",
      "Microcontroller Kit"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Tammy Norgaard: Embedded Systems Architecture: A Comprehensive Guide for Engineers and Programmers, Embedded Technology",
      "Wayne Wolf: Computers as Components: Principles of Embedded Computing System Design, Morgan Kaufman",
      "Frank Vahid / Tony Givargis: Embedded System Design: aunified hardware/software introduction, Wiley & Sons",
      "Qing Li, Caroline Yao: Real- Time Concepts for Embedded Systems",
      "Arnold S. Berger: Embedded Systems Design",
      "Stuart R. Ball: Embedded Microprocessor Systems: Real World design",
      "Michael Barr: Programming Embedded Systems in C and C ++"
    ]
  },
  "epce4302": {
    "description": "This course provides an in-depth understanding of Programmable Logic Controllers (PLCs) and Robotics, focusing on their applications in industrial automation. It covers the fundamental principles, programming techniques, and integration of PLCs and robotics systems. Students will learn how to design, program, and troubleshoot PLC systems, as well as explore the kinematics and control of robotic systems. The course emphasizes hands-on experiences and project-based learning to reinforce theoretical concepts.",
    "outcomes": [
      "CLO 1 · Apply knowledge of robotics to analyze and solve industrial automation problems.",
      "CLO 2 · Motion Control for robotics manipulator",
      "CLO 3 · Apply knowledge of PLCs and robotics to analyze and solve industrial automation problems.",
      "CLO 4 · Design and program PLC systems using ladder logic programming language.",
      "CLO 5 · Integrate PLCs and robotics systems for industrial automation applications.",
      "CLO 6 · Demonstrate an understanding of safety considerations when working with PLCs and robotics."
    ],
    "units": [
      [
        "Introduction to Robotics"
      ],
      [
        "Robot Motion Control"
      ],
      [
        "Industrial Automation and PLCs"
      ],
      [
        "PLC Hardware and Wiring"
      ],
      [
        "PLC Programming"
      ],
      [
        "Integration and Industrial Applications of PLCs and Robotics"
      ]
    ]
  },
  "epce4306": {
    "description": "This course Introduces technologies involved in mechatronics (Intelligent Electro-Mechanical Systems) and the techniques necessary to apply this technology to mechatronic system design. The topics includes but not limited to the following; electronics A/D, D/A converters, op-amps, filters, power devices; software program design, event-driven programming; hardware and DC Stepper Motors, solenoids, and robust sensing. Lab component of structural assignments and open-ended team project.",
    "outcomes": [
      "CLO 1 · Discuss the basic concepts and architecture of mechatronic system.",
      "CLO 2 · Compute about control system modeling and representation of mechanical, hydraulic and other system",
      "CLO 3 · Analyze about different semiconductor device which are used in mechatronics system",
      "CLO 4 · Write and upload a program for different application",
      "CLO 5 · Integrate mechanical, control and computer engineering in the design of mechatronic system.",
      "CLO 6 · Design and development processes of mechatronics real application"
    ],
    "units": [
      [
        "Introduction to Mechatronics"
      ],
      [
        "Physical-System Modeling"
      ],
      [
        "Electronic Converters"
      ],
      [
        "Power Devices"
      ],
      [
        "Mechatronic Sensors and Actuators"
      ],
      [
        "Event-Driven Programming"
      ],
      [
        "Control Systems Versus Mechatronic Systems"
      ]
    ],
    "resources": [
      "Computer Lab",
      "MATLAB Software",
      "3 Proteus professional software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "D. G. Alciatore and M. B. Histand , Introduction to Mechatronics.",
      "R. Bishop, Mechatronic Systems, Sensors, and Actuators.",
      "Arduino Community Websites"
    ]
  },
  "eceg5321": {
    "description": "By giving general introduction to anatomy and Physiology of the human body, the key measurement principles of sensors found in healthcare technologies, medical devices used in hospitals, will be discussed. This course also shows how to build bio-potential amplifiers, record and interpret bioelectrical data (e.g. heart activity, muscle activity). It gives an insight into the working principles underlying the instrumentation for measuring respiratory and cardiovascular function such as blood pressure, blood flow as well as biochemical sensors. General discussions on medical imaging and prosthetics and therapeutic devices are covered.",
    "outcomes": [
      "CLO 1 · Explain the structures and functions of the human organs.",
      "CLO 2 · Analyze the fundamentals of electrical engineering as it relates to bioelectric phenomena and neural stimulation",
      "CLO 3 · Interpret and apply the physical and chemical principles which govern the measurement of a biological variable or system by a transducer which converts the variable into an electrical signal",
      "CLO 4 · Characterize various measurement devices and approaches including the underlying biological process that generates the quantity to be measured or controlled",
      "CLO 5 · Acquire the role of the biomedical engineer in society. Including responsibility for protecting, specifically, patient safety, and, generally, the broader public interest."
    ],
    "units": [
      [
        "Anatomy and Physiology"
      ],
      [
        "Basic Concepts of Medical Instrumentation"
      ],
      [
        "Bioelectric Signals"
      ],
      [
        "Biochemical Sensors"
      ],
      [
        "Applications"
      ],
      [
        "Medical Imaging Systems"
      ],
      [
        "Therapeutic and Prosthetic Devices"
      ]
    ],
    "resources": [
      "lab, simulation",
      "LABVIEW Software",
      "Computer lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Webster, Medical Instrumentation Application and Design, Wiley, 4th edition, 2009",
      "Schreiner, Bronzino, Peterson, Medical Instruments and Devices: Principles and Practices, CRC Press, 1st Edition, 2015",
      "John G. Webster (Editor), Bioinstrumentation, John Wiley & Sons, Inc, 2004 294"
    ]
  },
  "epce3202": {
    "description": "The course deals with the following major points: - Introduction to power electronics, an overview of different types of power semiconductor devices and their dynamic characteristics, operation and characteristics of controlled rectifiers, operation and switching techniques of DC-DC switching regulators, modulation techniques of PWM inverters, operation of AC voltage controller and Cycloconverters.",
    "outcomes": [
      "CLO 1 · Discuss concept, devices and types of power electronics",
      "CLO 2 · Explain principle of operation of power semiconductor devices and switching characteristics",
      "CLO 3 · Analyze various controlled rectifiers characteristics and evaluate their performance",
      "CLO 4 · Evaluate operation of DC-DC switching converters",
      "CLO 5 · Compute various PWM techniques and operation of voltage and current source inverters",
      "CLO 6 · Evaluation and analysis of AC- AC convertor"
    ],
    "resources": [
      "Computer Lab",
      "MATLAB Software",
      "3 OrCAD/ Pspice Software"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Power Electronics by M.H.Rashid, 3rd edition, 2014. Reference: 1 Power Electronics by P.S.Bhimpra, 3rd edition, 2003.",
      "Power Electronics by Ned Mohan, 3rd edition, 2003."
    ],
    "units": [
      [
        "Introduction to Power Electronics"
      ],
      [
        "Power Semiconductor Devices"
      ],
      [
        "Phase-Controlled Rectifiers"
      ],
      [
        "DC–DC Converters"
      ],
      [
        "Inverters"
      ],
      [
        "AC–AC Converters"
      ]
    ]
  },
  "sosc5011": {
    "description": "This course is designed to equip students with fundamental concepts of project formulations, appraisal, planning and analysis of projects, the project cycle, market and demand analysis, raw material and supply study, location, site, and environmental assessment, production plan and plant capacity, technology and engineering study, financial & economic analysis , appraisal criteria, project financing, documentation, implementation monitoring and evaluation. This in turn helps to ensure that projects are successfully completed. As Engineers you are expected to take part in the initiation, planning, execution of projects related to your profession at years to come. Accordingly, the course intended to provide you basic knowledge of project management.",
    "outcomes": [
      "CLO 1 · Define the core project management concepts and differentiate project from non-project activities.",
      "CLO 2 · Understand the project life cycle and approaches of project cycle. Apply the knowledge of project life cycle to classify project activities in to different manageable phases.",
      "CLO 3 · Locate the source of project ideas, identify and scrutinize worthy project ideas and develop a sound project proposal.",
      "CLO 4 · Define and initiate a project and verify the project scope.",
      "CLO 5 · Conduct feasibility studies, appraise and select the worthwhile project ideas. Estimate project and resource costs.",
      "CLO 6 · Apply project management principles, concepts, tools and techniques to plan, execute the project plan and track project progress.",
      "CLO 7 · Schedule project tasks and estimate resource requirements. Monitor and control project progress."
    ],
    "units": [
      [
        "Overview of Project Management"
      ],
      [
        "Project Cycle"
      ],
      [
        "Project Identification"
      ],
      [
        "Project Evaluation and Analysis"
      ],
      [
        "Project Management"
      ]
    ],
    "workload": "80 total student learning hours.",
    "books": [
      "Albert Lester (2014), Project Management, Planning and Control 6th Elsevier Ltd.",
      "James P. Lewis. (2007), Fundamentals of project management, 3rd ed. Printed in the United States of America",
      "Prasanna Chandra, Projects – Planning Analysis, Financing, Implementation, and Review.",
      "Singh, Narendra, (2003), Project management and control, 3rd edition, New Delhi, Himalaya Publishing house",
      "Lewis, James P, (2001) Project planning, scheduling and control, 3rd edition, New Delhi: Tata MCGraw-hill companies, Inc., India.",
      "UNIDO, A Manual for the Preparations of Industrial Feasibility Studies."
    ]
  },
  "eceg5302": {
    "description": "Introduction of optical communication: propagation of light, ray theory and model. Different types of fibers: Single and multimode fibers, step index fibers. Signal degradation due to scattering, attenuation and dispersion and its losses. Optical Sources; Light emitting diode, Laser diode, rate equation, Modulators: electro optic, electro-absorption. Optical receivers: Photodiodes: p-i-n, avalanche, responsively, capacitance, transit time. Optical receiver performance: Q factor, bit error ratio, sensitivity degradation. Non-Linear effects: solition based communication. Optical communication system architecture: optical amplifier, Fiber optic link design, and amplified WDM systems. Free Space Optics (FSO) in optical communication applications..",
    "outcomes": [
      "CLO 1 · To understand the background of optical fiber communication and the generation of optical structure and propagation technique of optical fibers",
      "CLO 2 · Analyze the principle of various light propagation and how the optical signal is transmit in optical fibers for communication",
      "CLO 3 · To classify the types of attenuation and propagation mechanism in various fibers and how the optical signal dispersed",
      "CLO 4 · To understand the various light sources used in optical fibers for communication To acquire knowledge in industrial and medical applications of fibers",
      "CLO 5 · To understand and design the various optical detector materials for device applications",
      "CLO 6 · To acquire knowledge in industrial and medical applications of fibers",
      "CLO 7 · Design and analyzing different modulation techniques in optical fiber communication"
    ],
    "units": [
      [
        "Optical Communications: Brief Review and Evolution"
      ],
      [
        "Principles and Characteristics of Fiber-Optic Communications"
      ],
      [
        "Signal Degradation in Optical Fibers"
      ],
      [
        "Optical Sources"
      ],
      [
        "Optical Detectors in Fiber-Optic Communications"
      ],
      [
        "Applications and Communication Systems"
      ],
      [
        "Modulation and Multiplexing"
      ]
    ],
    "workload": "Total student learning time: 122 hours."
  },
  "eceg5310": {
    "description": "This course aims at providing thorough information of the conventional and upcoming satellite communication technology. The course covers the History of Satellite communication, Basic concepts of Satellite Communications, Communication Networks and Services, Comparison of Network Transmission technologies, Orbital and Spacecraft problems, Growth of Satellite communications, Orbital mechanics, Look angle determination, Orbital perturbations, Orbital determination, Launchers and launch vehicles, Orbital effects in communication system performance, Satellite Subsystems, Attitude and Control Systems (AOCS), Telemetry, Tracking, Command and monitoring, Power systems, Communication subsystems, Satellite antennas, Equipment reliability and space qualification, Basic transmission theory, System noise temperature and G/T Ratio, Design of downlinks, SatelHrsite systems using small earth stations, Uplink design, Design of specified C/N: Combining C/N and C/I values in satellite links system design examples.",
    "outcomes": [
      "CLO 1 · Understand the orbital and functional principles of satellite communication systems",
      "CLO 2 · Architect, interpret, and select appropriate technologies for implementation of specified satellite communication systems",
      "CLO 3 · Analyze the various losses during the propagation and their impact on satellite link.",
      "CLO 4 · Design Satellite Link for Up Link and Down Link and Calculate complete link budgets",
      "CLO 5 · Apply advanced techniques and practical aspects of satellite communication in research"
    ],
    "units": [
      [
        "Introduction to Satellite Communication"
      ],
      [
        "Orbits and Launching Methods"
      ],
      [
        "Satellite Subsystems"
      ],
      [
        "Radio-Wave Propagation and Polarization"
      ],
      [
        "Satellite Communication Link Design"
      ],
      [
        "Satellite Access and Specialized Services"
      ]
    ],
    "resources": [
      "MATLAB Software",
      "Computer lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Timothy Pratt, Charles Bostian, Jeremy Allnutt, ―Satellite Communications, John Wiley & Sons.",
      "Dennis Roody, ―Satellite Communications‖, McGraw Hill",
      "Wilbur L. Pritchard, Henri G. Suyderhoud, Robert A. Nelson Satellite - Communication Systems Engineering, Pearson. ( Second Edition ),",
      "Anil K. Maini, Varsha Agarwal- Satellite Technology, Principles and Applications, Wiley. (Second Edition )",
      "G. Maral, M. Bousquet, Z. Sun -Satellite Communications Systems: systems, techniques and technology, John Willy and sons.( 5th edition)"
    ]
  },
  "eceg5304": {
    "description": "This course explores on the latest CMOS and related recent technologies. The emphasis of the course will be on designing and analysis of CMOS circuits. This course will provide an excellent introduction to digital circuit design for students",
    "outcomes": [
      "CLO 1 · Define the basic knowledge about the understand of MOS transistor",
      "CLO 2 · Elaborate basic IC fabrication process steps, also fabrication methods of MOS, PMOS, NMOS and CMOS.",
      "CLO 3 · Discuss about Static and Dynamic behaviours of MOS device.",
      "CLO 4 · Elaborate the structure and operation of CMOS inverter, Energy, Power dissipation and various delays related to CMOS inverter",
      "CLO 5 · Design and analysis of sequential circuit using CMOS",
      "CLO 6 · Compare the Impact of Interconnect Parasitic like Capacitive, Resistive and Inductive",
      "CLO 7 · Design an arithmetic building block using MOS transistors"
    ],
    "units": [
      [
        "Review of MOS Devices and Scaling"
      ],
      [
        "IC Fabrication"
      ],
      [
        "CMOS Inverters"
      ],
      [
        "Designing Combinational Logic Gates in CMOS"
      ],
      [
        "Designing Sequential Logic Circuits"
      ],
      [
        "Interconnect Parasitics"
      ],
      [
        "Designing Arithmetic Building Blocks"
      ]
    ],
    "workload": "Total student learning time: 130 hours."
  },
  "eceg5306": {
    "description": "Students will be able to acquire knowledge on systems view of communications, integrating perspectives from computer science, electrical engineering, electronic engineering and communication engineering. Students will learn to consider tele-traffic demands, quality of service, scalability, performance and cost into consideration to develop requirements and architectures. They will be able to understand recent topics like switching systems, time divisions witching systems, data communication Networks. ISDN, voice data integration and importance of telephone traffic analysis and telephone networks. The Course also provides a good understanding of the fundamentals and application of telecommunication networks i.e. PSTN, PDN and ISDN.",
    "outcomes": [
      "CLO 1 · Recall and discuss the basic knowledge about the telecommunication systems and describe the need for switching systems and their evolution from analogue to digital.",
      "CLO 2 · Discuss various Switching techniques, types and roles in the context of Telecommunication Network",
      "CLO 3 · Understand clear knowledge regarding telecommunication signaling system and their types",
      "CLO 4 · Create the knowledge about telecommunication traffic and analyze how a telecommunication network handles traffic",
      "CLO 5 · To expose through the evolution of telephone network, data network and integrated service digital network"
    ],
    "units": [
      [
        "Introduction"
      ],
      [
        "Digital Telecom Transmission and Applications"
      ],
      [
        "Public Switched Telephone Network and Switching"
      ],
      [
        "Switching Techniques"
      ],
      [
        "Digital Subscriber Line Technology"
      ]
    ],
    "resources": [
      "simulation",
      "CCNA SWITCHING VIRTUAL LAB",
      "Computer lab",
      "WireShark, Packet Tracer"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "J. E. Flood, “Telecommunications Switching, Traffic and Networks”, Pearson Education.",
      "John C. Bellamy, “Digital Telephony”, Third Edition; Wiley Publications.",
      "Behrouz A. Forouzan, “Data Communications and Networking,” TMH, 2nd Edition, 2002.",
      "Tomasi,” Introduction to Data Communication and Networking,” Pearson Education, 1 st Edition, 2007."
    ]
  },
  "eceg5308": {
    "description": "Introducing theory and application of computer vision. Topics includes digital image fundamentals, binary vision, gray-level vision, Imaging optics, sensors and sampling patterns, image pre-processing, Frequency domain image processing, Color image processing, linear and nonlinear operations on 2D and 3D images images, enhancement, fundamentals of semantic image processing, practical applications of imaging system.",
    "outcomes": [
      "CLO 1 · Understand fundamental technologies for digital image, compression, analysis, and processing.",
      "CLO 2 · Select and Solve algorithms, analytical tools, and practical implementations of various digital 2D and 3D image applications.",
      "CLO 3 · Explain how digital images are represented and manipulated in a computer, including reading and writing from storage, and displaying",
      "CLO 4 · Develop and Write programs which implements fundamentals of Computer Vision algorithms",
      "CLO 5 · Describe the mathematical description of computer vision techniques and know how to go from the equations to code"
    ],
    "units": [
      [
        "Computer-Vision Fundamentals"
      ],
      [
        "Image Details in Two Dimensions"
      ],
      [
        "Color Images"
      ],
      [
        "Spatial Filtering"
      ],
      [
        "Image-Edge Detection and Fitting in the Spatial Domain"
      ],
      [
        "Image Alignment"
      ]
    ],
    "workload": "Total student learning time: 120 hours."
  },
  "eceg5314": {
    "description": "The course basically designed in the areas of Imaging optics, sensors and sampling patterns, image pre-processing, Frequency domain image processing, Color image processing, linear and nonlinear operations on images, enhancement fundamentals of semantic image processing, practical applications of imaging system, image segmentation and its application to biomedical imaging, satellite imaging etc. This course focuses the students ability in analyzing technologies for digital image, compression, writing and developing of algorithms, implementations of various digital image applications, Image representation and conversant with the image processing techniques.",
    "outcomes": [
      "CLO 1 · Analyze image acquisition technique, reading and writing of new images, analysis of different image processing techniques.",
      "CLO 2 · Select and Solve image processing algorithms, analytical tools, and practical implementations of various digital image applications.",
      "CLO 3 · Develop and write programming code which simplifies the complex image processing algorithms.",
      "CLO 4 · Describe the mathematical analysis of image processing techniques and know how to develop code for application purpose",
      "CLO 5 · Develop and Analyze algorithms applications to different complex medical imaging problems manipulated in a higher version computer system"
    ],
    "units": [
      [
        "Digital-Image Fundamentals"
      ],
      [
        "Image Enhancement in the Spatial Domain"
      ],
      [
        "Image Enhancement in the Frequency Domain"
      ],
      [
        "Color-Image Processing"
      ],
      [
        "Morphological Image Processing and Segmentation"
      ],
      [
        "Project-Based Image-Processing Applications"
      ]
    ],
    "resources": [
      "deliver the",
      "computer",
      "lab,",
      "simulation",
      "MATLAB Software",
      "Computer lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "Digital Image Processing Third Edition, by Rafael C. Gonzalez and Richard E. Woods",
      "Digital signal processing ,Fourth edition by JOHN G. PROAKIS , DIMITRIS G. MANOLAKIS",
      "Principles of Digital Image Processing, Advanced Methods,Wilhelm Burger, Mark J. Burge,2013",
      "Handbook of Image and Video Processing by Alan C. Bovik,2005",
      "Fundamentals of Digital Image Processing, A Practical Approach with Examples in Matlab, Chris Solomon, Toby Breckon,2011"
    ]
  },
  "eceg5316": {
    "description": "This course explores semiconductor physics, and operation & applications of semiconductor devices such as p-n junctions, BJTs, JFETs and MOSFETs. Also formation of metal -semiconductor is discussed.",
    "outcomes": [
      "CLO 1 · Recall and define the basic knowledge about the physical principles and operational characteristics of Semiconductor Physics and their devices",
      "CLO 2 · Understand the distribution of charge carriers and position of Fermi level inside the semiconductor material",
      "CLO 3 · Understand the phenomenon of current flowing inside the semiconductor material using drift and diffusion mechanism",
      "CLO 4 · Discuss the formation of P-N junction, derive the potential barrier and space charge width at equilibrium and nano equilibrium",
      "CLO 5 · Explain the metal -semiconductor junction.Differentiate between the Schottky and ohmic contact"
    ],
    "units": [
      [
        "Semiconductors in Daily Life"
      ],
      [
        "Carrier Properties"
      ],
      [
        "Carrier Transport: Drift and Diffusion"
      ],
      [
        "The P–N Junction"
      ],
      [
        "Metal–Semiconductor Junction"
      ]
    ],
    "resources": [
      "PSpice Software",
      "Computer lab"
    ],
    "workload": "Total student learning time: 120 hours.",
    "books": [
      "D. Neamen and D. Biswas, \"Semiconductor Physics and Devices\", 4th edition, McGraw-Hill Education, 2013.",
      "B.G. Streetman and S. K. Banerjee, “Solid State Electronic Devices,” 7th edition, Pearson, 2016.",
      "S. M. Sze and K. K. Ng, “Physics of Semiconductor Devices,” 3rd edition, John Wiley & Sons, 2007. 334",
      "A. S. Sedra and K. C. Smith, “Microelectronic Circuits: Theory and Applications”, 6th edition, Oxford Press, 2013.",
      "S. Wang, Fundamentals of Semiconductor Theory & Device Physics, Prentice Hall, 1989"
    ]
  },
  "eceg5312": {
    "description": "Digital System Design have become the prime medium of realization of modern Electronics Systems. The goal of the course is to study hardware description languages and describe their role in the electronic design automation environment. The course also focuses on Verilog basics and FPGA basics. This course also introduces the concepts and techniques of modern integrated circuit design and analysis along with optimization of combinational and sequential circuit using HDL languages. This course is one of the vital course for designing the processors and verifications.",
    "outcomes": [
      "CLO 1 · Design combinational and sequential circuits using HDL Programming.",
      "CLO 2 · Design of various digital modules through project oriented approach",
      "CLO 3 · Identify the suitable Abstraction level for a particular digital design",
      "CLO 4 · Compare and analysis architectures of different FPGAs.",
      "CLO 5 · Development of prototype of circuit design"
    ],
    "units": [
      [
        "VHDL Language"
      ],
      [
        "Behavioral and Data-Flow Modeling"
      ],
      [
        "Gate- and Switch-Level Modeling"
      ],
      [
        "FPGA Implementation"
      ]
    ],
    "workload": "Total student learning time: 113 hours."
  },
  "eceg5202": {
    "outcomes": [
      "CLO 2 · Design/simulate/develop prototype/system, correlation or model by considering different factors/constraints.",
      "CLO 3 · Write the final research document following standard research writing formats and present it in clear and understandable way for different range of audiences.",
      "CLO 4 · Demonstrate professional and ethical responsibilities and commitments."
    ],
    "workload": "160 total student learning hours.",
    "description": "",
    "units": [
      [
        "Reinforcement of Research Methods and Strategies"
      ],
      [
        "Detailed Design and Development of Components, Systems, and Products"
      ],
      [
        "Experimentation, Testing, Data Analysis, and Validation"
      ],
      [
        "Final Research Writing and Report Preparation"
      ]
    ]
  }
};
function renderExitExamGuide() {
  const guide = document.getElementById('examGuide');
  guide.innerHTML = exitExamAreas.map((area, index) => `<details class="exam-theme" ${index === 0 ? 'open' : ''}>
    <summary class="exam-theme-summary"><span class="exam-theme-index">${String(index + 1).padStart(2, '0')}</span><span class="exam-theme-name">${escapeHtml(area.name)}<small>${area.courses.length} core courses · ${area.credits} credits</small></span><span class="exam-theme-weight">${escapeHtml(area.weight)}<small>of questions</small></span><span class="exam-theme-count">${area.questions}<small>items</small></span></summary>
    <div class="exam-theme-content">${area.courses.map(course => `<article class="exam-course-row">
      <button class="exam-course-open" type="button" data-exam-code="${escapeHtml(course.code)}"><span class="exam-course-code">${escapeHtml(course.code)} · ${course.credits} CR</span><strong>${escapeHtml(course.title)}</strong><span class="exam-open-label">VIEW COURSE ↗</span></button>
      <div class="exam-competencies"><h3>Competencies to review</h3><ul>${course.competencies.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
      ${course.books?.length ? `<details class="exam-books"><summary>Reference books <span>${course.books.length}</span></summary><ul>${course.books.map(book => `<li>${escapeHtml(book)}</li>`).join('')}</ul></details>` : ''}
    </article>`).join('')}</div>
  </details>`).join('');
}

function renderDetail() {
  const course = activeCourse;
  const curriculumLabel = [
    curriculumCategory(course),
    dualMinorCodes.has(normalizeCode(course.code)) ? 'Also part of the dual-minor curriculum' : null
  ].filter(Boolean).join(' · ');
  const meta = [
    `YEAR ${course.year}`,
    course.semester.toUpperCase(),
    course.credits ? course.credits === 'P/F' ? 'PASS / FAIL' : `${course.credits} CREDIT HOURS` : null,
    course.ects ? `${course.ects} ECTS` : null,
    course.duration || null
  ].filter(Boolean);
  const prerequisite = prerequisiteWithTitles(course.prerequisite || 'Not specified');

  const outline = courseOutlines[normalizeCode(course.code)];
  const downloadConfig = getDownloadConfig();
  const archiveUrl = downloadConfig.channelUsername
    ? `https://t.me/${encodeURIComponent(downloadConfig.channelUsername)}`
    : '';
  const detailContent = outline
    ? `<p class="course-description">${escapeHtml(outline.description || 'The PDF does not provide a course synopsis.')}</p>${outline.units?.length ? `<div class="syllabus-list">${outline.units.map(renderSyllabusUnit).join('')}</div>` : ''}`
    : `<p class="course-description">A detailed topic breakdown will be added when its course outline is provided.</p>`;
  const supportingContent = outline ? `<article class="detail-panel course-support">
      ${outline.outcomes ? `<section class="course-extra"><h3>${escapeHtml(outline.outcomeHeading || 'Course learning outcomes')}</h3><ul>${outline.outcomes.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>` : ''}
      ${outline.resources ? `<section class="course-extra"><h3>Tools and practical resources</h3><ul>${outline.resources.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>` : ''}
      ${outline.workload ? `<section class="course-extra"><h3>Course workload</h3><p>${escapeHtml(outline.workload)}</p></section>` : ''}
      ${outline.books ? `<details class="course-books"><summary>Recommended books <span>${outline.books.length}</span></summary><ol>${outline.books.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ol></details>` : ''}
    </article>` : '';

  document.getElementById('courseDetail').innerHTML = `<section class="detail-hero">
    <p class="eyebrow">${escapeHtml(course.code)} &nbsp; / &nbsp; ${escapeHtml(course.semester.toUpperCase())}</p>
    <h1 class="detail-title">${escapeHtml(course.title)}</h1>
    <p class="detail-sub">${escapeHtml(curriculumLabel)}</p>
    <p class="detail-prerequisite"><strong>PREREQUISITE</strong> ${escapeHtml(prerequisite)}</p>
    <div class="detail-meta">${meta.map(item => `<span class="meta-pill">${escapeHtml(item)}</span>`).join('')}</div>
  </section>
  <section class="detail-columns">
    <div>${supportingContent}${outline ? '' : `<div class="detail-aside"><b>COURSE DETAILS</b>Course breakdown will be added when its outline is provided.</div>`}</div>
    <div><article class="detail-panel"><p class="eyebrow">COURSE OUTLINE</p><h2 class="panel-title">Chapters</h2>${detailContent}
      <section class="course-downloads" aria-live="polite" data-downloads-for="${escapeHtml(course.code)}">
        <div class="download-heading"><div><p class="eyebrow">STUDY FILES</p><h3>Files for this course</h3></div><div class="download-tools">${archiveUrl ? `<a class="archive-link" href="${escapeHtml(archiveUrl)}" data-telegram-link="${escapeHtml(archiveUrl)}">OPEN ARCHIVE ↗</a>` : ''}<span class="download-count">…</span></div></div>
        <p class="download-status">Checking the Telegram catalog…</p>
        <div class="download-list"></div>
      </section>
    </article></div>
  </section>`;
  loadCourseFiles(course.code);
}

function getDownloadConfig() {
  const config = window.ECE_DOWNLOAD_CONFIG || {};
  return {
    apiBaseUrl: String(config.apiBaseUrl || '').replace(/\/$/, ''),
    botUsername: String(config.botUsername || '').replace(/^@/, ''),
    channelUsername: String(config.channelUsername || '').replace(/^@/, '')
  };
}

async function loadCourseFiles(courseCode) {
  const getSection = () => Array.from(document.querySelectorAll('[data-downloads-for]'))
    .find(element => element.dataset.downloadsFor === courseCode);
  const section = getSection();
  if (!section) return;
  const status = section.querySelector('.download-status');
  const list = section.querySelector('.download-list');
  const count = section.querySelector('.download-count');
  const { apiBaseUrl, botUsername } = getDownloadConfig();
  if (!apiBaseUrl) {
    status.textContent = 'Telegram downloads will appear here after setup.';
    count.textContent = '0 FILES';
    return;
  }

  try {
    const url = new URL(`${apiBaseUrl}/api/files`);
    url.searchParams.set('code', normalizeCode(courseCode));
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error('Catalog unavailable');
    const files = await response.json();
    if (!Array.isArray(files) || !getSection()) return;
    count.textContent = `${files.length} FILE${files.length === 1 ? '' : 'S'}`;
    if (!files.length) {
      status.textContent = 'No files have been posted for this course yet.';
      return;
    }
    status.textContent = '';
    list.innerHTML = files.map((file, index) => {
      const requestUrl = botUsername
        ? `https://t.me/${encodeURIComponent(botUsername)}?start=${encodeURIComponent(file.id)}`
        : `https://t.me/${encodeURIComponent(getDownloadConfig().channelUsername)}/${encodeURIComponent(file.id)}`;
      const actionLabel = botUsername ? 'GET FILE ↗' : 'VIEW IN CHANNEL ↗';
      return `<article class="download-row"><span class="download-index">${String(index + 1).padStart(2, '0')}</span><div class="download-info"><strong>${escapeHtml(file.title)}</strong><small>${escapeHtml(file.type)} · ${escapeHtml(file.courseCode)}</small></div><a class="download-button" href="${escapeHtml(requestUrl)}" data-telegram-link="${escapeHtml(requestUrl)}">${actionLabel}</a></article>`;
    }).join('');
  } catch {
    status.textContent = 'The Telegram file catalog is temporarily unavailable.';
    count.textContent = '—';
  }
}

function showView(view, scrollToTop = true) {
  document.getElementById('homeView').hidden = view !== 'courses';
  document.getElementById('detailView').hidden = view !== 'detail';
  document.getElementById('examView').hidden = view !== 'exam';
  document.getElementById('coursesNav').classList.toggle('active', view === 'courses');
  document.getElementById('examNav').classList.toggle('active', view === 'exam');
  window.Campus?.setDetailOpen(view !== 'courses');
  if (scrollToTop) scrollToPositionImmediately(0);
}

function scrollToPositionImmediately(position) {
  const root = document.documentElement;
  const scrollRoot = document.scrollingElement || root;
  const top = Math.max(0, position);
  root.classList.add('restore-position');
  scrollRoot.scrollTop = top;
  document.body.scrollTop = top;
  window.scrollTo(0, top);
  requestAnimationFrame(() => {
    scrollRoot.scrollTop = top;
    document.body.scrollTop = top;
    root.classList.remove('restore-position');
  });
}

function saveViewScrollPosition(view, position = window.scrollY) {
  const scrollY = Math.max(0, Math.round(position));
  if (view === 'exam') {
    exitExamScrollY = scrollY;
    localStorage.setItem('campus-scroll-exam', String(scrollY));
  } else if (view === 'courses') {
    allCoursesScrollY = scrollY;
    localStorage.setItem('campus-scroll-courses', String(scrollY));
  }
}

function currentListView() {
  return document.getElementById('examView').hidden ? 'courses' : 'exam';
}

function switchToView(view) {
  if (!activeCourse && !document.getElementById('detailView').hidden) {
    saveViewScrollPosition(detailReturnView);
  } else if (!activeCourse) {
    saveViewScrollPosition(currentListView());
  }
  activeCourse = null;
  showView(view, false);
  restoreScrollPosition(view === 'exam' ? exitExamScrollY : allCoursesScrollY);
}

function restoreScrollPosition(position) {
  const root = document.documentElement;
  restoringScrollPosition = true;
  root.classList.add('restore-position');
  requestAnimationFrame(() => {
    window.scrollTo(0, Math.max(0, position));
    requestAnimationFrame(() => {
      root.classList.remove('restore-position');
      restoringScrollPosition = false;
      saveViewScrollPosition(currentListView());
    });
  });
}

window.backToCourses = () => {
  if (activeCourse) {
    document.getElementById('backButton').click();
  } else if (!document.getElementById('examView').hidden) {
    document.getElementById('examBackButton').click();
  }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

courseList.addEventListener('click', event => {
  const semesterToggle = event.target.closest('[data-semester-toggle]');
  if (semesterToggle) {
    const isExpanded = semesterToggle.getAttribute('aria-expanded') === 'true';
    const semesterId = semesterToggle.dataset.semesterToggle;
    const courseCards = document.getElementById(semesterToggle.getAttribute('aria-controls'));
    courseCards.hidden = isExpanded;
    semesterToggle.setAttribute('aria-expanded', String(!isExpanded));
    semesterToggle.classList.toggle('collapsed', isExpanded);
    if (isExpanded) collapsedSemesters.add(semesterId);
    else collapsedSemesters.delete(semesterId);
    return;
  }

  const card = event.target.closest('[data-course]');
  if (card) openCourse(card.dataset.course);
});
document.getElementById('examGuide').addEventListener('click', event => {
  const courseButton = event.target.closest('[data-exam-code]');
  if (!courseButton) return;
  const course = courseIndex.find(item => normalizeCode(item.code) === normalizeCode(courseButton.dataset.examCode));
  if (course) openCourse(courseKey(course));
});
yearFilter.addEventListener('change', renderCatalog);
searchInput.addEventListener('input', renderCatalog);
document.getElementById('backButton').addEventListener('click', () => {
  activeCourse = null;
  showView(detailReturnView, false);
  restoreScrollPosition(detailReturnView === 'exam' ? exitExamScrollY : allCoursesScrollY);
});
document.getElementById('coursesNav').addEventListener('click', event => {
  event.preventDefault();
  switchToView('courses');
});
document.getElementById('examNav').addEventListener('click', event => {
  event.preventDefault();
  switchToView('exam');
});
document.getElementById('examBackButton').addEventListener('click', () => switchToView('courses'));
window.addEventListener('scroll', () => {
  if (activeCourse || restoringScrollPosition || scrollSaveFrame) return;
  scrollSaveFrame = requestAnimationFrame(() => {
    scrollSaveFrame = 0;
    if (!activeCourse && !restoringScrollPosition) {
      saveViewScrollPosition(currentListView());
    }
  });
}, { passive: true });
document.getElementById('themeToggle').addEventListener('click', () => {
  const enabled = !document.body.classList.contains('theme-dark');
  document.body.classList.toggle('theme-dark', enabled);
  localStorage.setItem('campus-theme', enabled ? 'dark' : 'light');
  document.querySelector('.theme-label').textContent = enabled ? 'LIGHT MODE' : 'DARK MODE';
  document.querySelector('meta[name="theme-color"]').content = enabled ? '#202521' : '#f4f0e7';
  window.Campus?.setDark(enabled);
});

document.getElementById('courseDetail').addEventListener('click', event => {
  const link = event.target.closest('[data-telegram-link]');
  if (!link) return;
  const bridge = window.Campus;
  if (bridge?.openTelegram) {
    event.preventDefault();
    bridge.openTelegram(link.dataset.telegramLink);
  }
});

if (localStorage.getItem('campus-theme') === 'dark') {
  document.body.classList.add('theme-dark');
  document.querySelector('.theme-label').textContent = 'LIGHT MODE';
  document.querySelector('meta[name="theme-color"]').content = '#202521';
}
window.Campus?.setDark(document.body.classList.contains('theme-dark'));
renderCatalog();
renderExitExamGuide();
if (allCoursesScrollY > 0) restoreScrollPosition(allCoursesScrollY);

const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
if (heroSlides.length > 1) {
  const heroTrack = document.querySelector('.hero-track');
  heroTrack.style.setProperty('--slide-count', heroSlides.length);
  let activeHeroSlide = 0;
  window.setInterval(() => {
    activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
    heroTrack.style.transform = `translateX(-${activeHeroSlide * (100 / heroSlides.length)}%)`;
  }, 5000);
}

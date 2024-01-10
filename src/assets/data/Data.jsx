import thesis from "../img/christian_larrea_thesis.pdf";
import {
  FaLinkedinIn,
  FaOrcid,
  FaRegMessage,
  FaPhone,
  FaGithub,
} from "react-icons/fa6";

const contact = [
  {
    type: "linkedIn",
    link: "https://www.linkedin.com/in/christian-larrea/",
    icon: <FaLinkedinIn />,
  },
  {
    type: "mobile",
    link: "tel:00447522140226",
    icon: <FaPhone />,
  },
  {
    type: "email",
    link: "mailto:crlarrea@protonmail.com",
    icon: <FaRegMessage />,
  },
  {
    type: "orcid",
    link: "https://orcid.org/0000-0001-7579-7876",
    icon: <FaOrcid />,
  },
  {
    type: "github",
    link: "https://github.com/crlarrea",
    icon: <FaGithub />,
  },
];

const publications = [
  {
    title:
      "Copper adatoms mediated adsorption of benzotriazole on a gold substrate",
    authors: [
      "Federico Grillo",
      "Chiara Gattinoni",
      "Christian R. Larrea",
      "Paolo Lacovig",
      "Neville V. Richardson",
    ],
    journal: "Applied Surface Science 600 (2022): 154087",
    year: 2022,
    link: "https://www.sciencedirect.com/science/article/pii/S0169433222016233",
  },
  {
    title:
      "On-surface condensation of low-dimensional benzotriazole–copper assemblies",
    authors: [
      "Grillo",
      "Federico",
      "David Batchelor",
      "Christian R. Larrea",
      "Stephen M. Francis",
      "Paolo Lacovig",
      "and Neville V. Richardson",
    ],
    journal: "Nanoscale 11, no. 27 (2019): 13017-13031.",
    year: 2019,
    link: "https://pubs.rsc.org/en/content/articlelanding/2019/nr/c9nr04152d",
  },
  {
    title:
      "Investigation of Robust Surface Molecular Architectures under Ultra-High Vacuum",
    authors: ["Christian R. Larrea"],
    journal: "PhD Thesis (2018)",
    year: 2018,
    link: thesis,
  },

  {
    title:
      "N‐Heterocyclic Carbene Self‐assembled Monolayers on Copper and Gold: Dramatic Effect of Wingtip Groups on Binding, Orientation and Assembly",
    authors: [
      "Larrea Christian",
      "Christopher J. Baddeley",
      "Mina R. Narouz",
      "Nicholas J. Mosey",
      "J. Hugh Horton",
      "Cathleen M. Crudden",
    ],
    journal: "ChemPhysChem 18, no. 24 (2017): 3536-3539",
    year: 2017,
    link: "https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/cphc.201701045",
  },
  {
    title: "Etching metal using N-heterocyclic carbenes",
    authors: [
      "Mariampillai B.E.",
      "Alrashed A.R.E.",
      "Crudden C. M.",
      "Horton J.H.",
      "Baddeley C.J.",
      "Larrea C.R.",
    ],
    journal: "Patents: CA3026196A1, WO2017205980A1 (2016)",
    year: 2016,
    link: "https://patents.google.com/patent/CA3026196A1/en",
  },
  {
    title:
      "Simple direct formation of self-assembled N-heterocyclic carbene monolayers on gold and their application in biosensing",
    authors: [
      "Crudden CM",
      "Horton JH",
      "Narouz MR",
      "Li Z",
      "Smith CA",
      "Munro K",
      "Baddeley CJ",
      "Larrea CR",
      "Drevniok B",
      "Thanabalasingam B",
      "McLean AB",
    ],
    journal: "Nature communications 7, no. 1 (2016): 1-7",
    year: 2016,
    link: "https://www.nature.com/articles/ncomms12654",
  },
  {
    title:
      "Two-dimensional self-assembly of benzotriazole on an inert substrate",
    authors: [
      "Grillo Federico",
      "JA Garrido Torres",
      "M-J. Treanor",
      "Christian Rodriguez Larrea",
      "Jan Philipp Götze",
      "Paolo Lacovig",
      "H. A. Früchtl",
      "Renald Schaub",
      "Neville V. Richardson",
    ],
    journal: "Nanoscale 8, no. 17 (2016): 9167-9177",
    year: 2016,
    link: "https://pubs.rsc.org/en/content/articlepdf/2016/nr/c6nr00821f",
  },
  {
    title:
      "Fabrication of a High-Quality, Porous, Surface-Confined Covalent Organic Framework on a Reactive Metal Surface",
    authors: ["Larrea, Christian R.", "Christopher J. Baddeley"],
    journal: "ChemPhysChem 17, no. 7 (2016): 971-975",
    year: 2016,
    link: "https://chemistry-europe.onlinelibrary.wiley.com/doi/epdf/10.1002/cphc.201600027",
  },
  {
    title:
      "Metallosupramolecular Assembly of Cr and p-Terphenyldinitrile by Dissociation of Metal Carbonyls on Au (111)",
    authors: [
      "Anderson Amanda E.",
      "Federico Grillo",
      "Christian R. Larrea",
      "Riho T. Seljamäe-Green",
      "Herbert A. Früchtl",
      "Christopher J. Baddeley",
    ],
    journal: "The Journal of Physical Chemistry C 120, no. 2 (2016): 1049-1055",
    year: 2016,
    link: "https://pubs.acs.org/doi/10.1021/acs.jpcc.5b10489",
  },
];

const workExperience = [
  {
    title: "implementation engineer",
    company: "Spotlight Sports Group",
    location: "London",
    country: "GB",
    from: "Apr 2022",
    to: "Aug 2023",
    responsibilities: [
      "Proficiently administered and resolved issues within the Segment Customer Data Platform (CDP), Personas, Protocols, and Braze, demonstrating exceptional command over these pivotal systems.",
      "Skillfully crafted and consistently upheld JSON schemas to establish a robust foundation for data governance, ensuring data integrity and compliance.",
      "Led seamless migration and optimization efforts for Google Tag Manager (GTM) tags, enhancing digital tracking accuracy and efficiency.",
      "Developed Python scripts to facilitate web scraping and automation.",
      "Harnessed business insights to articulate and transform them into actionable tasks, aligning strategic goals with practical implementation.",
    ],
  },
  {
    title: "jr. implementation analyst",
    company: "Spotlight Sports Group",
    location: "London",
    country: "GB",
    from: "Sep 2021",
    to: "Apr 2022",
    responsibilities: [
      "Proficiently engineered, debugged, and deployed custom JavaScript scripts within Google Tag Manager (GTM), showcasing a mastery of custom script development to enhance digital tracking capabilities.",
      "Crafted tracking plans, serving as the foundation for precise data collection and analysis, thereby optimizing decision-making processes.",
      "Designed Adhoc Python solutions for troubleshooting and automation of tasks.",
      "Developed a bespoke Slack App, facilitating the dissemination of reports and automated notifications, elevating team collaboration and productivity.",
    ],
  },
  {
    title: "programmer",
    company: "Freelance",
    location: "Las Palmas",
    country: "SP",
    from: "Apr 2020",
    to: "Sep 2021",
    responsibilities: [
      "Developed a web-based database querying interface leveraging a dynamic blend of HTML, CSS, JavaScript, MySQL, and PHP for seamless data retrieval.",
      "Engineered automation scripts for the generation of invoices from Excel files, employing the synergistic capabilities of the Python pandas library and LuaLaTeX",
      "Created an e-commerce platform with robust security measures for online payments and streamlined shipping logistics, integrating the SumUp payment gateway, Woocommerce, and custom HTML+CSS seamlessly within the WordPress framework.",
      "Developed a console-based administrative tool for record-keeping and email automation.",
    ],
  },
  {
    title: "data analyst",
    company: "XPS Pension Group",
    location: "Belfast",
    country: "GB",
    from: "Jan 2020",
    to: "Apr 2020",
    responsibilities: [
      "Extracted, processed, and analyzed confidential client data, demonstrating a commitment to data integrity and security.",
      "Deployed VBA scripts and Excel formulas to model and visualize data, contributing to data-driven decision-making processes.",
      "Conducted thorough research on pension schemes and legislation pertaining to Guaranteed Minimum Pension equalization",
      "Exercised due diligence in the review of emerging data collection protocols, while actively collaborating with project management and client teams to fulfill their specific requests, thereby fostering productive partnerships and project success.",
    ],
  },
  {
    title: "resort customer helper",
    company: "Jet2holidays",
    location: "San Bartolomé de Tirajana",
    country: "SP",
    from: "Aug 2019",
    to: "Oct 2019",
    responsibilities: [
      "Delivered on-site customer support to holidaymakers, offering valuable guidance and assistance regarding local amenities, accommodation options, and transportation services.",
      "Consistently met and exceeded monthly sales targets by effectively promoting and selling excursions, theme park tickets, and show tickets, contributing to revenue growth.",
      "Professionally managed customer complaints, serving as a liaison with hotel management, and skillfully mediated conflicts to ensure guest satisfaction and resolution.",
      "Handled cash and credit card payments, reimbursements, and liquidations.",
    ],
  },
  {
    title: "scientific writer",
    company: "Upwork",
    location: "Telde",
    country: "SP",
    from: "Jan 2019",
    to: "Mar 2019",
    responsibilities: [
      "Produced top-tier academic content tailored for publication in esteemed scientific journals, consistently upholding the highest standards of quality.",
      "Provided support to researchers by reviewing and editing materials science articles, ensuring their readiness for submission to peer review processes.",
      "Established effective communication channels with publishers and clients, adeptly coordinating to meet project requirements and objectives in a timely manner, demonstrating a commitment to project success.",
    ],
  },
  {
    title: "post-doctoral fellow",
    company: "Queen's University",
    location: "Kingston",
    country: "CA",
    from: "Sep 2018",
    to: "Jan 2019",
    responsibilities: [
      "Appointed as the project leader for an investigation into the chemisorption of N-heterocyclic carbenes on silver films, aimed at advancing plasmonic biosensing technology.",
      "Developed a contamination-free process for adsorbing N-heterocyclic carbenes onto silver surfaces.",
      "Applied a suite of advanced characterization techniques including X-ray photoelectron spectroscopy, cyclic voltammetry, chronoamperometry, and atomic force microscopy to analyze self-assembled monolayers.",
      "Processed, modelled, and fitted spectroscopic and voltammetric data on Matlab/Octave.",
      "Delivered comprehensive reports summarizing data collection, interpretation, and strategic recommendations, fostering informed decision-making.",
      "Provided support to laboratory technicians by assisting with their workload and troubleshooting as needed.",
      "Mentored Master's students in their research endeavors and dissertation writing tasks, contributing to their academic and professional development.",
      "Ensured a clean and safe laboratory environment by diligently enforcing health and safety regulations during routine laboratory work.",
    ],
  },
  {
    title: "graduate researcher",
    company: "University of St Andrews",
    location: "St Andrews",
    country: "GB",
    from: "Nov 2013",
    to: "Jun 2018",
    responsibilities: [
      "Pioneered a protocol for crafting surface-confined covalent organic frameworks onto gold-palladium alloys, advancing materials fabrication techniques.",
      "Utilized statistical tools to quantitatively describe surface nanoarchitectures, enhancing the precision of data analysis.",
      "Conducted rigorous investigations into the in-vacuo adsorption of N-heterocyclic carbenes onto gold and copper surfaces, exploring the influence of substituents on their binding modes.",
      "Validated the reduction of a model copper oxide to metallic copper through the adsorption of N-heterocyclic carbenes, contributing to our understanding of surface chemistry.",
      "Authored scholarly articles and secured patents, contributing to intellectual property and scientific discourse.",
      "Effectively communicated research findings at conferences, school meetings, and colloquia, facilitating knowledge dissemination.",
      "Performed maintenance, assembly, and customization of ultra-high vacuum equipment, ensuring optimal functionality and reliability.",
    ],
  },
  {
    title: "laboratory demonstrator",
    company: "University of St Andrews",
    location: "St Andrews",
    country: "GB",
    from: "Feb 2014",
    to: "Jun 2017",
    responsibilities: [
      "Provided valuable support to Master's students by guiding them through laboratory coursework and offering expertise in data interpretation.",
      "Instructed undergraduate students in experimental physical chemistry techniques, actively assessing their progress and academic development.",
      "Efficiently facilitated educational resources and conducted private lessons to promote enhanced learning outcomes.",
    ],
  },
];

const training = [
  {
    course: "dbt Fundamentals",
    to: "Jan 2024",
    issuer: "dbt Labs",
    issuerCrest: null,
    credential: 'https://www.credential.net/a18d2ce3-5cc1-4351-97ad-e26c961325c6#gs.3bp5m9',
    description: [
     'models',
     'sources',
     'tests',
     'documentation',
     'deployment'
    ],
  },
  {
    course: "SQL for Data Analysis",
    to: "Dec 2023",
    issuer: "Udacity",
    issuerCrest: null,
    credential: null,
    description: [
     "basic SQL",
     "joins",
     "aggregations",
     "subqueries & temporary tables",
     "data cleaning",
     "window functions",
     "advanced joins & performance tuning"
    ],
  },
  {
    course: "Analytics Academy",
    to: "Dec 2022",
    issuer: "Segment",
    issuerCrest: null,
    credential: null,
    description: [
      "intro to analytics",
      "collecting the right data",
      "choosing the right stack",
      "building a data driven company",
      "grow using data",
      "advanced analytics",
    ],
  },
  {
    course: "Segment University",
    to: "Oct 2021",
    issuer: "Segment",
    issuerCrest: null,
    credential: null,
    description: ["segment 101", "segment 201"],
  },
  {
    course: "The Complete JavaScript Course 2022: From Zero to Expert!",
    to: "may 2022",
    issuer: "udemy",
    issuerCrest: "udemy.png",
    credential:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bf003e46-e611-4835-b388-dbdfb701cadd.pdf",
    description: ["javascript", "html", "css", "oop", "ajax", "npm", "es6"],
  },
  {
    course: "JavaScript Algorithms and Data Structures",
    to: "may 2021",
    issuer: "freeCodeCamp",
    issuerCrest: "freecodecamp.png",
    credential:
      "https://www.freecodecamp.org/certification/fcc3b3885ac-f95e-447b-a936-c63717d4065d/javascript-algorithms-and-data-structures",
    description: [
      "javascript",
      "regex",
      "debugging",
      "data structures",
      "algorithmic scripting",
      "oop",
      "functional programming",
    ],
  },
  {
    course: "Responsive Web Design",
    to: "mar 2021",
    issuer: "freeCodeCamp",
    issuerCrest: "freecodecamp.png",
    credential:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bf003e46-e611-4835-b388-dbdfb701cadd.pdf",
    description: [
      "html",
      "css",
      "visual design",
      "accessibility",
      "responsive design",
    ],
  },
  {
    course: "Python for Data Science",
    to: "jun 2019",
    issuer: "edx",
    issuerCrest: "edx.png",
    credential: null,
    description: [
      "python",
      "numpy",
      "pandas",
      "jupyter notebooks",
      "statistical analysis",
      "data visualisation",
    ],
  },
  {
    course: "Python for Everybody Specialization",
    to: "apr 2015",
    issuer: "coursera",
    issuerCrest: "coursera.png",
    credential: null,
    description: [
      "python",
      "json",
      "xml",
      "dbms",
      "data structures",
      "web scraping",
      "sql",
    ],
  },
];

const projects = [
  {
    name: "long lane",
    description: "A digital analytics agency landing page.",
    tags: ["react", "hooks", "js", "html", "css", "rudderstack", "forms"],
    image: null,
    link: "https://long-lane.onrender.com",
  },
  {
    name: "Slayyyter",
    description: "Slayyyter landing page.",
    tags: ["react", "hooks", "js", "html", "css"],
    image: null,
    link: "https://slayyyter.onrender.com/",
  },
  {
    name: "lucky cats",
    description: "Landing page for a product display.",
    tags: ["react", "js", "html", "css"],
    image: null,
    link: "https://lucky-cats.onrender.com/",
  },
  {
    name: "anime characters",
    description: "Catalogue of anime characters.",
    tags: ["react", "js", "html", "css", "infinite scrolling"],
    image: null,
    link: "https://anime-characters.onrender.com/",
  },
  {
    name: "ghibli films",
    description: "List of Ghibli Studios films.",
    tags: ["react", "hooks", "js", "html", "css"],
    image: null,
    link: "https://ghibli.onrender.com",
  },
  {
    name: "BFC",
    description: "Broughty Ferry Community landing page.",
    tags: ["react", "js", "html", "css"],
    image: null,
    link: "https://broughty-ferry-community.onrender.com/",
  },
  // {
  //   name: "angus cat rescue",
  //   description: "Cat rescue web app.",
  //   tags: ["react", "js", "html", "css"],
  //   image: null,
  //   link: "https://angus-nig8.onrender.com",
  // },
];

const keys = { web3forms: "db402685-15ef-4d07-a871-0a87e03e899d" };

export { contact, publications, workExperience, training, projects, keys };
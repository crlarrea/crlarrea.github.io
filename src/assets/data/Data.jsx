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
      'Copper adatoms mediated adsorption of benzotriazole on a gold substrate',
    authors: [
      'Federico Grillo',
      'Chiara Gattinoni',
      'Christian R. Larrea',
      'Paolo Lacovig',
      'Neville V. Richardson',
    ],
    journal: 'Applied Surface Science 600 (2022): 154087',
    year: 2022,
    link: 'https://www.sciencedirect.com/science/article/pii/S0169433222016233',
  },
  {
    title:
      'On-surface condensation of low-dimensional benzotriazole–copper assemblies',
    authors: [
      'Grillo',
      'Federico',
      'David Batchelor',
      'Christian R. Larrea',
      'Stephen M. Francis',
      'Paolo Lacovig',
      'and Neville V. Richardson',
    ],
    journal: 'Nanoscale 11, no. 27 (2019): 13017-13031.',
    year: 2019,
    link: 'https://pubs.rsc.org/en/content/articlelanding/2019/nr/c9nr04152d',
  },
  {
    title:
      'Investigation of Robust Surface Molecular Architectures under Ultra-High Vacuum',
    authors: ['Christian R. Larrea'],
    journal: 'PhD Thesis (2018)',
    year: 2018,
    link: '../src/assets/img/christian_larrea_thesis.pdf',
  },

  {
    title:
      'N‐Heterocyclic Carbene Self‐assembled Monolayers on Copper and Gold: Dramatic Effect of Wingtip Groups on Binding, Orientation and Assembly',
    authors: [
      'Larrea Christian',
      'Christopher J. Baddeley',
      'Mina R. Narouz',
      'Nicholas J. Mosey',
      'J. Hugh Horton',
      'Cathleen M. Crudden',
    ],
    journal: 'ChemPhysChem 18, no. 24 (2017): 3536-3539',
    year: 2017,
    link: 'https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/cphc.201701045',
  },
  {
    title: 'Etching metal using N-heterocyclic carbenes',
    authors: [
      'Mariampillai B.E.',
      'Alrashed A.R.E.',
      'Crudden C. M.',
      'Horton J.H.',
      'Baddeley C.J.',
      'Larrea C.R.',
    ],
    journal: 'Patents: CA3026196A1, WO2017205980A1 (2016)',
    year: 2016,
    link: 'https://patents.google.com/patent/CA3026196A1/en',
  },
  {
    title:
      'Simple direct formation of self-assembled N-heterocyclic carbene monolayers on gold and their application in biosensing',
    authors: [
      'Crudden CM',
      'Horton JH',
      'Narouz MR',
      'Li Z',
      'Smith CA',
      'Munro K',
      'Baddeley CJ',
      'Larrea CR',
      'Drevniok B',
      'Thanabalasingam B',
      'McLean AB',
    ],
    journal: 'Nature communications 7, no. 1 (2016): 1-7',
    year: 2016,
    link: 'https://www.nature.com/articles/ncomms12654',
  },
  {
    title:
      'Two-dimensional self-assembly of benzotriazole on an inert substrate',
    authors: [
      'Grillo Federico',
      'JA Garrido Torres',
      'M-J. Treanor',
      'Christian Rodriguez Larrea',
      'Jan Philipp Götze',
      'Paolo Lacovig',
      'H. A. Früchtl',
      'Renald Schaub',
      'Neville V. Richardson',
    ],
    journal: 'Nanoscale 8, no. 17 (2016): 9167-9177',
    year: 2016,
    link: 'https://pubs.rsc.org/en/content/articlepdf/2016/nr/c6nr00821f',
  },
  {
    title:
      'Fabrication of a High-Quality, Porous, Surface-Confined Covalent Organic Framework on a Reactive Metal Surface',
    authors: ['Larrea, Christian R.', 'Christopher J. Baddeley'],
    journal: 'ChemPhysChem 17, no. 7 (2016): 971-975',
    year: 2016,
    link: 'https://chemistry-europe.onlinelibrary.wiley.com/doi/epdf/10.1002/cphc.201600027',
  },
  {
    title:
      'Metallosupramolecular Assembly of Cr and p-Terphenyldinitrile by Dissociation of Metal Carbonyls on Au (111)',
    authors: [
      'Anderson Amanda E.',
      'Federico Grillo',
      'Christian R. Larrea',
      'Riho T. Seljamäe-Green',
      'Herbert A. Früchtl',
      'Christopher J. Baddeley',
    ],
    journal:
      'The Journal of Physical Chemistry C 120, no. 2 (2016): 1049-1055',
    year: 2016,
    link: 'https://pubs.acs.org/doi/10.1021/acs.jpcc.5b10489',
  },
];

const workExperience = [
  {
    title: 'implementation engineer',
    company: 'Spotlight Sports Group',
    location: 'London',
    country: 'GB',
    from: 'Apr 2022',
    to: 'Aug 2023',
    responsibilities: [
      'Managed and troubleshot Segment CDP, Personas, Protocols and Braze.',
      'Designed and maintained JSON schemas for data governance.',
      'Migrated and refactored GTM tags.',
      'Developed Python scripts for web scraping and automation.',
      'Gathered and translated business requirements into actionable tasks.',
    ],
  },
  {
    title: 'jr. implementation analyst',
    company: 'Spotlight Sports Group',
    location: 'London',
    country: 'GB',
    from: 'Sep 2021',
    to: 'Apr 2022',
    responsibilities: [
      'Developed, debugged and deployed custom JS scripts in GTM.',
      'Created and managed tracking plans.',
      'Designed Adhoc Python solutions for troubleshooting and automation of tasks.',
      'Developed a Slack App for the broadcasting of reports and automated notifications.',
    ],
  },
  {
    title: 'programmer',
    company: 'Freelance',
    location: 'Las Palmas',
    country: 'SP',
    from: 'Apr 2020',
    to: 'Sep 2021',
    responsibilities: [
      'Developed a web-based interface for database querying through HTML, CSS, JavaScript, MySQL, and PHP.',
      'Developed scripts for the automation of invoice generation based on Excel files through a combination of Python pandas library and LuaLaTex.',
      'Created an ecommerce website with secure online payment and shipping by integrating the SumUp platform, Woocommerce, and custom HTML+CSS into Wordpress.',
      'Designed a console-based administration software for record-keeping and email automation.',
    ],
  },
  {
    title: 'data analyst',
    company: 'XPS Pension Group',
    location: 'Belfast',
    country: 'GB',
    from: 'Jan 2020',
    to: 'Apr 2020',
    responsibilities: [
      'Extracted, processed, and analysed sensitive client data.',
      'Developed, debugged, and deployed VBA scripts and Excel formulas for modelling and visualisation of data.',
      'Researched pension schemes and legislation related to Guaranteed Minimum Pension equalisation.',
      'Reviewed new data collection protocols and liaised with requests from project management and client teams.',
    ],
  },
  {
    title: 'resort customer helper',
    company: 'Jet2holidays',
    location: 'San Bartolomé de Tirajana',
    country: 'SP',
    from: 'Aug 2019',
    to: 'Oct 2019',
    responsibilities: [
      'Provided in-resort customer support holidaymakers concerning local amenities, accommodation, and transport.',
      'Achieved monthly turNovers of €4000 through sales of excursions, theme parks and shows tickets.',
      'Managed complaints, liaised with hotel management and mediated conflicts',
      'Dealt with cash and credit card payments, reimbursements, and liquidations.',
    ],
  },
  {
    title: 'scientific writer',
    company: 'Upwork',
    location: 'Telde',
    country: 'SP',
    from: 'Jan 2019',
    to: 'Mar 2019',
    responsibilities: [
      'Delivered high-quality pieces of academic writing intended for publication in scientific journals.',
      'Assisted researchers in reviewing and editing material science articles prior to submission to peer review.',
      'Liaised with publishers and clients to achieve project requirements and goals promptly.',
    ],
  },
  {
    title: 'post-doctoral fellow',
    company: "Queen's University",
    location: 'Kingston',
    country: 'CA',
    from: 'Sep 2018',
    to: 'Jan 2019',
    responsibilities: [
      'Appointed to lead the project on chemisorption of N-heterocyclic carbenes on silver films for plasmonic biosensing.',
      'Devised a contamination-free process for the adsorption of N-heterocyclic carbenes onto silver surfaces.',
      'Employed X-ray photoelectron spectroscopy, cyclic voltammetry, chronoamperometry and atomic force microscopy in the characterisation of self-assembled monolayers.',
      'Processed, modelled, and fitted spectroscopic and voltammetric data on Matlab/Octave.',
      'Delivered comprehensive reports about the data collected, their interpretation, and recommendations.',
      'Assisted technicians with their workload and troubleshooting.',
      'Mentored Master students in their research and dissertation writing tasks.',
      'Maintained a clean and safe environment by ensuring that routine laboratory work adhered to health and safety regulations.',
    ],
  },
  {
    title: 'graduate researcher',
    company: 'University of St Andrews',
    location: 'St Andrews',
    country: 'GB',
    from: 'Nov 2013',
    to: 'Jun 2018',
    responsibilities: [
      'Engineered a protocol for the fabrication of surface-confined covalent organic frameworks onto gold-palladium alloys.',
      'Applied statistic tools in the quantitative description of surface nanoarchitectures.',
      'Demonstrated the in-vacuo adsorption of N-heterocyclic carbenes to gold and copper surfaces and the effect of substituents in their binding mode.',
      'Proved the reduction of a model copper oxide to metallic copper by the adsorption of N-heterocyclic carbenes.',
      'Authored scientific articles and patents.',
      'Presented results in conferences, school meetings, and colloquia.',
      'Maintained, assembled, and modified ultra-high vacuum equipment.',
    ],
  },
  {
    title: 'laboratory demonstrator',
    company: 'University of St Andrews',
    location: 'St Andrews',
    country: 'GB',
    from: 'Feb 2014',
    to: 'Jun 2017',
    responsibilities: [
      'Assisted Master students in their laboratory coursework and aided in data interpretation.',
      'Applied statistic tools in the quantitative description of surface nanoarchitectures.',
      'Taught experimental physical chemistry techniques and assessed undergraduate students.',
      'Facilitated educational resources and provided private lessons.',
    ],
  },
];
export { contact, publications, workExperience };

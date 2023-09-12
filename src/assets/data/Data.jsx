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
    link: '../src/img/christian_larrea_thesis.pdf',
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

export { contact, publications };

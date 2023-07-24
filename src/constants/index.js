import {
    web,
    javascript,
    html,
    c,
    cpp,
    cSharp,
    css,
    reactjs,
    tailwind,
    mySQL,
    git,
    go,
    matlab,
    python,
    solidity,
    web3js,
    tensorFlow,
    unity,
    threeJs,
    Ense3,
    LCF,
    Phelma,
    Postech,
    YDC,
    AXinc,
    JuniorEnse3,
    Leygatech,
    Thales,
    south_korea,
    japan,
    england,
    france,
    Portfolio3D,
    linkedin,
    CVConversBrice
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Download my CV",
      icon: web,
    },
  ];

  const languages = [
    {
      language: "English",
      code: "en",
      icon: england,
    },
    {
      language: "Français",
      code: "fr",
      icon: france,
    },
    {
      language: "Japanese",
      code: "jp",
      icon: japan,
    }
  ]

  const aboutEN =[
    {
      description: "I am a french engineering student in Grenoble INP univerty. My major is signal processing and I am seeking an internship to work in a the biomedial fields.",
      cvEN: CVConversBrice
    }
  ]

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      category: "Front-end Web",
      link: "https://en.wikipedia.org/wiki/HTML5",
    },
    {
      name: "CSS 3",
      icon: css,
      category: "Front-end Web",
      link: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      name: "JavaScript",
      icon: javascript,
      category: "Front-end Web",
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "React JS",
      icon: reactjs,
      category: "Front-end Web",
      link: "https://en.wikipedia.org/wiki/React_(software)",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      category: "Front-end Web",
      link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
    },
    {
      name: "MySQL",
      icon: mySQL,
      category: "Back-end Web",
      link: "https://en.wikipedia.org/wiki/MySQL",
    },
    {
      name: "Three JS",
      icon: threeJs,
      category: "Front-end Web",
      link: "https://en.wikipedia.org/wiki/Three.js",
    },
    {
      name: "Git",
      icon: git,
      category: "Software Development",
      link: "https://fr.wikipedia.org/wiki/Git",
    },
    {
      name: "Matlab",
      icon: matlab,
      category: "Machine Learning",
      link: "https://en.wikipedia.org/wiki/MATLAB",
    },
    {
      name: "Python",
      icon: python,
      category: "Machine Learning",
      link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    },
    {
      name: "C",
      icon: c,
      category: "Software Development",
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "C++",
      icon: cpp,
      category: "Software Development",
      link: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
    {
      name: "C#",
      icon: cSharp,
      category: "Back-end Web",
      link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
    },
    {
      name: "Solidity",
      icon: solidity,
      category: "Blockchain",
      link: "https://en.wikipedia.org/wiki/Solidity",
    },
    {
      name: "Go",
      icon: go,
      category: "Back-end Web",
      link: "https://en.wikipedia.org/wiki/Go_(programming_language)",
    },
    {
      name: "Unity",
      icon: unity,
      category: "Back-end Web",
      link: "https://en.wikipedia.org/wiki/Unity_(game_engine)",
    },
    {
      name: "Tensor Flow",
      icon: tensorFlow,
      category: "Machine Learning",
      link: "https://en.wikipedia.org/wiki/TensorFlow",
    },
    {
      name: "Web3.js",
      icon: web3js,
      category: "Blockchain",
      link: "https://en.wikipedia.org/wiki/Web3",
    },

  ];

  const categories = [
    {
      name: "Machine Learning",
    },
    {
      name: "Software Development",
    },
    {
      name: "Front-end Web",
    },
    {
      name: "Back-end Web",
    },
    {
      name: "Blockchain",
    },
  ]

  const experiences = [
    {
      title: "Software Engineer",
      company_name: "AXinc. | ax株式会社",
      icon: AXinc,
      iconBg: "#383E56",
      date: "March 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "",
      ],
      location: "Shibuya, Tokyo, Japan",
      link: "https://axinc.jp/",
      demoAvailable: true,
    },
    {
      title: "Engineering internship on Radar airborne algorithm",
      company_name: "Thales",
      icon: Thales,
      iconBg: "#E6DEDD",
      date: "Juin 2022 - September 2022",
      points: [
        "Engineer for the study and improvement of airborne radar data processing algorithms.",
        "Use of matlab to work on data processing scripts.",
        "Discovery of data processing algorithms for airborne radar.",
        "Preparation of documentation and team presentations.",
      ],
      location: "Bordeaux, France",
      link: "https://www.thalesgroup.com/fr",
      demoAvailable: false,
    },
    {
      title: "Vice treasurer of Juinior Ense3",
      company_name: "Junior Ense3",
      icon: JuniorEnse3,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Management accounting, participation in audits of the stucture.",
        "Teamwork and participation in business management training courses.",
      ],
      location: "Grenoble, France",
      link: "https://junior-ense3.fr/",
      demoAvailable: false,
    },
    {
      title: "Intership as Worker",
      company_name: "Leygatech",
      icon: Leygatech,
      iconBg: "#383E56",
      date: "June 2021 - August 2022",
      points: [
        "Internship required to be graduated.",
        "working as a laborer in a plastics factory.",
      ],
      location: "Saint-Romain-Lachalm, France",
      link: "https://www.leygatech.com/",
      demoAvailable: false,
    },
  ];

  const education = [
    {
      title: "Master in engineering departement",
      school_name: "Grenoble INP, Phelma",
      icon: Phelma,
      iconBg: "#383E56",
      date: "September 2021 - January 2022 and September 2023 - January 2023",
      points: [
        "Last year before to be graduated with major of signal image and signal processing ",
      ],
      location: "Grenoble, France",
      link: "https://phelma.grenoble-inp.fr/",
    },
    {
      title: "Japanese Language School",
      school_name: "Yokohama Design College",
      icon: YDC,
      iconBg: "#383E56",
      date: "October 2022 - March 2023",
      points: [
        "Intensive Japanese course to prepare for the official JLPT exam",
      ],
      location: "Yokohama, Japan",
      link: "https://www.ydc.ac.jp/",
    },
    {
      title: "Academic exchange in foreign university",
      school_name: "POSTECH",
      icon: Postech,
      iconBg: "#383E56",
      date: "January 2023 - June 2023",
      points: [
        "Electrical and computer departement",
        "Courses",
        "Radar Imaging (Matlab),",
        "Machine Learning,",
        "Introduction to Digital Communication",
        "Data Structure (C++),",
        "Bockchain & Cryptocurrency (Solidity)",
      ],
      location: "Pohang, South Korea",
      link: "https://www.postech.ac.kr/eng/",
    },
    {
      title: "Bachelor in engineering departement",
      school_name: "Grenoble INP, Ense3",
      icon: Ense3,
      iconBg: "#383E56",
      date: "September 2020 - June 2021",
      points: [
        "Last year where I have been graduated in mechanical and automatical bachelor",
      ],
      location: "Grenoble, France",
      link: "https://www.grenoble-inp.fr/",
    },
    {
      title: "Preparatory Technology School",
      school_name: "Lycée Claude Fauriel",
      icon: LCF,
      iconBg: "#383E56",
      date: "September 2018 - June 2021",
      points: [
        "Preparation for entry to a selective university in a preparatory school.",
      ],
      location: "Saint-Étienne, France",
      link: "https://www.grenoble-inp.fr/",
    },
  ]

  const testimonials = [
    {
      testimonial:
        "I followed an international exchange programme in South korea during 6 months. I was at Postech University. ",
      name: "Postech, South Korea",
      designation: "Univeristy courses",
      company: "",
      image: "",
      linkLogo: Postech,
      secondImage: south_korea,
      link: "https://www.postech.ac.kr/eng/",
    },
    {
      testimonial:
        "During my gap year I stayed one year in japan. I follow intense Japanese Courses to pass the JLPT N3.",
      name: "Yokohama, Japan",
      designation: "Language courses",
      company: "",
      image: "",
      linkLogo: YDC,
      secondImage: japan,
      link: "https://www.ydc.ac.jp/",
    },
    {
      testimonial:
        "I carried out an internishp as software developpment in the AX company. I worked on the creation of a metaverse.",
      name: "Tokyo, Japan",
      designation: "Engineering internship",
      company: "",
      image: "",
      linkLogo: AXinc,
      secondImage: japan,
      link: "https://axinc.jp/",
    },
  ];

  const projects = [
    {
      name: "My Personal Portfolio 3D",
      description:
        "A comprehensive personal portfolio platform that allows to present my projects, purpose, and motivation, in order to get a job.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio3D,
      source_code_link: "https://github.com/Worl0r/Portfolio.git",
      demo_code_link: "https://briceconvers.com"
    }
  ];

const socialNetworks = [
    {
      image: linkedin,
      socialNetwork: "Linkedin",
      link: "https://www.linkedin.com/in/brice-convers/",
    }
    ];

const footer = [
  {
    github: "https://github.com/Worl0r",
    license: "https://github.com/Worl0r/Portfolio/blob/main/MITLicense.md"
  }
]

  export { services,languages, aboutEN, technologies, categories, experiences, education, testimonials, projects, socialNetworks, footer };

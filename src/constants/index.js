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
      id: "projects",
      title: "Projects",
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

  const hero = [
    {
      schoolLink: "https://ense3.grenoble-inp.fr/"
    }
  ]

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
      description: "",
      cvEN: CVConversBrice
    }
  ]

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      category: "Frontend Web",
      link: "https://en.wikipedia.org/wiki/HTML5",
    },
    {
      name: "CSS 3",
      icon: css,
      category: "Frontend Web",
      link: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      name: "JavaScript",
      icon: javascript,
      category: "Frontend Web",
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "React JS",
      icon: reactjs,
      category: "Frontend Web",
      link: "https://en.wikipedia.org/wiki/React_(software)",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      category: "Frontend Web",
      link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
    },
    {
      name: "MySQL",
      icon: mySQL,
      category: "Backend Web",
      link: "https://en.wikipedia.org/wiki/MySQL",
    },
    {
      name: "Three JS",
      icon: threeJs,
      category: "Frontend Web",
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
      category: "Backend Web",
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
      category: "Backend Web",
      link: "https://en.wikipedia.org/wiki/Go_(programming_language)",
    },
    {
      name: "Unity",
      icon: unity,
      category: "Backend Web",
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
      name: "Frontend Web",
    },
    {
      name: "Backend Web",
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
        "",
        "",
        "",
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
        "",
        "",
        "",
        "",
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
        "",
        "",
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
        "",
        "",
      ],
      location: "Saint-Romain-Lachalm, France",
      link: "https://www.leygatech.com/",
      demoAvailable: false,
    },
  ];

  const education = [
    {
      title: "",
      school_name: "",
      icon: Phelma,
      iconBg: "#383E56",
      date: "",
      points: [
        "",
      ],
      location: "",
      link: "https://phelma.grenoble-inp.fr/",
    },
    {
      title: "",
      school_name: "",
      icon: YDC,
      iconBg: "#383E56",
      date: "",
      points: [
        "",
      ],
      location: "",
      link: "https://www.ydc.ac.jp/",
    },
    {
      title: "",
      school_name: "",
      icon: Postech,
      iconBg: "#383E56",
      date: "",
      points: [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      location: "",
      link: "https://www.postech.ac.kr/eng/",
    },
    {
      title: "",
      school_name: "",
      icon: Ense3,
      iconBg: "#383E56",
      date: "",
      points: [
        "",
        "",
      ],
      location: "",
      link: "https://www.grenoble-inp.fr/",
    },
    {
      title: "",
      school_name: "",
      icon: LCF,
      iconBg: "#383E56",
      date: "",
      points: [
        "",
      ],
      location: "",
      link: "https://www.grenoble-inp.fr/",
    },
  ]

  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
      linkLogo: Postech,
      secondImage: south_korea,
      link: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
      linkLogo: YDC,
      secondImage: japan,
      link: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
      linkLogo: AXinc,
      secondImage: japan,
      link: "",
    },
  ];

  const projects = [
    {
      name: "My Personal Portfolio 3D",
      description:
        "",
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

  export { services, hero, languages, aboutEN, technologies, categories, experiences, education, testimonials, projects, socialNetworks, footer };

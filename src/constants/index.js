const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 11, suffix: "+", label: "Years of Experience", id: "experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients", id: "clients" },
  { value: 12, suffix: "+", label: "Completed Projects", id: "projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate", id: "retention" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/wefashion-logo.png",
    id: 1,
  },
  {
    imgPath: "/images/logos/alko-logo.png",
    id: 2,
  },
  {
    imgPath: "/images/logos/BMN_Bouwmaterialen_Logo.png",
    id: 3,
  },
  {
    imgPath: "/images/logos/body_fit-logo.png",
    id: 4,
  },
  {
    imgPath: "/images/logos/Hoogvliet_logo.png",
    id: 5,
  },
  {
    imgPath: "/images/logos/intershop-logo.png",
    id: 6,
  },
  {
    imgPath: "/images/logos/isero-logo.png",
    id: 7,
  },
  {
    imgPath: "/images/logos/PLUS_logo.png",
    id: 8,
  },
  {
    imgPath: "/images/logos/trouw-nutrition-logo.png",
    id: 9,
  },
  {
    imgPath: "/images/logos/vml-logo.png",
    id: 10,
  },
  {
    imgPath: "/images/logos/Vwo_logo.png",
    id: 11,
  },
  {
    imgPath: "/images/logos/wefashion-logo.png",
    id: 12,
  },
  {
    imgPath: "/images/logos/wpp-logo.png",
    id: 13,
  },
  {
    imgPath: "/images/logos/Xerox-logo.png",
    id: 14,
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "HTML",
    imgPath: "/images/logos/HTML-logo.png",
  },
  {
    name: "CSS/SCSS",
    imgPath: "/images/logos/CSS-logo.png",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/JS-logo.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "GIT",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "VisualStudio",
    modelPath: "/models/visual_studio_logo.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/javascript.glb",
    scale: 3,
    rotation: [0, -Math.PI / 5, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Rogier brought creativity and technical expertise to the team, significantly improving our frontend UI performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logos/alko-logo.png",
    logoPath: "/images/logos/alko-logo-kl.png",
    title: "Frontend Developer",
    id: "Alko",
    date: "Dec 2013 - Aug 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the Alko website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
      "Implementing the new gift card functionality.",
    ],
  },
  {
    review:
      "Rogier’s contributions to the webshop applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logos/isero-logo.png",
    logoPath: "/images/logos/Isero-logo-kl.png",
    title: "Frontend Developer",
    id: "Isero",
    date: "Dec 2013 - Aug 2025",
    responsibilities: [
      "Led the development of the UI implementation for the webshop, focusing on responsiveness.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to the new checkout flow/design that were used with the Intershop ecosystem.",
    ],
  },
  {
    review:
      "Rogier’s work on the implementations of the A/B tests to test new designs on the B2B store, brought a high level of quality and efficiency. He delivered the solutions that enhanced our experience & meet our product goals.",
    imgPath: "/images/logos/BMN_Bouwmaterialen_Logo.png",
    logoPath: "/images/logos/BMN-logo-kl.png",
    title: "Frontend Developer",
    id: "BMN",
    date: "Dec 2013 - Aug 2025",
    responsibilities: [
      "Built A/B tests using VWO, integrating with the React store front.",
      "Improved the UX and user experience through A/B testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review:
      "Rogier’s work on PLUS webshop brought a high level of quality and efficiency. He delivered solutions that enhanced our responsive webshop experience & meet our product goals.",
    imgPath: "/images/logos/PLUS_logo.png",
    logoPath: "/images/logos/PLUS-logo-kl.png",
    title: "Desktop Publisher",
    id: "PLUS",
    date: "March 1998 - Dec 2013",
    responsibilities: [
      "Built cross-browser website/shop using HTML, Less, JavaScript, Jquery and intershops isml, integrating with Intershop's backend services.",
      "Improved web performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Bouwmaterialen Nederland",
    urlName: "www.BMN.nl",
    mentions: "https://www.BMN.nl",
    review:
      "Setting up A/B tests with VWO.com, converting designs to HTML, CSS, and JavaScript. I collaborated with a designer and a business analyst on this process.",
    stack: "HTML, CSS, JavaScript.",
    imgPath: "/images/logos/BMN_Bouwmaterialen_Logo.png",
  },
  {
    name: "Alko.fi",
    urlName: "www.Alko.fi",
    mentions: "https://www.Alko.fi",
    review:
      "Maintaining an e-commerce website and implementing new designs in a multidisciplinary SCRUM team (India/Amsterdam). Contributed to the development and implementation of the new checkout flow, gift card page and HTML structure, Less, Bootstrap, JavaScript (Jquery), Isml templating.",
    stack: "HTML, Less, Bootstrap, JavaScript (Jquery), Isml templating Intershop, Email templating, GIT, SCRUM, Figma.",
    imgPath: "/images/logos/alko-logo.png",
  },
  {
    name: "VML",
    urlName: "www.vml.com",
    mentions: "https://www.vml.com",
    stack: "React, Nextjs, JavaScript, CSS, HTML, Contentful, Figma.",
    review:
      "Within VML, I worked with React and Nextjs for various proofs of concept, such as creating a starter store in React. I connected Intershop for product data and a Contentful CMS for content.In collaboration with several full-stack developers, my role was creating components, implementing the UI, and writing the CSS, Tailwindcss.",
    imgPath: "/images/logos/vml-logo.png",
  },
  {
    name: "Isero",
    urlName: "www.isero.nl",
    mentions: "https://www.isero.nl",
    stack: "HTML, Less, Bootstrap, JavaScript (Jquery), Isml templating Intershop, Figma.",
    review:
      "Maintaining the e-commerce website and implementing new designs in a multidisciplinary SCRUM team (India/Amsterdam). Contributed to the development and implementation of the new checkout flow/design, setting up the HTML structure, Less, Bootstrap, JavaScript (JQuery), and ISML templating.",
    imgPath: "/images/logos/isero-logo.png",
  },
  {
    name: "XEROX",
    urlName: "www.xerox.com",
    mentions: "https://www.xerox.com",
    stack: "HTML, Less, Bootstrap, JavaScript (Jquery), Isml templating Intershop.",
    review:
      "Maintaining the e-commerce website and implementing new designs in a multidisciplinary SCRUM team. I implemented the new designs, setting up the HTML, Less, Bootstrap, JavaScript (JQuery), and ISML templating.",
    imgPath: "/images/logos/Xerox-logo.png",
  },
  {
    name: "Hoogvliet",
    urlName: "www.hoogvliet.com",
    mentions: "https://www.hoogvliet.com/",
    stack: "HTML, Less, Bootstrap, JavaScript (Jquery), Mustache.js, Isml templating Intershop.",
    review:
      "Maintaining the e-commerce website and implementing new designs, in a multidisciplinary SCRUM team. Responsible for bug fixes, implementing the new checkout flow, and setting up the HTML structure, Less, Bootstrap, JavaScript (JQuery), ISML templating, and using Mustache.js.",
    imgPath: "/images/logos/Hoogvliet_logo.png",
  },
  {
    name: "bodyandfit.com",
    urlName: "www.bodyandfit.com",
    mentions: "https://www.bodyandfit.com",
    stack: "HTML, CSS, JavaScript, Optimizely.",
    review:
      "Setting up A/B testing with Optimizely Web. Converting submitted designs to HTML and CSS using JavaScript within the Optimizely Web platform, optimizing and improving the user experience for higher conversion rates.",
    imgPath: "/images/logos/body_fit-logo.png",
  },
  {
    name: "PLUS supermarkets",
    urlName: "www.plus.nl",
    mentions: "https://www.plus.nl",
    stack: "HTML, Less, Bootstrap, JavaScript (Jquery), Isml templating Intershop.",
    review:
      "Nieuwe E-commerce website opgezet met Intershop in een multidisciplinair SCRUM team op locatie. Betrokken bij het ontwerpen van de pagina’s en verantwoordelijk voor het opzetten van de HTML-structuur, Less, Bootstrap, JavaScript (Jquery), Isml templating.",
    imgPath: "/images/logos/PLUS_logo.png",
  },
  {
    name: "WE fashion",
    urlName: "www.wefashion.nl",
    mentions: "https://www.wefashion.nl",
    stack: "Email templates HTML en CSS.",
    review:
      "The website was migrated from the Intershop platform to the Demandware platform (now Salesforce). I primarily worked on-site, rebuilding the email templates, HTML, and CSS, for WE Fashion.",
    imgPath: "/images/logos/wefashion-logo.png",
  },
];

const socialImgs = [
  
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/rogier-o-9707119/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
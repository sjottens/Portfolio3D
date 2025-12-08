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
    logoPath: "/images/logo1.png",
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
    logoPath: "/images/logo2.png",
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
    logoPath: "/images/logo3.png",
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
    logoPath: "/images/logo3.png",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
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
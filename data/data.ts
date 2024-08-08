const data = {
  name: "Mostafa",
  lastName: "Entezami",
  linkedin: "https://www.linkedin.com/in/mostafa-entezami/",
  github: "https://github.com/mo3ito",
  instagram: "https://www.instagram.com/mo3ito",
  telegram: "https://www.t.me/mo3ito",
  specialization: "Frontend Developer",
  skills:
    "Html5, Css3, JavaScript, TypeScript, React, Next.js, Pwa, Tailwindcss, Bootstrap, Redux, Node.js, MongoDB, Rest Api, Npm, Git, Docker, Responsive Design, Linux, English",
  yearsExperience: "+2",
  projectDone: "+5",
  homeIntroduce:
    "My journey into coding began with a fascination for problem-solving – a passion that continues to fuel my endeavors today. I've always been averse to routine and passionate about creating. One of the main reasons for my interest in programming and technology is creating websites and apps that make life easier. Whether it's architecting elegant solutions to intricate UI/UX dilemmas or optimizing performance through ingenious coding techniques, I approach each task with an unwavering commitment to excellence. I'm constantly enamored with learning and improving myself, implementing projects with the latest methods.",
  aboutMe:
    "I graduated of associate degree in Electrical engineering. I worked as a Frontend Developer at Fekrebekr Siraf, a registered company in the Science and Technology Park, specializing in real estate. In addition, I have been involved in other projects, including a startup project called eyeRoll, where I served as an idea developer and a full-stack MERN developer.",
  navBarItems: [
    { id: "home-item", navItem: "Home", nameRef: "homeRef" },
    { id: "about-item", navItem: "About Me", nameRef: "aboutMeRef" },
    { id: "portfolio-item", navItem: "Portfolio", nameRef: "portfolioRef" },
    { id: "contact-item", navItem: "Contact Me", nameRef: "contactRef" },
  ],
  iconNavbarItemsTabletMode: [
    {
      id: "home-item-tablet",
      navItem: { light: "/icons/home.png", dark: "/icons/home-dark.png" },
      nameRef: "homeRef",
    },
    {
      id: "about-item-tablet",
      navItem: { light: "/icons/user.png", dark: "/icons/user-dark.png" },
      nameRef: "aboutMeRef",
    },
    {
      id: "portfolio-item-tablet",
      navItem: { light: "/icons/menu.png", dark: "/icons/menu-dark.png" },
      nameRef: "portfolioRef",
    },
    {
      id: "contact-item-tablet",
      navItem: { light: "/icons/email.png", dark: "/icons/email-dark.png" },
      nameRef: "contactRef",
    },
  ],
  iconNavbarItemsMobileMode: [
    {
      id: "home-item-mobile",
      navItem: { light: "/icons/home.png", dark: "/icons/home-dark.png" },
      nameRef: "homeRef",
    },
    {
      id: "about-item-mobile",
      navItem: { light: "/icons/user.png", dark: "/icons/user-dark.png" },
      nameRef: "aboutMeRef",
    },
    {
      id: "portfolio-item-mobile",
      navItem: { light: "/icons/menu.png", dark: "/icons/menu-dark.png" },
      nameRef: "portfolioRef",
    },
    {
      id: "contact-item-moblie",
      navItem: { light: "/icons/email.png", dark: "/icons/email-dark.png" },
      nameRef: "contactRef",
    },
  ],
  project: [
    {
      id: "project-1",
      projectName: "Siraf",
      descriptionProject:
        "The Siraf site is an application for buying, selling, renting and consulting in the field of real estate, which is coded with the Next.js framework. My duties in this team have been coding the chat room, support, commission calculations, my real estate offices and files around me (map and location implementation).",
      linkProject: "https://siraf.app/",
    },
    {
      id: "project-2",
      projectName: "Mosito-pak",
      descriptionProject:
        "The Mosit-pak site is an application for online laundry whose frontend programming language is Typescript. the framework that I used was Next.js, and I used libraries such as swiper, react-query, react-toastify, axios, JWT, tailwindcss, etc. for backend I developed the project with Node.js and used express, JWT, nodemailer, etc. libraries. I have also developed the PWA of this project, which can be seen at mo3ito-pak.ir ",
      linkProject: "https://mosito-pak.ir/",
    },

    {
      id: "project-3",
      projectName: "EyeRoll",
      descriptionProject:
        "It is a startup application in the field of discount, advertisement and online menu. This application creates an identity card for every business whose frontend programming language is Typescript. the framework that I used was Next.js, and I used libraries such as swiper, moment, recharts, react-query, react-toastify, react-datepicker, axios, JWT, tailwindcss, etc. for backend I developed the project with Node.js and used express, socket.io, JWT, nodemailer, moment, multer, etc. libraries.",
      githubLink: "https://github.com/mo3ito/eyeRoll-frontend",
    },
    {
      id: "project-4",
      projectName: "Resume Template",
      descriptionProject:
        "I have developed a template for presenting a resume whose language is Typescript and developed with the Next.js framework. I used Tailwindcss framework to implement Css and made it responsive, I also used email.js and react-toastify libraries in it.",
      githubLink: "https://github.com/mo3ito/resume-template",
      linkProject: "https://mostafa-entezami.dev/",
    },
  ],
};

export default data;

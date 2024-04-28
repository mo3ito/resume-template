
const data = {
  name: "Mostafa",
  lastName: "Entezami",
  linkedin: "https://www.linkedin.com/in/mostafa-entezami/",
  github: "https://github.com/mo3ito",
  instagram: "https://www.instagram.com/mo3ito",
  telegram: "https://www.t.me/mo3ito",
  specialization: "Frontend Developer",
  skills:
    "Html5, Css3, JavaScript, TypeScript, React, Next.js, Tailwindcss, Bootstrap, Redux, Node.js, MongoDB, Rest Api, Npm, Git, Responsive Design ,Linux ,English",
  yearsExperience: "+2",
  projectDone: "+5",
  homeIntroduce:"My journey into coding began with a fascination for problem-solving – a passion that continues to fuel my endeavors today. I've always been averse to routine and passionate about creating. One of the main reasons for my interest in programming and technology is creating websites and apps that make life easier. Whether it's architecting elegant solutions to intricate UI/UX dilemmas or optimizing performance through ingenious coding techniques, I approach each task with an unwavering commitment to excellence. I'm constantly enamored with learning and improving myself, implementing projects with the latest methods.",
  aboutMe:"I graduated of associate degree in Electrical engineering. I worked as a Frontend Developer at Fekrebekr Siraf, a registered company in the Science and Technology Park, specializing in real estate. In addition, I have been involved in other projects, including a startup project called eyeRoll, where I served as an idea developer and a full-stack MERN developer.",
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
        "The Siraf site is an application for buying and selling, renting and consulting in the field of real estate, which is coded with the Next.js framework, and I have worked as a frontend developer in its programming team. My duties in this team have been coding the chat room, support, commission calculations, my real estate offices and files around me (map and location implementation).",
      linkProject : "https://siraf.app/",
    },

    {
        id: "project-2",
        projectName: "EyeRoll",
        descriptionProject:"It is a startup application in the field of discount, advertisement and online menu, which is an idea of ​​mine. This application creates an identity card for each business. Its frontend programming language is Typescript and Next.js framework, and I have used libraries such as Swiper, Moment, Recharts, React-query, React-toastify, React-datepicker, Axios, JWT, Tailwindcss, etc. for backend I developed the project with Node.js and I have used libraries such as Express, Socket.io, JWT, Nodemailer, Moment, Multer, etc.",
        githubLink:"https://github.com/mo3ito/eyeRoll-frontend" ,
        linkProject : "https://eyerol.com/"
      },
      {
        id: "project-3",
        projectName: "Resume Template",
        descriptionProject:"A site template (the same site you are viewing) has two modes, dark mode and light mode that I have developed with Typescript language and Next.js framework and I have used Tailwindcss framework for Css and I have used libraries such as React-toastify, Email.js and etc libraries.",
        githubLink:"https://github.com/mo3ito/resume-template" ,
        linkProject : "https://mostafa-entezami.dev/"
      },
  ],
};


export default data;

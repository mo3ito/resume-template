
const data = {
  name: "Mostafa",
  lastName: "Entezami",
  linkedin: "https://www.linkedin.com/in/mostafa-entezami/",
  github: "https://github.com/mo3ito",
  instagram: "https://www.instagram.com/mo3ito",
  telegram: "https://www.t.me/mo3ito",
  specialization: "Frontend Developer",
  skills:
    "Html5, Css3, JavaScript, TypeScript, React, Next.js, Tailwindcss, Redux, Node.js, MongoDB, Rest Api, Npm, Git, Responsive Design ,Linux",
  yearsExperience: "+2",
  projectDone: "+5",
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
        " The Siraf site is an application for buying and selling, renting and consulting in the field of real estate, which is coded with the Next.js framework, and I have worked as a frontend developer in its programming team.",
      linkProject : " https://siraf.app/",
    },

    {
        id: "project-2",
        projectName: "EyeRoll",
        descriptionProject:" It is a startup application in the field of discount, advertisement and online menu, which is an idea of ​​mine. This application creates an identity card for each business. Its frontend programming language is Typescript and Next.js framework, and I have used libraries such as Swiper, Moment, Recharts, React-query, React-toastify, React-datepicker, Axios, JWT, Tailwindcss, etc. for backend I developed the project with Node.js and used Express, Socket.io, JWT, Nodemailer, Moment, Multer, etc. libraries.",
        githubLink:"https://github.com/mo3ito/eyeRoll-frontend" ,
        linkProject : " https://eyerol.com/"
      },
      {
        id: "project-3",
        projectName: "Resume Template",
        descriptionProject:" A site template (the same site you are viewing) has two modes, dark mode and light mode that I have developed with Typescript language and Next.js framework and I have used Tailwindcss framework for Css and I have used libraries such as React-toastify, Email.js and etc libraries.",
        githubLink:"https://github.com/mo3ito/resume" ,
        linkProject : " https://mostafa-entezami.dev/"
      },
  ],
};


export default data;

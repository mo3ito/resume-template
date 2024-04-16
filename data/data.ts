import { v4 as uuid } from 'uuid'

 const data = {
name:"Mostafa", 
lastName:"Entezami" , 
linkedin:"https://www.linkedin.com/in/mostafa-entezami/", 
github: "https://github.com/mo3ito", 
instagram:"https://www.instagram.com/mo3ito",
telegram: "https://www.t.me/mo3ito",
specialization:"Frontend Developer",
skills: "Html5, css3, JavaScript, TypeScript, React, Next.js, Tailwindcss, Redux, Node.js, MongoDB, Rest Api, Npm, Git, Responsive Design ,Linux",
yearsExperience:"+2",
projectDone:"+5",
navBarItems:[
    {id:"home-item" , navItem:"Home" , nameRef:"homeRef"},
    {id:"about-item" , navItem:"About Me" , nameRef:"aboutMeRef"},
    {id:"portfolio-item" , navItem:"Portfolio" , nameRef:"portfolioRef"},
    {id:"contact-item" , navItem:"Contact Me" , nameRef:"contactRef"},
],
iconNavbarItemsTabletMode:[
    { id: "home-item-tablet", navItem:{light:"/icons/home.png" , dark: "/icons/home-light.png" }  , nameRef: "homeRef" },
    {id:"about-item-tablet"  , navItem: {light:"/icons/user.png" , dark :"/icons/user-dark.png"} , nameRef:"aboutMeRef"},
    {id:"portfolio-item-tablet" , navItem:{ light:"/icons/menu.png" , dark:"/icons/menu-dark.png"} , nameRef:"portfolioRef"},
    {id:"contact-item-tablet", navItem:{light:"/icons/email.png", dark:"/icons/email-dark.png"} , nameRef:"contactRef"},
],
iconNavbarItemsMobileMode:[
    { id: "home-item-mobile", navItem:{light:"/icons/home.png" , dark: "/icons/home-light.png" }  , nameRef: "homeRef" },
    {id:"about-item-mobile" , navItem: {light:"/icons/user.png" , dark :"/icons/user-dark.png"} , nameRef:"aboutMeRef"},
    { id:"portfolio-item-mobile", navItem:{ light:"/icons/menu.png" , dark:"/icons/menu-dark.png"} , nameRef:"portfolioRef"},
    {id:"contact-item-moblie" , navItem:{light:"/icons/email.png", dark:"/icons/email-dark.png"} , nameRef:"contactRef"},
]
 }



 export default data;

 

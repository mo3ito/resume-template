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
navBarItems:[
    {id:"home-item" , navItem:"Home" , nameRef:"homeRef"},
    {id:uuid() , navItem:"About Me" , nameRef:"aboutMeRef"},
    {id:uuid() , navItem:"Portfolio" , nameRef:"portfolioRef"},
    {id:uuid() , navItem:"Contact Me" , nameRef:"contactRef"},
],
iconNavbarItemsTabletMode:[
    { id: "home-item-tablet", navItem:{light:"/icons/home.png" , dark: "/icons/home-light.png" }  , nameRef: "homeRef" },
    {id:uuid() , navItem: {light:"/icons/user.png" , dark :"/icons/user-dark.png"} , nameRef:"aboutMeRef"},
    {id:uuid() , navItem:{ light:"/icons/menu.png" , dark:"/icons/menu-dark.png"} , nameRef:"portfolioRef"},
    {id:uuid() , navItem:{light:"/icons/email.png", dark:"/icons/email-dark.png"} , nameRef:"contactRef"},
],
iconNavbarItemsMobileMode:[
    { id: "home-item-mobile", navItem:{light:"/icons/home.png" , dark: "/icons/home-light.png" }  , nameRef: "homeRef" },
    {id:uuid() , navItem: {light:"/icons/user.png" , dark :"/icons/user-dark.png"} , nameRef:"aboutMeRef"},
    {id:uuid() , navItem:{ light:"/icons/menu.png" , dark:"/icons/menu-dark.png"} , nameRef:"portfolioRef"},
    {id:uuid() , navItem:{light:"/icons/email.png", dark:"/icons/email-dark.png"} , nameRef:"contactRef"},
]
 }



 export default data;

 

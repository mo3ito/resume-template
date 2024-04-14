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
    {id:uuid() , navItem:"Resume" , nameRef:"resumeRef"},
    {id:uuid() , navItem:"Contact Me" , nameRef:"contactRef"},
],
iconNavbarItems:[
    { id: "home-item-mobile", navItem: "/icons/home.png" , nameRef: "homeRef" },
    {id:uuid() , navItem:  "/icons/people.png", nameRef:"aboutMeRef"},
    {id:uuid() , navItem:"/icons/four-squares-button-of-view-options.png" , nameRef:"portfolioRef"},
    // {id:uuid() , navItem:3, nameRef:"resumeRef"},
    {id:uuid() , navItem:"/icons/mail.png" , nameRef:"contactRef"},
]
 }



 export default data;

 

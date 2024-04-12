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
    {id:uuid() , navItem:"Home" , nameRef:"homeRef"},
    {id:uuid() , navItem:"About Me" , nameRef:"aboutMeRef"},
    {id:uuid() , navItem:"Portfolio" , nameRef:"portfolioRef"},
    {id:uuid() , navItem:"Resume" , nameRef:"resumeRef"},
    {id:uuid() , navItem:"Contact Me" , nameRef:"contactRef"},
],
iconNavbarItems:[
    { id: uuid(), navItem: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path></svg>', nameRef: "homeRef" },
    {id:uuid() , navItem: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM11 12H13V17H11V12ZM11 9H13V11H11V9Z"></path></svg>' , nameRef:"aboutMeRef"},
    {id:uuid() , navItem:2 , nameRef:"portfolioRef"},
    {id:uuid() , navItem:3, nameRef:"resumeRef"},
    {id:uuid() , navItem:4 , nameRef:"contactRef"},
]
 }



 export default data;

 

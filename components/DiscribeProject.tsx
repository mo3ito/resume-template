import React, { ReactNode } from 'react'
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link'



type DiscribeProjectProps = {
    projectName: string ;
    descriptionProject: string 
    linkProject: string
    githubLink: string | undefined
}


export default function DiscribeProject({projectName , descriptionProject , linkProject , githubLink}: DiscribeProjectProps ) {
  return (

      <div className=' mb-8 '> 
      <p className=''> <span className='  font-bold inline-block text-lg sm:text-xl xl:text-2xl'>{projectName}:</span> <span className=' tex-base lg:text-lg xl:text-xl'>{descriptionProject} { githubLink && "The codes of this project can be seen on GitHub at" }  <Link className='underline text-blue-400' href={githubLink ? githubLink : ""}>{githubLink}</Link>  </span>  </p>
      <p className=''> <span className=' font-bold inline-block text-base lg:text-lg '>Project Link: <Link className='text-blue-600 font-extrabold' href={linkProject}>{linkProject}</Link> </span></p>
      </div>
      
  )
}

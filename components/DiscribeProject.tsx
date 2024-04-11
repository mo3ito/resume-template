import React from 'react'
import Link from 'next/link'


type DiscribeProjectProps = {
    projectName: string ;
    descriptionProject: string 
    linkProject: string
    githubLink?: string
}


export default function DiscribeProject({projectName , descriptionProject , linkProject , githubLink}: DiscribeProjectProps ) {
  return (

      <div className='dark:text-white text-black mb-8'> 
      <p className=''> <span className=' dark:text-zinc-300 text-zinc-600  font-bold inline-block text-2xl '>{projectName}:</span> {descriptionProject}  { githubLink && "The codes of this project can be seen on GitHub at"} <span className='underline text-blue-400'>{githubLink}</span>  </p>
      <p className=''> <span className='dark:text-zinc-300 text-zinc-600 font-bold inline-block text-base '>Project Link:</span> <Link className='text-blue-600 font-extrabold' href={linkProject}>{linkProject}</Link></p>
      </div>
      
  )
}

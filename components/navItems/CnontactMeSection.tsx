import React from 'react'
import Introducer from '../Introducer'

export default function CnontactMeSection(props) {
  return (
    <div className='pb-20' ref={props.contactRef}>
         
          <Introducer
        keyWords="Contact"
        header="Communication and cooperation"
      />
      
      <form className='w-full mt-6 ' action="">

      <div className='flex items-center justify-between  flex-wrap gap-y-8'>
        <div className='w-1/2  '>
        <input placeholder='Full Name*' className='dark:focus:border-pink-200 dark:border-zinc-600 font-bold outline-none focus:border-b-2 focus:border-violet-700 border-b-2 border-zinc-300 w-11/12  h-16 text-xl bg-transparent' type="text" />
        </div>

        <div className='w-1/2  '>
        <input placeholder='Email*' className='dark:focus:border-pink-200 dark:border-zinc-600  font-bold outline-none focus:border-b-2 focus:border-violet-700 border-b-2 border-zinc-300 w-11/12  h-16 text-xl bg-transparent' type="text" />
        </div>

        <textarea placeholder='a few words*' className='dark:focus:border-pink-200 dark:border-zinc-600  font-bold outline-none focus:border-b-2 focus:border-violet-700 border-b-2 border-zinc-300 w-11/12  text-xl bg-transparent h-36 overflow-auto' name="" ></textarea>
     
      </div>
       
      </form>

      </div>
  )
}

import React from 'react'
import Introducer from '../Introducer'
import { ContactMeSectionProps } from '@/types/refTypes'
import DefaultButton from '../buttons/DefaultButton'

export default function CnontactMeSection(props: ContactMeSectionProps) {
  return (
    <div className='pb-20' ref={props.contactRef}>
         
          <Introducer
        keyWords="Contact"
        header="Communication and cooperation"
      />
      
      <form className='w-full mt-6 ' action="">

      <div className='flex items-center justify-between  flex-wrap gap-y-8'>
        <div className='w-1/2  '>
        <input placeholder='Full Name*' className=' dark:focus:border-pink-200 dark:border-zinc-600 font-bold outline-none focus:border-b-2 focus:border-purple-700 border-b-2 border-zinc-300 w-11/12  h-16 text-xl bg-transparent' type="text" />
        </div>

        <div className='w-1/2  '>
        <input placeholder='Email Address*' className='dark:focus:border-pink-200 dark:border-zinc-600  font-bold outline-none focus:border-b-2 focus:border-purple-700 border-b-2 border-zinc-300 w-11/12  h-16 text-xl bg-transparent' type="text" />
        </div>

        <textarea placeholder='a few words*' className='dark:focus:border-pink-200 dark:border-zinc-600 resize-none font-bold outline-none focus:border-b-2 focus:border-purple-700 border-b-2 border-zinc-300 w-11/12  text-xl bg-transparent h-36 overflow-auto' name="" ></textarea>
     
      </div>
      <DefaultButton
       
        content="Send Message"
        className=" dark:text-black px-6 my-8 text-white"
      >
        <svg className="size-6 inline-block  ml-2 fill-white dark:fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg>
      </DefaultButton>
      </form>

      </div>
  )
}

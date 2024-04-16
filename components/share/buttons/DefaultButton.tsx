import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router';

type DefaultButtonProps = {
  content: string;
  classNameContent?:string;
  children: React.ReactNode;
  className?:string;
  href?:Url;
  isLinkTag?:boolean;
  onClick?:()=> void;
  isLoading?:boolean
}

export default function DefaultButton({content , children , className='w-max' , classNameContent , href , isLinkTag=false , onClick , isLoading = false}:DefaultButtonProps) {
  return (
   
    <>
    { isLinkTag ? <Link href={href as Url} className={`${className} dark:text-black text-white group overflow-hidden  flex items-center justify-center text-center font-semibold  bg-gradient-to-r from-violet-400 to-violet-700 dark:from-pink-200 dark:to-violet-200 rounded-3xl text-xl  relative`}  >
    <span className={classNameContent}>
    {content}
    {children}
    </span>
  </Link>
:
  <button onClick={onClick} className={`${className} group overflow-hidden flex items-center justify-center text-center font-semibold  bg-gradient-to-r from-violet-400 to-violet-700 dark:from-pink-200 dark:to-violet-200 rounded-3xl text-xl  relative`}  >
  
   { isLoading && <svg className='dark:fill-black fill-white -translate-x-5 size-6' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>}
   <span className={classNameContent}>

    {content}
    {children}
    </span>
   
 
  </button>}
  </>

  
  )
}

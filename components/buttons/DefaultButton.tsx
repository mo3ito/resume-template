import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router';

type DefaultButtonProps = {
  content: string;
  children: React.ReactNode;
  className?:string;
  href?:Url;
  isLinkTag?:boolean;
  onClick?:()=> void
}

export default function DefaultButton({content , children , className='w-max' , href , isLinkTag=false , onClick}:DefaultButtonProps) {
  return (
   
    <>
    { isLinkTag ? <Link href={href as Url} className={`${className} dark:text-black text-white flex items-center justify-center text-center font-semibold h-16 bg-gradient-to-r from-violet-400 to-violet-700 dark:from-pink-200 dark:to-violet-200 rounded-3xl text-xl  relative`}  >
    <span className="hover:animation-button-talk">
    {content}
    {children}
    </span>
  </Link>
:
  <button onClick={onClick} className={`${className} dark:text-black text-white flex items-center justify-center text-center font-semibold h-16 bg-gradient-to-r from-violet-400 to-violet-700 dark:from-pink-200 dark:to-violet-200 rounded-3xl text-xl  relative`}  >
    <span className="hover:animation-button-talk">
    {content}
    {children}
    </span>
  </button>}
  </>

  
  )
}

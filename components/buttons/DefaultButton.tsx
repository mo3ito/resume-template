import React from 'react'

type DefaultButtonProps = {
  content: string;
  children: React.ReactNode;
  className?:string
}

export default function DefaultButton({content , children , className='w-max'}:DefaultButtonProps) {
  return (
    <button className={`${className} dark:text-black text-white font-semibold h-16 bg-gradient-to-r from-violet-400 to-violet-700 dark:from-pink-200 dark:to-violet-200 rounded-3xl text-xl  relative`}  >
    <span className="hover:animation-button-talk">
    {content}
    {children}
    </span>
  </button>
  )
}

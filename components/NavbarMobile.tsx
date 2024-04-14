import React from 'react'
import data from '@/data/data'

export default function NavbarMobile() {
  return (
    <div className=' h-20 w-full bottom-1 fixed flex justify-center items-center left-0 right-6 lg:hidden'>
        <ul className='bg-slate-300 w-96 h-10 z-50 rounded-full flex justify-around items-center'>
            {data.iconNavbarItems.map(item=>
                        <li key={item.id} className='size-6 bg-slate-500 rounded-full flex items-center justify-center'>
                          {item.navItem}      
                        </li>
                )}

        </ul>
    </div>
  )
}

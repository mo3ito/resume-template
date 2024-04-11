import React from 'react'
import { PortfolioProps } from '@/types/refTypes'
import Introducer from '../Introducer'
import ContainerShowBox from '../ContainerShowBox'
import ShowBox from '../ShowBox'
import Link from 'next/link'
import DiscribeProject from '../DiscribeProject'

export default function Portfolio(props: PortfolioProps) {
  return (
    <div ref={props?.portfolioRef} className="py-36">
    <Introducer
  keyWords="Portfolio"
  header="Frontend Developer"
/>

        <ContainerShowBox>
        <ShowBox contentValue="Years of experience" value="+2"/>
        <ShowBox contentValue="Projects done" value="+5"/>
        </ContainerShowBox>

    <div className='text-xl'>
    <DiscribeProject projectName="Siraf"  descriptionProject="The Siraf site is an application for buying and selling, renting and consulting in the field of real estate, which is coded with the next.js framework, and I have worked as a frontend developer in its programming team."  linkProject="https://siraf.app/"/>
    <DiscribeProject projectName="eyeRoll" githubLink={<><Link href="https://github.com/mo3ito/eyeRoll-frontend">https://github.com/mo3ito/eyeRoll-frontend</Link> <br/> <Link href="https://github.com/mo3ito/eyeRoll-backend">https://github.com/mo3ito/eyeRoll-backend</Link></>} descriptionProject="It is a startup application in the field of discount, advertisement and online menu, which is an idea of ​​mine.
This application creates an identity card for each business.
Its frontend programming language is typescript and next.js framework, and I have used libraries such as swiper, moment, recharts, react-query, react-toastify, react-datepicker, axios, JWT, tailwindcss, etc.
for backend I developed the project with node.js and used express, socket.io, JWT, nodemailer, moment, multer, etc. libraries.

"  linkProject="https://eyerol.com/"/>
    </div>
  
</div>
  )
}

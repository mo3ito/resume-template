import React from 'react'
import { PortfolioProps } from '@/types/refTypes'
import Introducer from '../Introducer'

export default function Portfolio(props: PortfolioProps) {
  return (
    <div ref={props?.portfolioRef} className="py-36">
    <Introducer
  keyWords="Portfolio"
  header="Frontend Developer"
/>

  
<p className="text-xl text-zinc-600 dark:text-white">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis autem dolore molestiae, recusandae soluta deleniti? Eaque pariatur quisquam, amet molestiae sint, consequatur cumque ab numquam quaerat quidem velit culpa quibusdam?
  Laboriosam aperiam facilis ex vero nemo distinctio eveniet perferendis officia at est repellendus, quo consequuntur saepe. Quos consectetur quis perferendis animi qui ex dolore illum. Tempora odit nesciunt laborum eum.
  Laboriosam ullam totam porro neque amet veritatis, unde ratione architecto culpa incidunt distinctio accusantium eligendi ex eum dolores sapiente vitae officia? Dolorem, suscipit. Et voluptatem nesciunt repellendus, quod ipsam laudantium!
  Perferendis vero doloremque consequatur temporibus magnam qui, sapiente rem voluptatem ut, corporis fugiat omnis corrupti optio voluptate in asperiores. Velit enim voluptates asperiores sapiente ipsum id doloremque laboriosam maxime laborum?
  Tempora voluptatem temporibus, sed perferendis alias reiciendis. Fugit corporis repudiandae atque cupiditate, ut obcaecati dolore earum nemo quaerat, doloribus aut assumenda fugiat voluptatum asperiores perspiciatis magnam mollitia iure quo ducimus?
  Quia officia quod eaque suscipit deserunt distinctio voluptatum nisi, beatae rerum molestias saepe! Quaerat ipsum provident nesciunt laudantium, repudiandae est numquam consequuntur ab officia velit architecto sequi pariatur deleniti veritatis!
</p>
</div>
  )
}

'use client'
import React, { useRef } from 'react'
import { motion,useScroll, useTransform } from 'framer-motion'

import Link from 'next/link'

function Nav() {
  const { scrollYProgress } = useScroll()
 


  return (
    <motion.nav 

    style={{ opacity: useTransform(scrollYProgress,[0,1],["50%","100%"])}} className="z-20 flex flex-col  p-8 items-center fixed left-0 h-screen w-fit text-white">
  <motion.div className='border-b-2 border-white h-24 w-24 transform rotate-90'> </motion.div>
  <Link   className='transform -rotate-90 hover:line-through my-8' href='/code' >
        CODE
      </Link>
      <Link className='transform -rotate-90 hover:line-through my-8' href='/climb' >
      CLIMB
      </Link>
      <Link className='transform -rotate-90 hover:line-through my-8' href='/' >
       HOME
      </Link>
   <motion.div className='border-t-2 border-white h-24 w-24 transform rotate-90'> </motion.div>
    </motion.nav>
  )
}

export default Nav
'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Link from 'next/link'

function Nav() {
  const { scrollYProgress } = useScroll()



  return (
    <motion.nav

      // style={{ opacity: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
      className="

       flex 
       sm:flex-col  
       p-8 
       sm:items-center 
       sm:fixed 
       sm:left-0 
       sm:h-screen 
       sm:w-fit 
       text-white
    


 

       "
       
      >
      <motion.div className='border-b-2 border-white h-24 w-24 transform sm:rotate-90'> </motion.div>
      <Link className='sm:transform sm:-rotate-90 hover:line-through mx-8 my-8' href='/code' >
        CODE
      </Link>
      <Link className='sm:transform sm:-rotate-90 hover:line-through mx-8 my-8' href='/climb' >
        CLIMB
      </Link>
      <Link className='sm:transform sm:-rotate-90 hover:line-through mx-8 my-8' href='/' >
        HOME
      </Link>
 
      <motion.div className='border-t-2 border-white h-24 w-24 sm:transform sm:rotate-90'> </motion.div>
    </motion.nav>
  )
}

export default Nav
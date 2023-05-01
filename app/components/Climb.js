'use client'
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PortableText } from '@portabletext/react'
function Climb({climb}) {

  const { scrollYProgress } = useScroll()
    const variants = {
        hidden: {
          borderLeftWidth: 0,
          borderRightWidth: 0,
        BorderBottomWidth:0,
        borderTopWidth:0,
        },
        visible: {
          borderLeftWidth: 2,
            borderRightWidth: 2,
            BorderBottomWidth:2,
            borderTopWidth:2,
            transition: {
            duration: 1,
            
            ease: "easeIn",
          },
        },
      };
   
    const y2 = useTransform(scrollYProgress,[0,1],["0%","30%"])
  return (
    <>

  <motion.div 
   style={{y:y2,
}}
variants={variants}
initial="hidden"
animate="visible"

className='p-24 mb-24 mx-auto relative text-8xl w-1/2 border-white border-2'>

<div className="mb-8">{climb.routeName}</div>
        <h1 className='text-4xl text-white'>{climb.cragName}</h1>
    <h2 className='text-2xl text-white'>{climb.routeName}</h2>
    <h3 className='text-xl text-white'>{climb.grade}</h3>
    <h4 className='text-lg text-white'>{climb.rating}</h4>
   
    <p className='text-lg text-white'>
    <PortableText value={climb.description} />
    </p>
 
    <Image
src={climb.image}
alt="Climbing image"

width={500}
height={500}


/>
</motion.div>
</>
)}


export default Climb
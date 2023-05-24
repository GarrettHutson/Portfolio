'use client'
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PortableText } from '@portabletext/react'
function Climbs({climbs}) {

  const { scrollYProgress } = useScroll()
    const variants = {
        hidden: {
          borderLeftWidth: 0,
          borderRightWidth: 0,
        BorderBottomWidth:0,
        borderTopWidth:0,
        },
        visible: {
          borderLeftWidth: 1,
            borderRightWidth: 1,
            BorderBottomWidth:1,
            borderTopWidth:1,
            transition: {
            duration: .25,
            ease: "easeIn",
          },
        },
      };
   
    const y2 = useTransform(scrollYProgress,[0,1],["0%","30%"])
  return (
    <div
    className="mx-8 flex flex-col justify-center"
    >
{ climbs.map((climb, i)=>


  <motion.div 
   style={{y:y2,
}}
variants={variants}
initial="hidden"
animate="visible"

className='p-4 mb-24 mx-auto relative text-3xl md:text-4xl sm:w-1/2 border-white border-2'>

<div className="mb-8">{climb.routeName}</div>
        <h1 className='text-4xl text-white'>{climb.cragName}</h1>

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
)}
</div>
)}


export default Climbs
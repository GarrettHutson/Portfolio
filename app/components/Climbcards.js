
'use client'
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PortableText } from '@portabletext/react'

function Climbcards({climbPosts}) {

    const { scrollYProgress } = useScroll()
    // const y1 = useTransform(scrollYProgress,[0,1],["0%","50%"])
    const y2 = useTransform(scrollYProgress,[0,1],["0%","50%"])
    if(!climbPosts) return <div>loading...</div>
   
  return (
    <>
    {/* <section>
   <motion.div 
      style={{y:y1,backgroundImage: "url('/images/goat.jpeg')"}}
  
       className={`absolute bg-cover h-screen  w-screen z-0`}
   >


     </motion.div>
     </section> */}
  


    {climbPosts.map((climb,i) => (
     
        <motion.div 
        style={{y:y2}} 
      
          transition={{
            duration:0.9,
            ease:'',
            type: "spring",
        
        }}
        key={i} 
        className='p-24 mb-24 mx-auto relative text-8xl w-1/2 border-white border-2'>
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

  ))}

</>

)}

export default Climbcards

'use client'

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PortableText } from '@portabletext/react'

function Climbcards({climbPosts}) {

    const { scrollYProgress } = useScroll()
    const y1 = useTransform(scrollYProgress,[0,1],["0%","50%"])
    const y2 = useTransform(scrollYProgress,[0,1],["0%","100%"])
    if(!climbPosts) return <div>loading...</div>
   
  return (
    <>
    <section>
   <motion.div 
      style={{y:y1,backgroundImage: "url('/images/goat.jpeg')"}}
    // style={{backgroundImage: "url('/images/goat.jpeg')"}}
       className={`absolute bg-cover bg-center h-[2000px] w-screen z-0`}
   >


     </motion.div>
     </section>
  


    {climbPosts.map((climb,i) => (
     
        <motion.div 
        style={{y:y2}} 
      
          transition={{
            duration:0.9,
            ease:'',
            type: "spring",
        
        }}
        key={i} 
        className='  my-8 relative text-8xl'>
        <h1 className='text-4xl text-white'>{climb.cragName}</h1>
        <h2 className='text-2xl text-white'>{climb.routeName}</h2>
        <h3 className='text-xl text-white'>{climb.grade}</h3>
        <h4 className='text-lg text-white'>{climb.rating}</h4>
       
        <p className='text-lg text-white'>
        <PortableText value={climb.description} />
        </p>
        {/* <img className='w-1/2' src={climb.image} /> */}

        </motion.div>

  ))}

</>
)}

export default Climbcards
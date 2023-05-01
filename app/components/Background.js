'use client'
import {
    motion,
    useScroll,
    useTransform,
  } from "framer-motion";
function Background() {
    const { scrollYProgress } = useScroll()
    const y1 = useTransform(scrollYProgress,[0,1],["0%","50%"])
  return (
    <>
    <section>
    <motion.div 
    style={{y:y1,backgroundImage: "url('/images/goat.jpeg')"}}

     className={`absolute bg-cover bg-center w-screen h-screen   z-0`}
 >


   </motion.div>
   </section>
    </>

  )
}

export default Background
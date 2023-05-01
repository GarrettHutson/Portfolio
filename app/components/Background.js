'use client'
import {
    motion,
    useScroll,
    useTransform,
  } from "framer-motion";
function Background() {
    const { scrollYProgress } = useScroll()
    const y1 = useTransform(scrollYProgress,[0, 1],["50%","100%"])
  return (
    <div>

    <motion.div 
    // style={{y:y1,backgroundImage: "url('/images/goat.jpeg'),"}}

     className={`absolute bg-fixed bg-cover bg-center w-screen h-screen   z-0`}
 
//   className="absolute w-full h-full"
  style={{
    y: y1,
backgroundImage: "url('/images/goat.jpeg')",

}}

>
   </motion.div>

    </div>

  )
}

export default Background
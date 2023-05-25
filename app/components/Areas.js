
'use client'
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useState } from "react";


function Climbcards({climbPosts}) {
    const { scrollYProgress } = useScroll()
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const controls = useAnimation();
  
    const handleHoverStart = (index) => {
      setHoveredIndex(index);
      controls.start({ x: 0 });
    };
  
    const handleHoverEnd = () => {
      setHoveredIndex(null);
      controls.start({ x: 100 });
    };
   
    const variants = {
      hidden: { x: 100 },
      visible: { x: 0 },
    } 

    const y2 = useTransform(scrollYProgress,[0,1],["0%","50%"])
    if(!climbPosts) return <div>loading...</div>
    const objList = {};
    const uniqueAreas = climbPosts.reduce((result, obj)=>{
      if(!objList[obj.cragName]){
        objList[obj.cragName] = true;
        result.push(obj)
      }
      return result
    },[])
      
  return (
    <>
    {uniqueAreas.map((climb,index) => (
        <Link href={`/notHome/climbs/${climb.cragName}`}>
        <motion.div 
        style={{y:y2,
        }}
        variants={variants}
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: hoveredIndex === index ? 100 : 0,
            transition: { duration: index + 1 },
          }}
        key={index} 
        onMouseEnter={() => handleHoverStart(index)}
        onMouseLeave={handleHoverEnd}
        className='p-12 my-8 mx-auto relative font-thin w-3/4  sm:w-1/2 border-white border'>
        <h1 className='text-4xl text-white'>{climb.cragName}</h1>
        </motion.div>
</Link>
  ))}

</>

)}

export default Climbcards
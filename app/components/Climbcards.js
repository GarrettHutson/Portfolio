
'use client'
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PortableText } from '@portabletext/react'

function Climbcards({climbPosts}) {
    const { scrollYProgress } = useScroll()
    const borderOpacity = useTransform(scrollYProgress, [0, 1], [0, 100]);
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
            duration: 0.5,
            
            ease: "easeIn",
          },
        },
      };



    // const y1 = useTransform(scrollYProgress,[0,1],["0%","50%"])
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
    
    // const uniqueAreas = Array.from(new Set(climbPosts.map(obj => obj.cragName)));
  
  return (
    <>
    {uniqueAreas.map((climb,i) => (
        <Link href={`/climbs/${climb.cragName}`}>
        <motion.div 
        style={{y:y2,

        }}
        variants={variants}
        initial="hidden"
        animate="visible"
        key={i} 
        className='p-24 mb-24 mx-auto relative text-8xl w-1/2 border-white border-2'>
        <h1 className='text-4xl  text-white'>{climb.cragName}</h1>
        </motion.div>
</Link>
  ))}

</>

)}

export default Climbcards
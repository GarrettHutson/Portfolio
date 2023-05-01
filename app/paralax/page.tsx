'use client'

import React from 'react'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

export default function Paralax() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <section>
        <motion.div 
          style={{y:useTransform(scrollYProgress,[0,1],["0%","50%"]), backgroundImage: "url('/images/goat.jpeg')"}}
          className="absolute w-screen h-[3000px] text-center text-8xl"
        >
          good bye
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
          <span>good edaydsf</span>
        </motion.div>
      </section>

      {
        [1,2,3,4,5].map((num) => (
          <motion.div
          style={{x:useTransform(scrollYProgress,[0,1],[-100,500])}} 
          initial={{ y:0}}
          animate={{y:500}}
          transition={{
            duration:0.9,
            ease:'',
            type: "spring",
        
        }}

          key={num} className='  my-8 relative w-24 h-96 bg-white text-8xl'>
            hello
          </motion.div>
        ))
      }
    </>
  );
}

'use client'
import { Project } from '@/types/Project';
import { motion, useAnimation, useTransform,useScroll } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll()

  const controls = useAnimation();

  const handleHoverStart = (index: number) => {
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
  return (
    <div className="">
      {projects.map((proj: Project, index: number) => (
        <motion.div
        style={{y:y2}}
        variants={variants}
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: hoveredIndex === index ? 100 : 0,
            transition: { duration: index + 1 },
          }}
          onMouseEnter={() => handleHoverStart(index)}
          onMouseLeave={handleHoverEnd}
          className="p-12 my-8 mx-auto relative font-thin w-3/4  sm:w-1/2 border-white border"
          key={proj._id}
        >
          <Link href={`/notHome/projects/${proj.slug}`} className="text-4xl text-white">
            {proj.name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}


'use client'
import Image from 'next/image'
import { PortableText } from "@portabletext/react";
import { Project } from '@/types/Project';
import { motion } from 'framer-motion'
import { useState } from 'react';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewIndex, setViewIndex] = useState(null);


  const displayProjectsHandler = (e, index) => {
    e.stopPropagation(); // stop the event from bubbling up to the parent div
    setViewIndex(index === viewIndex ? null : index);
  }

  return (
    <div className='flex flex-col my-8 items-center justify-center mx-24'>
      {projects.map((proj: Project, index: number) => (
        <motion.div
drag
initial={{ opacity: 0, x: -100 }}
animate={{
  opacity: 1, x: 0,
  transition: { duration: (index + 1) },
}}
className=' flex flex-col  w-3/4 border-black border-2 items-center my-8 p-8 mx-8 gap-4'
key={proj._id}>
<Link
href={`/projects/${proj.slug}`}
className='text-4xl'
>{proj.name}</Link>
</motion.div>
      ))}
    </div>
  )
}

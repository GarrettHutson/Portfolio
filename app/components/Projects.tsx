'use client'
import Image from 'next/image'
import { PortableText } from "@portabletext/react";
import { Project } from '@/types/Project';
import { motion } from 'framer-motion'
import { useState } from 'react';

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
    <div className='flex items-center justify-center'>
      {projects.map((proj: Project, index: number) => (
        <motion.div
          drag
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1, x: 0,
            transition: { duration: (index + 1) * 1.25, delay: 1 },
          }}
          className=' flex flex-col w-1/4 border-black border-2 items-center gap-4'
          onClick={() => setSelectedProject((prev) => prev === proj ? null : proj)}
          key={proj._id}>
          <h2>{proj.name}</h2>
          <Image
            key={index}
            src={proj.images[0]}
            onClick={(e) => displayProjectsHandler(e, index)}
            alt={proj.name}
            width={250}
            height={250}
            className=" rounded-lg border border-gray-500 mx-4"
          />

          {proj.images.length > 1 && viewIndex === index && proj.images.slice(1).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={proj.name}
              width={100}
              height={100}
              className="object-cover rounded-lg border border-gray-500 mx-4"
            />
       ))}
          {viewIndex === index && (
          <div className='w-3/4' onClick={() => setSelectedProject(null)}>
            <PortableText value={proj.content} />
          </div>
         )} 
        </motion.div>
      ))}
    </div>
  )
}

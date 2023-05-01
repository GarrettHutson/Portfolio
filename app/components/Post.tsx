'use client'
import Image from 'next/image'
import { PortableText } from "@portabletext/react";
import { Project } from '@/types/Project';
import { motion} from 'framer-motion'
import {  useState } from 'react';

type Props = {
    projects: Project[];
};



export default function Post({ projects }: Props) {

  
    const [selectedProject, setSelectedProject] = useState(null);
   







    return (
      <>
           
       

     <motion.div  className='flex  items-center justify-center '>
         {projects.map((proj: Project, index: number) => (
             <motion.div
            
                 drag
                 initial={{ opacity: 0, x: -100 }}
                 animate={{
                     opacity: 1, x: 0,
                     transition: { duration: (index + 1) * 1.25, delay: 4 },
                 }}
                 className='flex flex-col items-center gap-4  '
                 onClick={() => setSelectedProject((prev) => prev === proj ? null : proj)}
                 key={proj._id}>
                 <h2 >{proj.name}</h2>
                 {proj.image && (
                     <Image
                         src={proj.image}
                         alt={proj.name}
                         width={250}
                         height={100}
                         className="object-cover rounded-lg border border-gray-500 mx-4" />

                 )}

                 {selectedProject && selectedProject._id === proj._id && (
                     <div className='w-3/4' onClick={() => setSelectedProject(null)}>
                         <PortableText value={proj.content} />
                     </div>
                 )}


             </motion.div>
         ))}
     </motion.div>

      </>
  
          
           

     
    )



}
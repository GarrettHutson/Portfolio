'use client'
import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { motion } from 'framer-motion'
import { PortableText } from "@portabletext/react";
type Props = {
  params: { project: string }
}


async function Project({ params }: Props) {

  const slug = params.project;
  const proj = await getProject(slug);
  return (
    <div className='flex flex-col items-center mx-24'>
    <motion.div
      drag
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1, x: 0,
        transition: { duration: 1, delay: 1 },
      }}
      className=' flex flex-col w-3/4 border-black border-2 items-center my-8 p-8 mx-8 gap-4'
    >
      <h2
        className='text-4xl'
      >{proj.name}</h2>
      <Image
        src={proj.images[0]}
        alt={proj.name}
        width={850}
        height={850}
        className=" rounded-lg border hover:cursor-pointer border-gray-500 mx-4"
      />

      {proj.images.length > 1 && proj.images.slice(1).map((image, index) => (
        <Image
         key={index}
          src={image}
          alt={proj.name}
          width={500}
          height={500}
          className="object-cover rounded-lg border border-gray-500 mx-4"
        />
      ))}

      <div className='w-3/4 text-xl tracking-wider '
      >
        <PortableText value={proj.content} />
      </div>

    </motion.div>
    
    </div>
  )
}

export default Project;
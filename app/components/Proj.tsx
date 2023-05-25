'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { Project } from "@/types/Project";
type Props = {
 project: Project 
}

function Proj( props): JSX.Element {
  const proj = props.project;
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State variable for selected image
  console.log(selectedImage)
  // Function to open the modal
  const openModal = (image: string) => {
    setSelectedImage(image);

  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center align-center mx-24 text-white">
      <motion.div
        drag
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 1 },
        }}
        className="flex flex-col w-3/4 border-white border-2 items-center my-8 p-8 mx-8 gap-4"
      >
        <h2 className="text-4xl font-bold">{proj.name}</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">

            {proj.images.map((image, index) => (
              <div
                key={index}
                className="hover:scale-x-95 hover:scale-y-95 rounded-lg border hover:cursor-pointer flex items-center justify-center"
                onClick={() => openModal(image)} // Open the modal on click
              >
                <Image
                  src={image}
                  alt={proj.name}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            ))}
        </div>
  
        <div className="w-3/4 text-lg tracking-wider mt-8">
          <PortableText value={proj.content} />
        </div>
      </motion.div>
  
      {selectedImage && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-70">
          <Image
            src={selectedImage}
            alt={proj.name}
            width={1000}
            height={1000}
            className="rounded-lg border border-gray-500"
          />
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
  

}

export default Proj;
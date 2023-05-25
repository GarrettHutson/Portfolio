'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
function Header() {

  const [header, setHeader] = useState('')
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [role,setRole] =useState('')
  const jobs = ['Code', 'Climb']
  const area = ['Rifle Mountin Park', 'Red River Gorge', 'New River Gorge', 'Smith Rock', 'Hueco Tanks', 'Bishop', 'Yosemite', 'Rocky Mountain National Park', 'Indian Creek', 'Rifle', 'Ten Sleep', 'Maple Canyon'];

  useEffect(() => {
    const jobsCount = setTimeout(() => {
      const intervalId = setInterval(() => {
        setCount2((prevCount) => {
          if (prevCount === jobs.length - 1) {
            return 0
          }
          return (prevCount + 1)
        });
      }, 3000);
      return () => clearInterval(intervalId);
    }, 3000);
  
    return () => clearTimeout(jobsCount);
  }, []);
  
  useEffect(() => {
    const headerText = `Hi, I'm Garrett, I `;
    let index = 0;
    const intervalId = setInterval(() => {
      setHeader((prev) => headerText.slice(0, index + 1));
      index++;
      if (index >= headerText.length - 1) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);


  return (
<section 
className='flex flex-col'>
<motion.div
initial={{y:'-95vh'}}
animate={{y:'5vh', transition:{duration:.5,}}}
//make a div that is the size of the screen and has a background color of blue and a z index of -1 and is fixed to the top left
className="fixed top-0 left-0 w-screen h-[90%] bg-gradient-to-r
        from-red-700
         to-orange-500
         background-animate z-[-1]"
></motion.div>

<motion.h2
initial={{y:'-100vh'}}
animate={{y:0, transition:{duration:.5, delay:.5}}}
className='mx-auto  mt-24 font-thin  hover:font-serif text-[10rem]'
>
<Link href={'/notHome/code'}>CODE</Link></motion.h2>
<motion.h2
initial={{y:'-100vh'}}
animate={{y:0, transition:{duration:.5,}}}
className='mx-auto font-thin hover:font-serif text-[10rem]'
>
<Link href={'/notHome/climb'}>CLIMB</Link></motion.h2>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "10vh",  transition: { duration: 1, delay: .25 } }}
        className='flex flex-col items-center gap-4 text-white w-full'>
        <motion.h2
          className='  md:text-2xl text-center mt-16'>
          {header}        
           <AnimatePresence mode='wait'>
       
            <motion.span
              className='md:text-2xl'
              key={jobs[count2]}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1,   },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 1 },
              }}
            >
       
            {jobs[count2]}
            </motion.span>
          </AnimatePresence>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay:1 },
          }}
     
        >Full Stack Developer currently working in freelance and open source.</motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.5 },
          }}
          className='mb-24'
        >
          Avid Rock Climber currently based in{' '}
          <AnimatePresence mode='wait'>
            <motion.span
              className='text-xl'
              key={area[count]}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 1 },
              }}
            >
              {area[count]}
            </motion.span>
          </AnimatePresence>
          .
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Header
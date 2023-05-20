'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion'
function Header() {

  const [header, setHeader] = useState('')
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [role,setRole] =useState('')
  const jobs = ['Code', 'Climb', 'Design']
  const area = ['Rifle Mountin Park', 'Red River Gorge', 'New River Gorge', 'Smith Rock', 'Hueco Tanks', 'Bishop', 'Yosemite', 'Rocky Mountain National Park', 'Indian Creek', 'Rifle', 'Ten Sleep', 'Maple Canyon']
  // useEffect(() => {
  //   const count = setTimeout(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((prevCount) => (prevCount + 1) % area.length);
  //   }, 3000);
  // }, 3000);

  //   return () => clearInterval(intervalId);
  // }, []);

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

  // useEffect(() => {
  //   let index = 0;
  //   let roleText = jobs[index];
  //   let letter = 0;
  //   const intervalId = setInterval(() => {
  //     setRole((prev) => {
  //       if (letter === 0) {
  //         return roleText[0];
  //       } else {
  //         return roleText.slice(0, letter);
  //       }
  //     });
  //     letter++;
  //     if (letter >= roleText.length) {
  //       index++;
  //       letter = 0;
  //       if (index > jobs.length) {
  //         index = 0;
  //       }
  //       roleText = jobs[index];
  //       setRole('');
  //     }
  //   }, 500);
  
  //   return () => clearInterval(intervalId);
  // }, []);
  
  

  return (
<>
  {/* <motion.div
    initial={{ opacity: 1 }}
    animate={{
      opacity: 0,
      transition: { duration: 1, delay: 5 },
    }}
    className='bg-white  flex justify-center items-center h-screen text-center w-screen absolute top-0 left-0 z-10'
  >
  <p className='my-auto '>
  Hi, I'm Garrett, I Code.
  </p>

    </motion.div> */}
      <motion.div
        initial={{ y: "10vh" }}
        animate={{ y: "50vh", x: "20vw", transition: { duration: 1, delay: 3.5 } }}
        className='flex flex-col items-center gap-4 text-white'>
        <motion.h2
          className='  text-2xl text-center mt-16'>
          {header}        
           <AnimatePresence mode='wait'>
            <motion.span
              className='text-2xl'
              key={jobs[count2]}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, },
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
            transition: { duration: 1, delay: 3 },
          }}
        >Full Stack Developer currently working in freelance and open source.</motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 5 },
          }}
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
    </>
  )
}

export default Header
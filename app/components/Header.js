'use client'
import {useState, useEffect, useRef} from 'react'
import {motion, useTransform, useScroll,AnimatePresence } from 'framer-motion'
function Header() {

  const [header, setHeader] = useState('')
  const [count, setCount] = useState(0)
const area = ['Rifle Mountin Park','Red River Gorge', 'New River Gorge',  'Smith Rock', 'Hueco Tanks', 'Bishop',  'Yosemite', 'Rocky Mountain National Park', 'Indian Creek', 'Rifle', 'Ten Sleep', 'Maple Canyon']
useEffect(() => {
  const intervalId = setInterval(() => {
    setCount((prevCount) => (prevCount + 1) % area.length);
  }, 3000);

  return () => clearInterval(intervalId);
}, []);


useEffect(() => {
  const headerText = "Hi, I'm Garrett. I Code things, and Climb things.";
  let index = 0;
  const intervalId = setInterval(() => {
      setHeader((prev) => headerText.slice(0, index + 1));
      index++;
      if (index >= headerText.length - 1) clearInterval(intervalId);
  }, 100);

  return () => clearInterval(intervalId);
}, []);

  return (
  <>


    <motion.div

     initial={{ y: "10vh"}}
    animate={{ y: "50vh", x:"-20vw", transition: { duration: 1, delay: 5 } }}
     className='flex flex-col items-center gap-4 text-white'>
    <motion.h2
    
   
    className='  text-2xl text-center mt-16'>
    {header}
</motion.h2>
<motion.p
     initial={{ opacity: 0 }}
                 animate={{
                     opacity: 1,
                     transition: { duration:1, delay: 5 },
                 }}
>Full Stack Developer currently working in freelance and open source.</motion.p>
<motion.p
initial={{ opacity: 0 }}
                 animate={{
                     opacity: 1,
                     transition: { duration:1, delay: 5.8 },
                 }}

>
        Avid Rock Climber currently based in{' '}
        <AnimatePresence mode='wait'>
          <motion.span
          className='text-xl'
            key={area[count]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1,
              transition: { duration:1},
             }}
            exit={{ opacity: 0,
              transition: { duration:1},
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
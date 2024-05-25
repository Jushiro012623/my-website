import React, {useEffect, useRef, useState} from 'react';

//animation library
import {motion, useAnimation, useInView} from 'framer-motion'
import { CiSaveDown1  } from "react-icons/ci";
//typewritter library
import Typewriter from 'typewriter-effect';
// //images
import image from '../images/image.jpg';
// import data from '../Data';
import {data} from '../Datas'

function Landing() {
  const ref = useRef(null) //for wrapper 
  //animate when scrolled
  const isInView = useInView(ref);

  const mainAnimation = useAnimation();
  const [TransitionRemove, setTransitionRemove] =useState({duration: 0.5, delay: 0.75})
  //if the section is in view do the animation
  useEffect(() => {

    if (isInView) {
      mainAnimation.start('visible')
      setTransitionRemove({ duration: .3, delay: 0 });
    }
  }, [isInView])

  const handleDownload = () => {
      // Open the downloaded PDF
      const link = document.createElement('a');
      link.href = 'Ivan-Macabontoc-Resume.pdf';
      link.target = '_blank';
      link.click();
    
  };

  return (
    <>
    <section ref={ref} className='landing' id='home'>
      <motion.div className='picture' 
        variants={{
          hidden: { x: 200, opacity: 0},
          visible: { x: 0, opacity: 1}}}
        initial='hidden'
        animate={mainAnimation}
        transition={{duration:.5, delay:.25}}
      >
        <img src={image} alt="My Picture"/>
      </motion.div>

      <div className='text-container'>
        <motion.h3
          variants={{
            hidden: { y: 200, opacity: 0},
            visible: { y: 0, opacity: 1}}}
          initial='hidden'
          animate={mainAnimation}
          transition={{duration:.5}}
        >
          hello, i'm
        </motion.h3>
        <motion.h1 
          variants={{
            hidden: { y: 200, opacity: 0},
            visible: { y: 0, opacity: 1}}}
          initial='hidden'
          animate={mainAnimation}
          transition={{duration:.5, delay:.25}}
        >
          {data.firstName} {/* FIrst Name */}
          
            <span className='lname'>{data.lastName}</span> {/* LAST Name */}
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { y: 200, opacity: 0},
            visible: { y: 0, opacity: 1}}}
          initial='hidden'
          animate={mainAnimation}
          transition={{duration:.5, delay:.50}}
        >
          <Typewriter
            options={{
              strings: data.profession,
              autoStart: true,
              loop: true,
            }}
          />  
        </motion.h2>
        <motion.a className='cv-resume'
          value="download"
          variants={{
            hidden: { y: 200, opacity: 0},
            visible: { y: 0, opacity: 1}
          }}
          whileTap={{scale:1}}
          whileHover={{scale:1.02}}
          initial='hidden'
          animate={mainAnimation}
          transition={TransitionRemove}
          onClick={handleDownload}
        >
          Download CV
          <CiSaveDown1 />
        </motion.a>
      </div>
    </section>
    </>
  );
}

export default Landing;
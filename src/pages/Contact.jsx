import React, {useRef, useEffect}from 'react'

//framer motion
import {motion, useAnimation, useInView} from 'framer-motion'

import {data} from '../Datas'
import Icons from '../components/Icons';
function Contact() {
  const ref = useRef(null) //for wrapper 
  //animate when scrolled
  const isInView = useInView(ref, {once:true});

  const mainAnimation = useAnimation();

  //if the section is in view do the animation
  useEffect(() => {

    if (isInView) {
      mainAnimation.start('visible')
    }
  }, [isInView])

  return (
    <>
    {/* // <section className='container contact' id='contact'> */}
        <motion.div ref={ref} className='contact-container'
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1 }
              }}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 1, delay: .25 }}
        >
            {data.category.map((category, index) => (
              <div key={index} className='contact-content'
                  >
                <i>{category.icons}</i>
                <a href={category.link} target={category.target} >{category.contact} </a>
              </div>
            ))}
        </motion.div>
        <motion.div
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1 }
              }}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 1, delay: .75 }}
        >
          <Icons icons={data.socialMeida} iconsContainer='social-media'/>
        </motion.div>
    {/* </section> */}
    </>
  )
}

export default Contact
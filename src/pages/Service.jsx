import React, {useEffect, useRef} from 'react';

import Icons from '../components/Icons';
import {data} from '../Datas'
//framer motion
import {motion, useAnimation, useInView} from 'framer-motion'

function Service() {
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
    {/* <div className='container service' id='service'> */}
        <div className='service-container' ref={ref} >
            
            {data.services.map((service, index) => (
                
                    <motion.div className='service-content' key={index}
                        variants={{
                            hidden: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                            }}
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'}
                        transition={{ duration: 1, delay: .25 * index }}
                    >
                        <h3>{service.title}</h3>
                        <h5>{service.text}</h5>
                        <Icons icons={service.icons} iconsContainer="service-icons" />
                    </motion.div>
            ))}
        </div>
    </>
  )
}

export default Service
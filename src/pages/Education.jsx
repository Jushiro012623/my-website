import React, {useRef, useEffect} from 'react'

import {motion, useAnimation, useInView} from 'framer-motion'

import {data} from '../Datas'
function Education() {
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

    return(
        <>
        {/* <section ref={ref} className='container education' id='education'> */}
            <div ref={ref} className='education-container'>
                {data.educationData.map((item, index)=>(
                    <motion.div key={index} className='education-content'
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                            }}
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'}
                        transition={{ duration: .75, delay: .25 * index }}
                    >
                        <h3>{item.year}</h3>
                        <h2>{item.title}</h2>
                        <h5>{item.location}</h5>
                    </motion.div>
                ))}
            </div>
        {/* </section> */}
        </>
    )
}

export default Education
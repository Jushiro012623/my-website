import React, {useRef, useEffect} from 'react'

import {motion, useAnimation, useInView} from 'framer-motion'
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

    //array object of information (year, course, location)
    const educationData = [
        {   year: '2023', title: 'IT Specialist', location: 'Department of Education - Manila' },
        {   year: '2019', title: 'Bachelor of Science in Information Technology', location: 'Universidad De Manila' },
        {   year: '2017', title: 'Information & Communication Technology', location: 'Timoteo Paez Integrated School' }
      ];

    return(
        <>
        {/* <section ref={ref} className='container education' id='education'> */}
            <div ref={ref} className='education-container'>
                {educationData.map((item, index)=>(
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
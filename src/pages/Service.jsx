import React, {useEffect, useRef} from 'react';

//import icons
import { SiCplusplus, SiCsharp, SiPython, SiJavascript, SiBlender, SiTailwindcss, SiDjango, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { FaJava, FaHtml5, FaReact, FaCss3, FaFigma, FaBootstrap } from "react-icons/fa";

import Icons from '../components/Icons';

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
  
    //array of icons
    const programmingIcons = [<SiCplusplus />, <SiCsharp />, <SiPython />, <FaJava />];
    const webDevelopingIcons = [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaReact />];
    const designingIcons = [<SiAdobephotoshop />, <SiAdobeillustrator />, <SiBlender />];
    const uiux = [<FaFigma />]

    //array of objects for ( title, text, icons )
    const services =[
        {title: 'Frontend Development', text: 'I work with HTML/CSS, React and Django for Development.', icons: webDevelopingIcons},
        {title: 'Digital art / Graphic Designing', text: 'I use Adobe Photoshop, Illustrator and Blender for 3D rendering. ', icons: designingIcons},
        {title: 'Web Design', text: "I use Figma to create intuitive and visually appealing digital experiences.", icons: uiux},
        {title: 'Developer', text: "As a programmer, I develop efficient software solutions for various platforms and applications.", icons: programmingIcons},
    ];
    
  return (
    <>
    {/* <div className='container service' id='service'> */}
        <div className='service-container' ref={ref} >
            
            {services.map((service, index) => (
                
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
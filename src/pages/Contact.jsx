import React, {useRef, useEffect}from 'react'

//framer motion
import {motion, useAnimation, useInView} from 'framer-motion'

//icons
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook ,FaInstagram,FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

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

  //array of objects contacts text and its icons
  const category =[
                {   target:'_blank', link:'https://mail.google.com/mail/u/0/#inbox?compose=new', contact: 'ivanallen64@gmai.com' , icons: <SiGmail />, class: 'gmail'},
                { target:'',link: '#contact', contact: '+63-9125-2797-54', icons: <BsTelephoneFill/>, class: 'phone' }
              ]
  // set icons to Icons.jsx 
  const socialMeida = [ 
                        <a href='https://www.facebook.com/requiemzero09' target='_blank' ><FaFacebook /></a>,  
                        <a href='https://www.instagram.com/sternritter_ivan/' target='_blank'><FaInstagram /></a>, 
                        <a href='https://www.linkedin.com/in/ivan-macabontoc-0a0712295' target='_blank'><FaLinkedin /></a>, 
                        <a href='https://www.twitter.com/Jushiro012623' target='_blank'><FaTwitter /></a>,
                        <a href='https://github.com/Jushiro012623' target='_blank'><FaGithub /></a>
                      ];
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
            {category.map((category, index) => (
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
          <Icons icons={socialMeida} iconsContainer='social-media'/>
        </motion.div>
    {/* </section> */}
    </>
  )
}

export default Contact
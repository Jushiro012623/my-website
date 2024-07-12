import React, { useEffect, useRef } from 'react'
// Import pages
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Service from './pages/Service'
import Education from './pages/Education'
// import { About, Skills, Education } from './pages/About'
import Portfolio from './pages/Portfolio'
import Expertise from './pages/Expertise'
import Contact from './pages/Contact'

// framer motion
import { motion, useAnimation, useInView } from 'framer-motion'

function Home() {
  const sections = [
    { sub: 'explore my', title: 'projects', content: <Portfolio />, class: ' portfolio', id: 'portfolio' },
    { sub: 'this is my', title: 'services', content: <Service />, class: ' service', id: 'service' },
    { sub: 'see my', title: 'education & experience', content: <Education />, class: ' education', id: 'education' },
    { sub: 'learn about my', title: 'expertise', content: <Expertise />, class: ' expertise', id: 'expertise' },
    { sub: 'get in touch', title: 'contact', content: <Contact />, class: ' contact', id: 'contact' },
  ]

  return (
    <>
      <Nav />
      <Landing />
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </>
  )
}

function Section({ section }) {
  const ref = useRef(null) // for wrapper
  // animate when scrolled
  const isInView = useInView(ref, { once: true })

  const mainAnimation = useAnimation()

  // if the section is in view do the animation
  useEffect(() => {
    if (isInView) {
      mainAnimation.start('visible')
    }
  }, [isInView])

  return (
    <section ref={ref} className={`container ${section.class}`} id={section.id}>
      <motion.h5
        id="subtitle"
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {section.sub}
      </motion.h5>
      <motion.h1
        id="title"
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {section.title}
      </motion.h1>
      {section.content}
    </section>
  )
}

export default Home

import React, { useEffect, useRef, useState } from 'react';

// framer motion
import { motion, useAnimation, useInView } from 'framer-motion';
// components
import Icons from '../components/Icons';
import {data} from '../Datas'
import { IoCloseOutline } from "react-icons/io5";
function Portfolio() {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null); // for wrapper
  const isInView = useInView(ref, { once: true });
  const mainAnimation = useAnimation();

  // if the section is in view do the animation
  useEffect(() => {
    if (isInView) {
      mainAnimation.start('visible');
    }
  }, [isInView]);

  // Function to handle click on a project-info
  const handleProjectInfoClick = (index) => {
    setSelectedImage(data.images[index].fscreenImg);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div ref={ref} className='project-container'>
        {data.images.map((image, index) => (
          <motion.div
            key={index}
            className='project-info'
            variants={{
              hidden: index === 2 ? { x: 100, opacity: 0 } : { y: 100, opacity: 0 },
              visible: index === 2 ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 },
            }}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 1, delay: 0.50 * index }}
          >
            <div className='project-text'>
              <h2>{image.title}</h2>
              <h5>{image.info}</h5>
            </div>
            <Icons icons={image.icons} iconsContainer='project-tools'/>
            <a href={image.link} target="_blank" id="project-preview-link">View</a>
            <div className='project-image' 
            onClick={() => handleProjectInfoClick(index)}>
              <img src={image.img} alt="" />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal to display selected image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <button className="exit-button" onClick={closeModal}><IoCloseOutline /></button>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </>
  );
}

export default Portfolio;

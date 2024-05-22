import React, { useEffect, useRef, useState } from 'react';

// framer motion
import { motion, useAnimation, useInView } from 'framer-motion';

// components
import Icons from '../components/Icons';

import { IoCloseOutline } from "react-icons/io5";
// images
import tc from '../images/tc.png';
import udm from '../images/UDMAPS.png';
import clinic from '../images/clinic.png';
import bms from '../images/bms.png';
import fsBms from '../images/fsBms.png';
import fsTc from '../images/fsTc.png';
import fsClinic from '../images/fsClinic.png';
import fsUdmaps from '../images/UDMAPS.jpg';

function Portfolio() {
  // array of info
  const tcInfo = "Truimp is your go-to thrift shop where you can find a wide range of thrifted products at unbeatable prices.";
  const udInfo = "UDMAPS is an AR Navigation system exclusively only for UDM vicinity.";
  const clInfo = "UDM Clinic System is built to track the patient's medical records.";
  const bmsInfo = "Barangay Management System is built for the barangay 107 residence and councils.";

  // array of image
  const images = [
    { img: tc, title: 'Thruimp Co. Shop', icons: ['ReactJs', 'NodeJs'], info: tcInfo, fscreenImg: fsTc  },
    { img: bms, title: 'Barangay Management', icons: ['ReactJs', 'NextJs'], info: bmsInfo, fscreenImg: fsBms },
    { img: udm, title: 'UDMAPS AR NAVIGATION', icons: ['Unity', 'C Sharp', '3D Blender'], info: udInfo, fscreenImg: fsUdmaps },
    { img: clinic, title: 'UDM Clinic System', icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], info: clInfo, fscreenImg: fsClinic },
    { img: bms, title: 'Barangay Management', icons: ['ReactJs', 'NextJs'], info: bmsInfo, fscreenImg: fsBms }
  ];

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
    setSelectedImage(images[index].fscreenImg);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div ref={ref} className='project-container'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className='project-info'
            variants={{
              hidden: index === 2 ? { x: 100, opacity: 0 } : { y: 100, opacity: 0 },
              visible: index === 2 ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 },
            }}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 1, delay: 0.75 * index }}
            onClick={() => handleProjectInfoClick(index)}
          >
            <div className='project-text'>
              <h2>{image.title}</h2>
              <h5>{image.info}</h5>
            </div>
            <Icons icons={image.icons} iconsContainer='project-tools' />
            <div className='project-image'>
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

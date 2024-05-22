import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import Dark from './Dark';
//icons
import { GoPerson } from "react-icons/go";
import { CiMail, CiGrid42 ,CiHome  } from "react-icons/ci";

function NavLinks({navLinks}) {

  const scroll = el => { // this is for smooth scrolling and to make the section in the middle

    setTimeout(() => { //this setTimeout is for duration 
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200); 
  };
  return (
    <>
      <ul className={`nav-links ${navLinks}`}>
        <li><Link smooth to='#home' scroll={scroll}><CiHome/> <span className='link-text'>Home</span></Link></li>
        <li><Link smooth to='#portfolio' ><CiGrid42/> <span className='link-text'>Portfolio</span></Link></li>
        <li><Link smooth to='#education' scroll={scroll}><GoPerson/> <span className='link-text'>About me</span></Link></li>
        <li><Link smooth to='#contact' scroll={scroll}><CiMail/> <span className='link-text'>Contact</span></Link></li>
        <Dark />
      </ul>
    </>
  );
}

export default NavLinks;

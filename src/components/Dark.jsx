import React, { useState } from 'react';

//icons
import { HiMoon, HiMiniSun  } from "react-icons/hi2";


function Dark() {

    const [darkMode, setDarkMode] = useState(false);

    
    const makeItDarkMode = () => {//make it dark or light

        setDarkMode(!darkMode); //dark is true

        document.body.classList.toggle('dark'); //add dark mode class to body

        if (!darkMode) { //if dark mode is true

          setTimeout(() => { //this for transition only 
            document.body.classList.toggle('smooth-transition');
          }, 1000);
        } 
        else {
          setTimeout(() => { //this for transition only 
            document.body.classList.toggle('smooth-transition');
          }, 1000);
        }
      };
  
  return (

    <div onClick={makeItDarkMode} className='dark-light'>
        <div>
            {darkMode ? <HiMoon /> : <HiMiniSun />}
        </div>
    </div>
  )
}

export default Dark
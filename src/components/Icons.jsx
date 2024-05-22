import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Icons({icons, iconsContainer, links}) {
  return (
    
    //mapping every icon that's imported
    <ul className={`${iconsContainer}`} > 
        {icons.map((icon, index)=>(
            <li key={index} >{icon}</li>
        ))}
    </ul>
  )
}

export default Icons
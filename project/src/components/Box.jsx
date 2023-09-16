import React, { useState } from 'react'

export default function Box() {
    const [color,whichColor]=useState("#00407A");
    function reverse()
    {
        const alter=color==="#00407A"?"#7A0000":"#00407A";
        whichColor(alter);
    }

  return (
    <div className='smallBox' onClick={reverse} style={{background:color}}>
        
    </div>
  )
}

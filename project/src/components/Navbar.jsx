import React, { useState } from 'react'



export default function Navbar() {

   const [open,isOpen]=useState(false);
   function handleClick(){
      var toggle=open?false:true;
      isOpen(toggle);
   }

  return (
    <>
      <div className="navbar">
        <div className="toggle-section" >
            <div className="toggle" >
                <div className={open?"toggle-box active":"toggle-box"} id="toggle-box" onClick={handleClick}>
                    <div className="line-1"></div>
                    <div className="line-3"></div>
                    <div className="line-2"></div>
                </div>
            </div>
        </div>
        <div className={open?"nav-box active":"nav-box" } id="nav-box">
              <ul>
                <li> <a href="/" target="_blank">Home</a></li>
                <li> <a href="/" target="_blank">Grid</a></li>
                <li> <a href="/" target="_blank">LinkedIn</a></li>
              </ul>
        </div>
    </div>
    </>
  )
}

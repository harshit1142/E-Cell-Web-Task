import React from 'react'
import pic from '../Images/myself.png'

export default function Home() {
  return (
    <>
     <div className="home">
        <div className="main">
            <div className="content">
            <div className='info'>
                  <h1>Harshit Pandey</h1>
                  <h4>Biotechnology,Sophomore</h4>
                  <p>Registration No. : 20220024</p>
            </div>
            <div className="link">
                <a  className='btn' href="https://www.instagram.com/harshitpandey_0024/">Instagram</a>
                <a className='btn' href="https://harshitpandey0024.netlify.app/">Portfolio</a>
                <a  className='btn'href="https://github.com/harshit1142">GitHub</a>
            </div>     
            </div>

            
            <div className="pic">
               <img src={pic} alt="" />
            </div>
        </div>
     </div>
    </>
  )
}

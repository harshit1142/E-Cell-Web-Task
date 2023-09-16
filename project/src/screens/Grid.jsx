import React from 'react'
import img2 from "../Images/E-Cell.png"
import Box from '../components/Box';

export default function Grid() {
    const boxes=[1,2,3,4,5,6,7,8,9];
  return (
    <>
        <div className="grid">
            <div className="grid-box">
                <div className="box box1">
                </div>
                <div className="box box2">
                   <img src={img2} alt="E-Cell" />
                </div>
                <div className="box box3">
                   {boxes.map(ele=>
                       <Box />
                   )}
                </div>
            </div>
        </div>
    </>
  )
}

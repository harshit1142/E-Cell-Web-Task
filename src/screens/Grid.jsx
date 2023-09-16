import React from 'react'
import img2 from "../Images/E-Cell.png"
import Square from '../components/Square'

export default function Grid() {
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
                  <Square />
                </div>
            </div>
        </div>
    </>
  )
}

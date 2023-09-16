import React from 'react'
import Box from './Box';

export default function Square() {
    const boxes=[1,2,3,4,5,6,7,8,9];
    return (
    <>
         {boxes.map(ele => <Box ele={ele} key={ele} />)}
    </>
  )
}

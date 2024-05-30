import React, { useState } from 'react'

function ColorComp({colorHandler}) {
 
  return (
    <div className=''>
        <input type="text" className=' border border-black' placeholder=' enter color' onChange={colorHandler}/>
    </div>
  )
}

export default ColorComp
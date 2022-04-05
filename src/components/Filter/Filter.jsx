import React, { useState } from 'react'
import './filter.css'
const Filter = () => {
    const [show, setShow]=useState(false)
  return (
      <>
       <div className='Filter'>Filter
    <button>button</button>
    <h1 show={show}>dwds</h1>
    </div>
      </>
   
    
  )
}

export default Filter
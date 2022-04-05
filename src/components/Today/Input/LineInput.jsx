import React from 'react'
import './lineInput.css'
const LineInput = (props) => {
  return (
    <div className='lineInput'>
    <input placeholder='Название раздела' className='input' type="text"  autoComplete='off'/>
    <div className='btn'>
           <button className='add' type='submit'>
          Добавить задачу
      </button>
      <button className='close' onClick={()=>props.setLineOpen(false)}>Отмена</button>
      </div>
</div>
  )
}

export default LineInput
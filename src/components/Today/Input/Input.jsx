import React from 'react'
import './input.css'

const Input = (props) => {
  return (
      <>
      <div className='box'>

        <form action="">

        <input className='input-text' placeholder='напр, Конференция среда ' type="text"  autoComplete='off'/>
<br />
<input className='input-text' placeholder='Описание' type="text"  autoComplete='off'/>  
        </form>


      </div>
      <div className='btn'>
           <button className='add' type='submit'>
          Добавить задачу
      </button>
      <button className='close' onClick={()=>props.setModalOpen(false)}>Отмена</button>
      </div>
      
      </>
    
      
  )
}

export default Input
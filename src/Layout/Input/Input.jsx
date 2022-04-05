import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, storage } from 'firebase/firestore'

import {db} from '../../firebase-config'
import './input.css'

const Input = (props) => {


  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

const [users, setUsers] = useState([]);
const usersCollectionRef = collection(db, 'users');

const createUser = async () => {
await addDoc(usersCollectionRef , { name:newName, age: newAge });
}

const updataUser = async (id, age) => {
const userDoc = doc(db, 'users', id);
const newFields = {age: age + 1};
await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
const userDoc = doc(db, 'users', id);
await deleteDoc(userDoc);
}

useEffect(() => {
  const getUsers = async () => {
const data = await getDocs(usersCollectionRef);
setUsers(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
console.log(data);

  }
getUsers()

}, [])

  return (
      <>
      <label htmlFor="">
      {users.map((user, id) => {
      return (
<div >
    {/* <div className='box'>
<input className='input-text' placeholder='напр, Конференция среда ' name="service" type="text" id="service" required  autoComplete='off'  
               />
<br />
<input className='input-text' placeholder='Описание' type="text" autoComplete='off'/>

      </div> */}
      <div className='btn'>
           {/* <button className='add' 
           type="button">
          Добавить задачу
      </button> */}
      <div className='c'>
          <div className='user'>
        <div className='text-name'> {user.age}</div>
          <div className='text-task'> {user.name}</div>
      </div>
      
           <button className='delete' onClick={() => {deleteUser(user.id)}}>Delete User</button> 
      </div>
    
<hr />
      {/* <button className='close' onClick={()=>props.setModalOpen(false)}>Отмена</button> */}

      </div>
</div>
    
    )
  })} 
  <div className='box'>
      <input className='input-text second' type='text' placeholder='напр, Конференция среда' onChange={(event) => {setNewAge(event.target.value)}}/>
        <input className='input-text first' placeholder='Описание' onChange={(event) => {setNewName(event.target.value)}}/>
      </div>
          <button className='add' onClick={createUser}>Добавить задачу</button>
      <button className='close' onClick={()=>props.setModalOpen(false)}>Отмена</button>

      </label>
      </>
    
      
  )
}

export default Input
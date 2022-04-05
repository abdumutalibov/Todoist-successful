import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
    const todos =useSelector(state => state.todos.todos);
  return (
    <ul>
        { todos.length > 0?
        <div>
              {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          
        />
      ))}
        </div>
        :<div style={{fontSize:'2rem' }}>
        Client not egzist
         </div>
      }
      
     
    </ul>
  );
};

export default TodoList;


const defaultState = {
    customers: []
}

const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'ADD_MANY_CUSTOMERS' :
        return {...state, customers: [...state.customers, ...action.payload]}
    
    default:
        return state
    }
    }
    export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})


    export const fetchCustomers = () => {
        return function (dispatch){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
        }
            
        
    }
    
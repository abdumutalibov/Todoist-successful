import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types";


// const second = JSON.parse(localStorage.getItem("tasks")).tasks;
const initialState = {
  data: []
};
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:{
    //   localStorage.setItem(
    //     "second",
    //     JSON.stringify({ second: [...state.comments, action.data] })
    //   );
      return {
        
          ...state,
          data: [...state.data, action.message]
      };}
      case DELETE_TODO:

      
        return {
          ...state,
          data: [...state.data.filter((todo) => todo.id !== action.id)],
        };
    case UPDATE_TODO:
      const { message } = action;
            const { data } = state;
            const itemIndex = data.findIndex((res) => res.id === message.id);
            const nextComments = [
              ...data.slice(0, itemIndex),
              message,
              ...data.slice(itemIndex + 1),
            ];
            // localStorage.setItem(
            //   "tasks",
            //   JSON.stringify({ tasks: [...nextComments] })
            // );
      
            return {
              ...state,
              data: nextComments,
              //   comments:[...state.comments, action.data]
            };
      default:
          return state
  }
};

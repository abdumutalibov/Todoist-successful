import {
  ADD_TODO,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
  DELETE_TODO,
  INPUT_TEXT,
  UPDATE_TODO,
} from "./types";

export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text,
  };
};

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
};

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
};

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    id,
  };
};

export const addTodo = (text, id) => ({
  type: ADD_TODO,
  message: { text, id },
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = ( text, id ) => ({
  type: UPDATE_TODO,
  message: { text, id },
});

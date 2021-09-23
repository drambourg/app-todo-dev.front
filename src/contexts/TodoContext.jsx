import React, { createContext, useReducer } from 'react';
import { TodoReducer } from '../reducers/TodoReducer';

export const TodoContext = createContext();

// Initialize context state
export const initialState = {
  filters: {},
  orderBy: 'DATE_ASC',
};

// Define provider w/ initial state
const TodoContextProvider = (props) => {
  const [todoContext, dispatch] = useReducer(TodoReducer, initialState, () => {
    return initialState;
  });

  return (
    <TodoContext.Provider value={{ todoContext, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

import React from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { useContext, useEffect } from 'react/cjs/react.development';

// Apply todo status filter
const TodoFilterByIsDone = () => {
  const { todoContext, dispatch } = useContext(TodoContext);

  // Refresh on context updated
  useEffect(() => {}, [todoContext.filters]);

  const handleCheckTodoIsDone = (e) => {
    try {
      dispatch({
        type: 'TOGGLE_FILTER_ISDONE',
        isDone: e?.target?.value || null,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <input
        type='radio'
        value=''
        id='isDoneAll'
        name='isDoneStatus'
        checked={!todoContext.filters.hasOwnProperty('isDone')}
        onChange={handleCheckTodoIsDone}
      />
      <label htmlFor='isDoneAll'>All status</label>
      <input
        type='radio'
        value='true'
        id='isDone'
        name='isDoneStatus'
        checked={
          todoContext.filters.hasOwnProperty('isDone') &&
          todoContext.filters.isDone
        }
        onChange={handleCheckTodoIsDone}
      />
      <label htmlFor='isDone'>Done</label>
      <input
        type='radio'
        value='false'
        id='notDone'
        name='isDoneStatus'
        checked={
          todoContext.filters.hasOwnProperty('isDone') &&
          !todoContext.filters.isDone
        }
        onChange={handleCheckTodoIsDone}
      />
      <label htmlFor='notDone'>In progress</label>
    </div>
  );
};

export default TodoFilterByIsDone;

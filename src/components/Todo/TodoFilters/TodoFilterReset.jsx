import React from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { useContext } from 'react/cjs/react.development';
import { Button } from '../../_common/Button/Button.style';
import { GET_TODO_TYPES } from '../../../models/gql/queries/Todo.gql';
import { useQuery } from '@apollo/client';

// Reset filters
const TodoFilterReset = () => {
  const { dispatch } = useContext(TodoContext);
  const { error, data } = useQuery(GET_TODO_TYPES);

  if (error) return `Error! ${error.message}`;

  const handleResetFilter = () => {
    try {
      let todoTypes =
        data &&
        data?.__type?.enumValues &&
        Array.from(data?.__type?.enumValues, (todoType) => todoType.name);
      todoTypes && dispatch({ type: 'RESET_LIST', todoTypes });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button onClick={handleResetFilter}>Réinitialiser</Button>
    </div>
  );
};

export default TodoFilterReset;

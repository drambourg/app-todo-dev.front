import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../../models/gql/queries/Todo.gql';

const TodoList = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  return (
    <>
      {loading && <div>load...</div>}
      {error && <div>{`Unexpected error = ${error}`}</div>}
      {data && (
        <div>
          {data?.getTodoList &&
            data.getTodoList.map((todo, index) => (
              <div key={index}>{todo.id}</div>
            ))}
        </div>
      )}
    </>
  );
};

export default TodoList;

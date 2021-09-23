import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../../models/gql/queries/Todo.gql';
import TodoCard from '../TodoCard/TodoCard';
import { TodoListContainer } from './TodoList.style';

const TodoList = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  return (
    <>
      {loading && <div>load...</div>}
      {error && <div>{`Unexpected error = ${error}`}</div>}
      {data && (
        <TodoListContainer>
          {data?.getTodoList &&
            data.getTodoList.map((todo, index) => (
              <TodoCard key={`todo-${index}`} todo={todo} />
            ))}
        </TodoListContainer>
      )}
    </>
  );
};

export default TodoList;

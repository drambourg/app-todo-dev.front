import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../../models/gql/queries/Todo.gql';
import TodoCard from '../TodoCard/TodoCard';
import { HeaderListContainer, TodoListContainer } from './TodoList.style';
import { TodoContext } from '../../../contexts/TodoContext';
import LoaderSpinner from '../../_common/LoaderSpinner/LoaderSpinner';

const TodoList = () => {
  const { todoContext } = useContext(TodoContext);

  const { data, loading, error, refetch } = useQuery(GET_TODOS, {
    variables: {
      filters: todoContext.filters,
      orderBy: todoContext.orderBy,
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    pollInterval: 0,
  });

  return (
    <>
      {loading && <LoaderSpinner />}
      {error && <div>{`Unexpected error = ${error}`}</div>}
      {data && (
        <>
        <HeaderListContainer>{`${data?.getTodoList?.length} résultat(s)`}</HeaderListContainer>
        <TodoListContainer>
          {data?.getTodoList &&
            data.getTodoList.map((todo, index) => (
              <TodoCard key={`todo-${index}`} todo={todo} refetch={refetch} />
            ))}
        </TodoListContainer>
        </>
      )}
    </>
  );
};

export default TodoList;

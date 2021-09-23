import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODO_TYPES } from '../../../models/gql/queries/Todo.gql';
import { TodoContext } from '../../../contexts/TodoContext';
import { FilterCheckBox, FilterCheckBoxContainer } from './TodoFilters.style';

// Apply todo types filters
const TodoFilterByTodoTypes = () => {
  const { todoContext, dispatch } = useContext(TodoContext);
  const { error, data } = useQuery(GET_TODO_TYPES);

  // Refresh on context updated
  useEffect(() => {}, [todoContext.filters]);

  useEffect(() => {
    try {
      let todoTypes =
        data &&
        !todoContext.filters.types &&
        data?.__type?.enumValues &&
        // convert json property on array from enum result
        Array.from(data?.__type?.enumValues, (todoType) => todoType.name);
      todoTypes && dispatch({ type: 'FILTER_ALL_TYPES', todoTypes });
    } catch (e) {
      console.log(e);
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckTodoType = (e) => {
    try {
      let todoType = e.target.value;
      e.target.checked
        ? dispatch({ type: 'ADD_FILTER_TYPE', todoType })
        : dispatch({ type: 'REMOVE_FILTER_TYPE', todoType });
    } catch (e) {
      console.log(e);
    }
  };

  if (error) return `Error! ${error.message}`;

  return (
    <FilterCheckBoxContainer>
      {data?.__type?.enumValues &&
        data.__type.enumValues.map((todoType, index) => (
          <FilterCheckBox key={`filter-todo-type_${index}`}>
            <input
              type='checkbox'
              id={`todo-type_${index}`}
              name={`todo-type_${index}`}
              value={`${todoType.name}`}
              onChange={handleCheckTodoType}
              checked={
                !todoContext.filters.types ||
                todoContext.filters.types.includes(todoType.name)
              }
            />
            <label htmlFor={`todo-type_${index}`}>{`${todoType.name}`}</label>
          </FilterCheckBox>
        ))}
    </FilterCheckBoxContainer>
  );
};

export default TodoFilterByTodoTypes;

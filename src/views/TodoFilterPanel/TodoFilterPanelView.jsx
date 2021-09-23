import React from 'react';
import TodoFilterByTodoTypes from '../../components/Todo/TodoFilters/TodoFilterByTodoTypes';
import TodoFilterByTodoTypesShortCuts from '../../components/Todo/TodoFilters/TodoFilterByTodoTypesShortcuts';
import { FilterPanelContainer, FilterTitle } from './TodoFilterPanelView.style';

// Display TodoFilter panel as user view
const TodoFilterPanelView = () => {
  return (
    <FilterPanelContainer>
      <div>
        <FilterTitle>Filter by Todo Types</FilterTitle>
        <TodoFilterByTodoTypes />
        <TodoFilterByTodoTypesShortCuts />
      </div>
    </FilterPanelContainer>
  );
};

export default TodoFilterPanelView;

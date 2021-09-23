import React from 'react';
import TodoFilterByIsDone from '../../components/Todo/TodoFilters/TodoFilterByIsDone';
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
      <div>
        <FilterTitle>Filter by Todo Status</FilterTitle>
        <TodoFilterByIsDone />
      </div>
    </FilterPanelContainer>
  );
};

export default TodoFilterPanelView;

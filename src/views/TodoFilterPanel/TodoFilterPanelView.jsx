import React from 'react';
import TodoFilterByTodoTypes from '../../components/Todo/TodoFilters/TodoFilterByTodoTypes';
import { css } from '@emotion/react';
import { FilterPanelContainer, FilterTitle } from './TodoFilterPanelView.style';

// Display TodoFilter panel as user view
const TodoFilterPanelView = () => {
  return (
    <FilterPanelContainer>
      <div>
        <FilterTitle>Filter by Todo Types</FilterTitle>
        <TodoFilterByTodoTypes
          className={css`
            display: flex;
            flex-wrap: wrap;
          `}
        />
      </div>
    </FilterPanelContainer>
  );
};

export default TodoFilterPanelView;

import React from 'react';
import TodoList from '../../components/Todo/TodoList/TodoList';
import TodoFilterPanelView from '../TodoFilterPanel/TodoFilterPanelView';

const TodoListView = () => {
  return (
    <>
      <TodoFilterPanelView />
      <TodoList />
    </>
  );
};

export default TodoListView;

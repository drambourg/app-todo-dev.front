import React from 'react';
import { MainTitle } from '../../App.style';
import TodoList from '../../components/Todo/TodoList/TodoList';
import ButtonBackHome from '../../components/_common/Button/ButtonBackHome';
import TodoFilterPanelView from '../TodoFilterPanel/TodoFilterPanelView';

const TodoListView = ({ title }) => {
  return (
    <>
      <MainTitle>{title || 'Todos'}</MainTitle>
      <TodoFilterPanelView />
      <TodoList />
      <ButtonBackHome />
    </>
  );
};

export default TodoListView;

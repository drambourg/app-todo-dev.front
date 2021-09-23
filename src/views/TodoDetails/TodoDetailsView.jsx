import React from 'react';
import { useParams } from 'react-router';
import { MainTitle } from '../../App.style';
import TodoDetails from '../../components/Todo/TodoDetails/TodoDetails';
import { TodoDetailsContainer } from './TodoDetails.style';

// Page on one specific todo and its informations
const TodoDetailsView = ({ title }) => {
  let { id } = useParams();
  return (
    <>
      <MainTitle>{title || 'Todo details'}</MainTitle>
      <TodoDetailsContainer>
        <TodoDetails id={id} />
      </TodoDetailsContainer>
    </>
  );
};

export default TodoDetailsView;

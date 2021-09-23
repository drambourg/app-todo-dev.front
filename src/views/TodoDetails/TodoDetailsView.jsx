import React from 'react';
import { useParams } from 'react-router';
import TodoDetails from '../../components/Todo/TodoDetails/TodoDetails';
import { TodoDetailsContainer } from './TodoDetails.style';

// Page on one specific todo and its informations
const TodoDetailsView = () => {
  let { id } = useParams();
  return (
    <TodoDetailsContainer>
      <TodoDetails id={id} />
    </TodoDetailsContainer>
  );
};

export default TodoDetailsView;

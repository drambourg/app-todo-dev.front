import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../App.style';
import TodoDetails from '../../components/Todo/TodoDetails/TodoDetails';
import { OutlineButton } from '../../components/_common/Button/Button.style';
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
      <Link to='/todos'>
        <OutlineButton>Retour à la liste</OutlineButton>
      </Link>
    </>
  );
};

export default TodoDetailsView;

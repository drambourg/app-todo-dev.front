import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  Card,
  CardBody,
  CardTitle,
  CardBadge,
  CardHeader,
  CardFooter,
} from '../../_common/Card/Card.style';
import {
  ColoredButton,
  OutlineButton,
} from '../../_common/Button/Button.style';
import { timestampToDisplay } from '../../../helpers/timeConverter.helper';
import { UPDATE_TODO_STATUS } from '../../../models/gql/mutations/Todo.gql';

// Todo summary information and actions
const TodoCard = ({ todo, refetch }) => {
  const [updateTodoStatusById, { error }] = useMutation(UPDATE_TODO_STATUS);

  if (error) return `Error! ${error.message}`;

  const toggleTodoStatus = () => {
    try {
      todo.id &&
        updateTodoStatusById({
          variables: {
            id: todo.id,
            isDone: !todo.isDone,
          },
        });
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {todo && (
        <Card key={todo.id}>
          <CardHeader>
            <CardTitle>{todo.title || 'undefined'}</CardTitle>
            <ColoredButton primary={todo.isDone} onClick={toggleTodoStatus}>
              {todo.isDone ? 'Done' : 'To Do'}
            </ColoredButton>
          </CardHeader>
          <CardBody>
            <CardBadge>{todo.type || 'undefined'}</CardBadge>
            {todo.id && (
              <Link to={`todos/${todo.id}`}>
                <OutlineButton>More info ...</OutlineButton>
              </Link>
            )}
          </CardBody>
          <CardFooter>
            {(todo.createdAt && timestampToDisplay(todo.createdAt)) ||
              'No Date'}
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default TodoCard;

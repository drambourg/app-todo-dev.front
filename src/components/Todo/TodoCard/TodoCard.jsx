import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardBadge,
  CardHeader,
  CardFooter,
} from '../../_common/Card/Card.style';
import { ColoredButton } from '../../_common/Button/Button.style';
import { timestampToDisplay } from '../../../helpers/timeConverter.helper';

// Todo summary information and actions
const TodoCard = ({ todo }) => {
  return (
    <>
      {todo && (
        <Card key={todo.id}>
          <CardHeader>
            <CardTitle>{todo.title || 'undefined'}</CardTitle>
            <ColoredButton primary={todo.isDone}>
              {todo.isDone ? 'Done' : 'To Do'}
            </ColoredButton>
          </CardHeader>
          <CardBody>
            <CardBadge>{todo.type || 'undefined'}</CardBadge>
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

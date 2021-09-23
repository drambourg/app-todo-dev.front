import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { TodoContext } from '../../../contexts/TodoContext';
import { Button } from '../../_common/Button/Button.style';

// Apply todo types shortcuts
const TodoFilterByTodoTypesShortCuts = () => {
  const { dispatch } = useContext(TodoContext);

  const handleShortCut = (shortCutName) => {
    switch (shortCutName) {
      case 'business':
        dispatch({ type: 'SET_FILTER_TYPE_BUSINESS' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button onClick={() => handleShortCut('business')}>Todo Business</Button>
    </div>
  );
};

export default TodoFilterByTodoTypesShortCuts;

import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { Button } from '../../_common/Button/Button.style';

// Sort Todo by date
const TodoFilterSorter = () => {
  const { todoContext, dispatch } = useContext(TodoContext);
  const [order, setOrder] = useState(todoContext.orderBy || 'DATE_ASC');

  const orderLabel = {
    DATE_ASC: 'date ascending',
    DATE_DESC: 'date decreasing',
  };

  // Refresh on context updated
  useEffect(() => {
    setOrder(todoContext.orderBy);
  }, [todoContext.orderBy]);

  const toggleSorter = () => {
    try {
      let orderBy = 'DATE_ASC';
      if (todoContext.orderBy && todoContext.orderBy === 'DATE_ASC') {
        orderBy = 'DATE_DESC';
      }
      dispatch({ type: 'SET_ORDER_BY', orderBy });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button onClick={toggleSorter}>
       {order  && ` Sorting by ${orderLabel[order]}` || 'Sort it!'}
      </Button>
    </div>
  );
};

export default TodoFilterSorter;

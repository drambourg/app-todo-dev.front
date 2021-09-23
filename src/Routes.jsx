import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPageView from './views/NotFoundPage/NotFoundPageView';
import TodoListView from './views/TodoList/TodoListView';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <div>Todo Home</div>
      </Route>
      <Route exact path='/todos'>
        <TodoListView />
      </Route>
      <Route path={`/todos/:id`}>
        <div>Todo details</div>
      </Route>
      <Route path='*'>
        <NotFoundPageView />
      </Route>
    </Switch>
  );
};

export default Routes;

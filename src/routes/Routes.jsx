import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoContextProvider from '../contexts/TodoContext';
import HomeView from '../views/Home/HomeView';
import NotFoundPageView from '../views/NotFoundPage/NotFoundPageView';
import TodoDetailsView from '../views/TodoDetails/TodoDetailsView';
import TodoListView from '../views/TodoList/TodoListView';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomeView title='Welcome to Todo App' />
      </Route>
      <TodoContextProvider>
        <Route exact path='/todos' component={TodoListView} />
        <Route path={`/todos/:id`} component={TodoDetailsView} />
      </TodoContextProvider>
      <Route path='*'>
        <NotFoundPageView />
      </Route>
    </Switch>
  );
};

export default Routes;

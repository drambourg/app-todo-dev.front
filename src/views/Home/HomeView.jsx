import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/_common/Button/Button.style';
import { HomeContainer } from './HomeView.style';

const HomeView = ({ title }) => {
  return (
    <HomeContainer>
      <h1>{title || 'Home Page'}</h1>
      <Link to={`/todos`}>
        <Button>Go to your Todo List !</Button>
      </Link>
    </HomeContainer>
  );
};

export default HomeView;

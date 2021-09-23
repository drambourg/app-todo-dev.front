import React from 'react';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../App.style';
import { Button } from '../../components/_common/Button/Button.style';
import { HomeContainer } from './HomeView.style';

const HomeView = ({ title }) => {
  return (
    <HomeContainer>
      <MainTitle>{title || 'Home Page'}</MainTitle>
      <Link to={`/todos`}>
        <Button>Go to your Todo List !</Button>
      </Link>
    </HomeContainer>
  );
};

export default HomeView;

import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from './Button.style';

const ButtonBackHome = () => {
  return (
        <Link to='/'>
          <OutlineButton>Retour à l'accueil</OutlineButton>
        </Link>
  );
};

export default ButtonBackHome;
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { LoaderSpinnerContainer } from './LoaderSpinner.style';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const LoaderSpinner = ({ loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  let [color] = useState('darkgrey');

  return (
    <LoaderSpinnerContainer>
      <ClipLoader color={color} loading={loading} css={override} size={50} />
    </LoaderSpinnerContainer>
  );
};

export default LoaderSpinner;

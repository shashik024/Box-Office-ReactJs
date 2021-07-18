import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

/*eslint-disable */
const Title = () => {
  return (
    <TitleWrapper>
      <h1>Box-Office</h1>
      <p>Are you looking for a Movie or an Actor ?</p>
    </TitleWrapper>
  );
};

// memo function compare the previous props with current props if they are same , they will not be rerendered

export default memo(Title);

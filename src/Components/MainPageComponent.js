import React from 'react';
import Header from './Header';
import Title from './Title';

const MainPageComponent = ({ children }) => (
  <div>
    <Title />
    <Header />
    {children}
  </div>
);

export default MainPageComponent;

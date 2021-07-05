import React from 'react';
import Header from './Header';

const MainPageComponent = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default MainPageComponent;

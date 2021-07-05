import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const link = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Starred' },
  ];
  return (
    <ul>
      {link.map(item => (
        <li key={item.to}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;

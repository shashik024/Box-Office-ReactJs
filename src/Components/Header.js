import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Header.styled';

const Header = () => {
  const link = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Starred' },
  ];

  const location = useLocation();

  return (
    <NavList>
      {link.map(item => (
        <li key={item.to}>
          <LinkStyled
            to={item.to}
            className={location.pathname === item.to && 'active'}
          >
            {item.text}
          </LinkStyled>
        </li>
      ))}
    </NavList>
  );
};

export default memo(Header);

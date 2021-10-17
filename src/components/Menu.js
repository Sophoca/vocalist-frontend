import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'red',
    fontSize: '2rem'
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/curation" activeStyle={activeStyle}>
            Curation
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/test" activeStyle={activeStyle}>
            Test
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;

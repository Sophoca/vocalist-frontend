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
          <NavLink exact to="/chart" activeStyle={activeStyle}>
            Chart
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/library" activeStyle={activeStyle}>
            Library
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/search" activeStyle={activeStyle}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/setting" activeStyle={activeStyle}>
            Setting
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

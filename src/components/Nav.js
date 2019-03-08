import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to='/' className="nav__item" exact activeClassName="nav__item--active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' className="nav__item" activeClassName="nav__item--active">
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

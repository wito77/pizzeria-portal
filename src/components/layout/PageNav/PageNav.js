import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <div>
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Kitchen`} activeClassName='active'>Kitchen</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Tables`} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Ordering`} activeClassName='active'>Ordering</NavLink>
    </nav>
  </div>
);

export default PageNav;

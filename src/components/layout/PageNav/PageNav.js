import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => (
  <div className={styles.navigation}>
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', margin: 5 }}>
        <Button variant="outlined">
          Dashboard
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', margin: 5 }}>
        <Button variant="outlined">
          Kitchen
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', margin: 5 }}>
        <Button variant="outlined">
          Tables
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', margin: 5 }}>
        <Button variant="outlined">
          Ordering
        </Button>
      </NavLink>
    </nav>
    <nav>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right', marginLeft: 55 }}>
        <Button variant="outlined">
          Login
        </Button>
      </NavLink>
    </nav>
  </div>
);

export default PageNav;

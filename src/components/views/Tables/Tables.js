import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/Tables/booking/:id`}>Book Table</Link>
      <Link to={`${process.env.PUBLIC_URL}/Tables/event/:id`}>Event</Link>
    </div>
  </div>
);

export default Tables;

import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Order id</Link>
    </div>
  </div>
);

export default Ordering;

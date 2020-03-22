import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Login.scss';
import LoginInputs from './LoginInputs';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Login = () => (
  <div className={styles.loginComponent}>
    <h2>Login view</h2>
    <LoginInputs />
    <div>
      <Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" style={{ margin: 10 }}>Submit</Button>
      </Link>
    </div>
  </div>
);

export default Login;

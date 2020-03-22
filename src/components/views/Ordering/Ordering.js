import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Orders</h2>
    {/* <div>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Order id</Link>
    </div> */}
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Table 1
        </Typography>
        <Typography variant="h5" component="h2">
          Active order
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Delivered
        </Typography>
        <Typography variant="body2" component="p">
          Pizza funghi x2, japan tea, soda
        </Typography>
        <Typography className={styles.pos} component={'span'}>
          <p style={{ fontWeight: 'bold', margin: 0 }}> Total: 34$</p>
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Order start: 14:54
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`${process.env.PUBLIC_URL}/ordering/new`} style={{ textDecoration: 'none' }}>
          <Button size="large" color="secondary">NEW ORDER</Button>
        </Link>
      </CardActions>
    </Card>
    <div className={styles.root}>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} style={{ textDecoration: 'none' }}>
        <Button color="primary" style={{ margin: 20 }}>Table 1 - all orders</Button>
      </Link>
    </div>
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Table 2
        </Typography>
        <Typography variant="h5" component="h2">
          Free
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          -
        </Typography>
        <Typography variant="body2" component="p">
          -
        </Typography>
        <Typography className={styles.pos} component={'span'}>
          <p style={{ fontWeight: 'bold', margin: 0 }}> Total: 0$</p>
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Order start: -
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`${process.env.PUBLIC_URL}/ordering/new`} style={{ textDecoration: 'none' }}>
          <Button size="large" color="secondary">NEW ORDER</Button>
        </Link>
      </CardActions>
    </Card>
    <div className={styles.root}>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} style={{ textDecoration: 'none' }}>
        <Button color="primary" style={{ margin: 20 }}>Table 2 - all orders</Button>
      </Link>
    </div>
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Table 3
        </Typography>
        <Typography variant="h5" component="h2">
          Active order
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Ordered
        </Typography>
        <Typography variant="body2" component="p">
          Pizza margherita - giga, orange juice x2
        </Typography>
        <Typography className={styles.pos} component={'span'}>
          <p style={{ fontWeight: 'bold', margin: 0 }}> Total: 43$</p>
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Order start: 16:11
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`${process.env.PUBLIC_URL}/ordering/new`} style={{ textDecoration: 'none' }}>
          <Button size="large" color="secondary">NEW ORDER</Button>
        </Link>
      </CardActions>
    </Card>
    <div className={styles.root}>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} style={{ textDecoration: 'none' }}>
        <Button color="primary" style={{ margin: 20 }}>Table 3 - all orders</Button>
      </Link>
    </div>
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Table 4
        </Typography>
        <Typography variant="h5" component="h2">
          Active order
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Delivered
        </Typography>
        <Typography variant="body2" component="p">
          Lasagne, Pizza Speciale, beer x3
        </Typography>
        <Typography className={styles.pos} component={'span'}>
          <p style={{ fontWeight: 'bold', margin: 0 }}> Total: 67$</p>
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Order start: 15:24
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`${process.env.PUBLIC_URL}/ordering/new`} style={{ textDecoration: 'none' }}>
          <Button size="large" color="secondary">NEW ORDER</Button>
        </Link>
      </CardActions>
    </Card>
    <div className={styles.root}>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} style={{ textDecoration: 'none' }}>
        <Button color="primary" style={{ margin: 20 }}>Table 4 - all orders</Button>
      </Link>
    </div>
  </div>
);

export default Ordering;

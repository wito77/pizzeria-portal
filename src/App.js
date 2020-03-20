import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/Ordering/NewOrder';
import NewOrderStatusID from './components/views/Ordering/NewOrderStatusID';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/Tables/TablesBooking';
import TablesEvent from './components/views/Tables/TablesEvent';


function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={NewOrderStatusID} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEvent} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

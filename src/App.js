import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/Ordering/NewOrderContainer';
import NewOrderStatusID from './components/views/Ordering/NewOrderStatusID';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/Tables/TablesBooking';
import TablesEvent from './components/views/Tables/TablesEvent';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="md">
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
                <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={NewOrderStatusID} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              </Switch>
            </MainLayout>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

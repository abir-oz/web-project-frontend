import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';


import Dashboard from './Components/Admin/Dashboard';
import NotFound from './Components/NotFound/NotFound';
export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});



  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >

      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <Dashboard />
          </PrivateRoute>
          <Route path="/addPackages">
            <Dashboard />
          </Route>
          <PrivateRoute path="/book">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Dashboard />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51IRh6TI4sWRDCNxeH1EfouKxikhlFcKHrtYJKRA7dSJnpppSXxiFixyFwHTJGoSw6jvgVXVZpq7d6wFyW6ZvAkTi0012cWnYxU");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
    
  );
}

export default App;

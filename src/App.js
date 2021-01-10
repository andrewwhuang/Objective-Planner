// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Budget from './components/budget/Budget';
import SignInPage from './pages/SignIn/index';
import SignUpPage from './pages/SignUp/index';
import Navigation from './components/Navigation';
import withAuth from './components/Session/withAuth';
import * as ROUTES from './constants/routes';
import './App.css';

const App = () => (
      <Router>
        <div>
          <Navigation />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={Budget} />
        </div>
      </Router>
);

export default withAuth(App);

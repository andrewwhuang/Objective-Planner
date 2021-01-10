import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../pages/SignOut/index';
import BackButton from './BackButton';
import AuthUserContext from './Session/context';

import * as ROUTES from '../constants/routes';

const Navigation = () => (
    <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
    <div className ="navbar-light bg-dark" style = {{paddingBottom: '1px'}}>
        <BackButton />
        <h2 className="text-white" style = {{textAlign: 'center'}}>Budget Tracker</h2>
        <SignOutButton />
    </div>
);

const NavigationNonAuth = () => (
    <div className ="navbar-light bg-dark" style = {{paddingBottom: '1px'}}>
        <h2 className="text-white" style = {{textAlign: 'center'}}>Budget Tracker</h2>
        <Link to={ROUTES.SIGN_IN}><button className="btn btn-dark" style = {{float: 'right', width: '100px', margin:'5px'}}>Sign In</button></Link>
        <Link to={ROUTES.SIGN_UP}><button className="btn btn-dark" style = {{float: 'right', width: '100px', margin:'5px'}}>Sign Up</button></Link>
    </div>
);

export default Navigation;
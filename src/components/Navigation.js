import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../pages/SignOut/index';
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
    <ul>
        <SignOutButton />
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        <br />
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </ul>
);
 
export default Navigation;
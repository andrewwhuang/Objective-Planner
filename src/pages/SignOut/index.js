import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../../components/Firebase/context'

const SignOutButton = ({ firebase }) => (
  <Link to = {ROUTES.SIGN_IN}><button type="button" onClick={firebase.signUserOut} className="btn btn-dark" style = {{float: 'right', width: '100px', margin: '5px'}}>
    Sign Out
  </button>
  </Link>
);
 
export default withFirebase(SignOutButton);
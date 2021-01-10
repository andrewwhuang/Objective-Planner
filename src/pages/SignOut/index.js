import React from 'react';
import { withFirebase } from '../../components/Firebase/context'

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.signUserOut}>
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);
import React from 'react';
import { withFirebase } from '../../components/Firebase/context'

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.signUserOut} className="btn btn-dark" style = {{float: 'right', width: '100px', margin: '5px'}}>
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);
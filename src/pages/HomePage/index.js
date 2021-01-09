import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Firebase } from '../../componenets/Firebase/firebase';
import { SignUpLink } from '../SignUp/index';

import * as ROUTES from '../../constants/routes';

const HomePage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const { email, password } = this.state;
    
 
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {email, password, error} = this.state;
    const isInvalid = email === '' || password === ''; 
    return (
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
   
          {error && <p>{error.message}</p>}
        </form>
      );
  }
}

export default HomePage;
   
export { SignInForm };
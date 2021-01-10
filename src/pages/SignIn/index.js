import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase/context';
import { SignUpLink } from '../SignUp/index';

import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase.signUserIn(email, password)
    .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
        this.setState({ error });
    });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <br />
          <input
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <button disabled={(this.state.email === '' || this.state.password === '')} type="submit">
            Sign In
          </button>
          
          {this.state.error && <p>{this.state.error.message}</p>}
        </form>
      );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
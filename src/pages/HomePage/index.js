import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../components/Firebase/context';
import { SignUpLink } from '../SignUp/index';

import * as ROUTES from '../../constants/routes';

const HomePage = () => (
  <div>
    <h1>SignIn</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignInForm firebase={firebase} />}
    </FirebaseContext.Consumer>
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
          <input
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={(email === '' || password === '')} type="submit">
            Sign In
          </button>
   
          {this.state.error && <p>{this.state.error.message}</p>}
        </form>
      );
  }
}

export default HomePage;
   
export { SignInForm };
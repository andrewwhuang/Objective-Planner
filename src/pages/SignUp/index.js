import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../components/Firebase/context';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const { email, passwordOne, error } = this.state;
 
    this.props.firebase
      .createUser(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  }

  onChange = event => {
    this.setState(this.setState({ [event.target.name]: event.target.value }));
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
          name="passwordOne"
          value={this.state.passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={this.state.passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={passwordOne !== passwordTwo || email === '' || passwordOne === '' || passwordTwo === ''} type="submit">
          Sign Up</button>
 
        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
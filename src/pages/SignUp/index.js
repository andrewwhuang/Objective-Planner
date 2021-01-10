import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase/context';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const { email, passwordOne } = this.state;
    this.props.firebase.createUser(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  }

  onChange = (event) => {
    this.setState(this.setState({ [event.target.name]: event.target.value }));
  };

  render() {
    return (
      <div>
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
          name="passwordOne"
          value={this.state.passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          name="passwordTwo"
          value={this.state.passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <br />
        <button disabled={this.state.passwordOne !== this.state.passwordTwo || this.state.email === '' || this.state.passwordOne === '' || this.state.passwordTwo === ''} type="submit">
          Sign Up</button>
 
        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
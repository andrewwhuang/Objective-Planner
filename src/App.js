// import logo from './logo.svg';
import React , { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from './components/Firebase/context';
import Budget from './components/budget/Budget';
import SignInPage from './pages/SignIn/index';
import SignUpPage from './pages/SignUp/index';
import Navigation from './components/Navigation';
import * as ROUTES from './constants/routes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation authUser = {this.state.authUser} />
          <hr />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={Budget} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../components/Firebase/context';
import * as ROUTES from '../../constants/routes';

class Home extends Component {
    constructor(props) {
      super(props);

      this.state = {
          uid: 0,
          email: abc,
          number: 0,
      }
    }

    onChange = num => {
        this.setState({number: num});
    }

    onSendToDb = event => {

        this.props.firebase.numbers().push({
            number: this.state.number,
        })

        this.props.firebase.user(this.state.uid).set({
            number: this.state.number,
        })

        this.setState({number: 0});
    }

    render() {
      return (
        <FirebaseContext.Consumer>
        <form onSubmit={this.onSendToDb}>

        </form>
        </FirebaseContext.Consumer>
      );
    }
  }

  export default Home;
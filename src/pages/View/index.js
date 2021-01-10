import React, { Component } from 'react';
import BackButton from '../../components/BackButton';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../components/Firebase/context';
import * as ROUTES from '../../constants/routes';

class ViewPage extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <h1>view page here</h1>
      );
    }
  }

  export default Home;
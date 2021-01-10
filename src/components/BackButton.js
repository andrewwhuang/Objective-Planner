import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

const BackButton = () => (
  <Link to = {ROUTES.LANDING}>
    <button type="button" className="btn btn-dark" style = {{float: 'left', width: '100px', margin: '5px'}}>
        Back
    </button>
  </Link>
);

export default BackButton;
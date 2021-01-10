import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

class LandingPage extends Component {
    render() {
        return(
            <div>
                <Link to={ROUTES.VIEW}>
                    <button className = "btn btn-dark" style = {{margin: '10px', position: 'absolute', top: '35%', left: '20%', width: '300px'}}>
                        <h2>View Your Goals</h2>
                    </button>
                </Link>
                <h4 style = {{margin: '10px', position: 'absolute', top: '45%', left: '20%', width: '300px', textAlign:'center'}}>
                    Click here to view all items added to your budget planner
                </h4>
                <Link to={ROUTES.ADD}>
                    <button className = "btn btn-dark" style = {{margin: '10px', position: 'absolute', top: '35%', right: '20%', width: '300px'}}>
                        <h2>Add a Goal</h2>
                    </button>
                </Link>
                <h4 style = {{margin: '10px', position: 'absolute', top: '45%', right: '20%', width: '300px', textAlign:'center'}}>
                    Click here to add an item into your budget planner
                </h4>
            </div>
        );
    }

}

export default LandingPage;
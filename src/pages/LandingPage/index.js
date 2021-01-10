import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

class LandingPage extends Component {
    render() {
        return(
            <div>
                <Link to={ROUTES.VIEW}>
                    <button>
                        View Page
                    </button>
                </Link>
                <Link to={ROUTES.ADD}>
                    <button>
                        Add Page
                    </button>
                </Link>
            </div>
        );
    }

}

export default LandingPage;
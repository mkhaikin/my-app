import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import logging from '../config/logging'

const NotFoundPage: React.FunctionComponent = props => {

    return (
        <div>
            <h2>This is the NotFound page!</h2>
            <p><Link to="/">Go to the home page</Link></p>
        </div>
        )
}

export default NotFoundPage;
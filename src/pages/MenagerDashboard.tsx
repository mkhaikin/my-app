import React from 'react';
import { Outlet, NavLink as Link } from 'react-router-dom';
import logging from '../config/logging'

const MenagerDashboardPage: React.FunctionComponent = props => {

    return (
        <div>
            <p>This is the Menager Dashboard page!</p>
            <Link to="projects">List of Projects</Link>
            
            <Outlet />
        </div>
    )
}

export default MenagerDashboardPage;
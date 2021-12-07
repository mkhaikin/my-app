import React, { useEffect } from 'react';
import { Outlet, NavLink as Link } from 'react-router-dom';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const AdminDashboardPage: React.FunctionComponent = props => {
    /*
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [])
    */

    return (
        <div>
            <p>This is the Admin Dashboard page!</p>
            <Link to="settings">Admin Settings</Link>
            <Link to="passwords">Passwords</Link>
            <Outlet />
        </div>
    )
}

export default AdminDashboardPage;
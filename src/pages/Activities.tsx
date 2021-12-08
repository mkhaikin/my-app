import React from 'react';
import { Outlet } from 'react-router-dom';
import logging from '../config/logging'

const ActivitiesPage: React.FunctionComponent = props => {

    return (
        <div>
            <p>This is the Activities page!</p>
            <Outlet />
        </div>
    )
}

export default ActivitiesPage;
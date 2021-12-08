import React from 'react';
import { Outlet } from 'react-router-dom';
import logging from '../config/logging'

const ProjectsPage: React.FunctionComponent = props => {

    return (
        <div>
            <p>This is the Projects page!</p>
            <Outlet />
        </div>
    )
}

export default ProjectsPage;
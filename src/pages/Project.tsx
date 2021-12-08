import React from 'react';
import { Outlet } from 'react-router-dom';
import logging from '../config/logging'

const ProjectPage: React.FunctionComponent = props => {

    return (
        <div>
            <p>This is the Project page!</p>
            <Outlet />
        </div>
    )
}

export default ProjectPage;
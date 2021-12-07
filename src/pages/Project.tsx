import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const ProjectPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [])

    return (
        <div>
            <p>This is the Project page!</p>
            <Outlet />
        </div>
    )
}

export default ProjectPage;
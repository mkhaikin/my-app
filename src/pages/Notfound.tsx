import React, { useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const NotFoundPage: React.FunctionComponent = props => {
    useEffect(() => {
        logging.info(`Loading Not Found Page}`)
    }, [])
    return (
        <div>
            <h2>This is the NotFound page!</h2>
            <p><Link to="/">Go to the home page</Link></p>
        </div>
        )
}

export default NotFoundPage;
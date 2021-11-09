import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const UserDashboardPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [])
    return <p>This is the User Dashboard page!</p>
}

export default UserDashboardPage;
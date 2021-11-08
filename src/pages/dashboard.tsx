import React, { useEffect } from 'react';
import IPage from '../interfaces/page';


const DashboardPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [])
    return <p>This is the Dashboard page!</p>
}

export default DashboardPage;
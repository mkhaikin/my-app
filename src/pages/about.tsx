import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const AboutPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [])
    return <p>This is the About page!</p>
}

export default AboutPage;
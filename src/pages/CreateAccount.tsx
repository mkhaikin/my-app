import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const CreateAccountPage: React.FunctionComponent<IPage> = props => {
    const history = useNavigate()
    const handleLogin = () => {
       
        history('/login')
    }

    useEffect(() => {
        logging.info(`Loading ${props.name} with authentication = ${props.setIsAuth}`)
    }, [])

    return (
        <div>
            <p>This is the CreateAccount page!</p>
            <p/>
            <div>
                <button onClick={()=>handleLogin()}>Create</button>
            </div>
        </div>
    )
}

export default CreateAccountPage;
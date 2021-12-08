import React from 'react';
import {useNavigate } from 'react-router-dom';
import logging from '../config/logging'

const CreateAccountPage: React.FunctionComponent = props => {
    const history = useNavigate()
    const handleLogin = () => {
       
        history('/login')
    }

    
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
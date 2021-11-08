import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, RouteProps } from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
import Login from './pages/login';
import Home from './pages/home'



const Application: React.FunctionComponent<{}> = props => {
    const [isAuth, setAuth] = useState(false)

    useEffect(()=>{
        logging.info('Loading application.')
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route  path="/home" element ={ <Home name= 'Home' setIsAuth = {setAuth} />}/>
                    <Route  path="/login" element ={ <Login name= 'Login' setIsAuth = {setAuth} />}/>
                     
                   
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Application;
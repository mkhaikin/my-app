import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
import { ROLE } from './interfaces/role';
import Login from './pages/login';
import Home from './pages/home';
import AboutPage from './pages/about';
import AdminDashboardPage from './pages/AdminDashboard';
import UserDashboardPage from './pages/UserDashboard';
import CreateAccountPage from './pages/CreateAccount';
import NotFoundPage from './pages/Notfound';
import PrivateRoute from './pages/PrivateRoute';

const Application: React.FunctionComponent<{}> = props => {
    const [isAuth, setAuth] = useState(false)

    useEffect(()=>{
        logging.info('Loading application.')
    }, [])

    return (
        <div>
           
                <Routes>
                    <Route  path="/" element ={ <Home name= 'Home' setIsAuth = {setAuth} />}/>
                    <Route path="/create-account" element={<CreateAccountPage name= 'CreateAccount' setIsAuth = {setAuth}/>} />
                    <Route path="/about" element={<AboutPage name= 'About' setIsAuth = {setAuth}/>} />
                    <Route  path="login" element ={ <Login name= 'Login' setIsAuth = {setAuth} />}/>
                    <PrivateRoute path="admin-dashboard" element={<AdminDashboardPage name= 'Admin Dashboar' setIsAuth = {setAuth}/>} 
                        requiredRoles={[ROLE.Admin]} /> 
                    <PrivateRoute path="user-dashboard" element={<UserDashboardPage name= 'User Dashboar' setIsAuth = {setAuth}/>}
                        requiredRoles={[ROLE.User]}  />
                    <Route path="*" element={<NotFoundPage name= 'User Dashboar' setIsAuth = {setAuth}/>} />
                </Routes>
          
        </div>
    );
}

export default Application;
import React, { useEffect, useState } from 'react';
import { NavLink as Link, Routes, Route, Outlet  } from 'react-router-dom';
import logging from './config/logging';
import Login from './pages/login';
import Home from './pages/home';
import AboutPage from './pages/about';
import AdminDashboardPage from './pages/AdminDashboard';
import UserDashboardPage from './pages/UserDashboard';
import CreateAccountPage from './pages/CreateAccount';
import NotFoundPage from './pages/Notfound';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';
import ActivitiesPage from './pages/Activities';
import AdminSettingsPage from './pages/AdminSettings'
import AdminPasswordsPage from './pages/AdminPasswords'

import {PrivateRoute} from './pages/PrivateRoute';
import { ROLE } from './interfaces/role';

const Application: React.FunctionComponent<{}> = props => {
    const [isAuth, setAuth] = useState(false)

    useEffect(()=>{
        logging.info('Loading application.')
    }, [])

    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li> 
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>              
                    <li>
                        <Link to="/create-account">Create Account</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <div className="main">
                <Routes>
                    <Route path="/" element ={ <Home name= 'Home' setIsAuth = {setAuth} />}/>
                    <Route path="/create-account" element={<CreateAccountPage name= 'CreateAccount' setIsAuth = {setAuth}/>} />
                    <Route path="/about" element={<AboutPage name= 'About' setIsAuth = {setAuth}/>} />
                    <Route path="login" element ={ <Login name= 'Login' setIsAuth = {setAuth} />}/>
                    <Route path="admin-dashboard/*" 
                        element={
                            <PrivateRoute roles={[ROLE.Admin]}>
                                <AdminDashboardPage />
                            </PrivateRoute>

                        } 
                    >
                        <Route path="settings" 
                            element={
                                <PrivateRoute roles={[ROLE.Admin]}>
                                    <AdminSettingsPage /> 
                                </PrivateRoute>
                            }
                        />
                        <Route path="passwords" 
                            element={
                                <PrivateRoute roles={[ROLE.Admin]}>
                                    <AdminPasswordsPage /> 
                                </PrivateRoute>
                            }
                        />

                        <Route path="projects" element={<ProjectsPage name= 'Projects' setIsAuth = {setAuth}/>} >
                            <Route path=":project_id" element={<ProjectPage name= 'Project' setIsAuth = {setAuth}/>} >
                                <Route path="activities" element={<ActivitiesPage name= 'Activities' setIsAuth = {setAuth}/>} /> 
                            </Route>
                        </Route>
                                                  
                    </Route> 

                    <Route path="user-dashboard" 
                        element={
                            <PrivateRoute roles={[ROLE.User]}>
                                <UserDashboardPage name= 'User Dashboar' setIsAuth = {setAuth}/>
                            </PrivateRoute>
                        }                        
                    />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Application;
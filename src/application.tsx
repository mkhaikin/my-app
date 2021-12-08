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
import MenagerDashboardPage from './pages/MenagerDashboard'

import {PrivateRoute} from './pages/PrivateRoute';
import { ROLE } from './interfaces/role';

const Application: React.FunctionComponent<{}> = props => {
    
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
                    <Route path="/" element ={ <Home />} />
                    <Route path="/create-account" element={<CreateAccountPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="login" element ={ <Login />}/>
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
                    </Route> 

                    <Route path="menager-dashboard/*" 
                        element={
                            <PrivateRoute roles={[ROLE.Menager]}>
                                <MenagerDashboardPage />
                            </PrivateRoute>
                        } 
                    >
                        <Route path="projects" 
                            element={
                                <PrivateRoute roles={[ROLE.Menager]}>
                                    <ProjectsPage /> 
                                </PrivateRoute>
                            }
                        />
                    </Route>


                    <Route path="user-dashboard" 
                        element={
                            <PrivateRoute roles={[ROLE.User]}>
                                <UserDashboardPage />
                            </PrivateRoute>
                        }                        
                    >
                        <Route path=":project_id" 
                            element={
                                <PrivateRoute roles={[ROLE.Menager, ROLE.User]}>
                                    <ProjectPage /> 
                                </PrivateRoute>
                            }
                        >
                            <Route path="activities" element={<ActivitiesPage />} /> 
                        </Route>    
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Application;
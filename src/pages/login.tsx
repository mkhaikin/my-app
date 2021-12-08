import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../store/action_creators/accesscall'
import IPage from '../interfaces/page';
import logging from '../config/logging'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

const LoginPage: React.FunctionComponent = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const history = useNavigate()

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        }

        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
        //////////////////////
            

        dispatch(login('me@abcd.com', '12345'))
        //history('/admin-dashboard')
        ///////////////////////
    }

    return (
        <div>
            <p>This is the Login page!</p>
            <p/>
                <div className="Login">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button size="lg" type="submit" disabled={!validateForm()}>
                        Login
                        </Button>
                    </Form>
                </div>

        </div>
    )
}

export default LoginPage;
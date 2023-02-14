
// login page

import React, { useState } from 'react';

import classes from './Card.module.css';
import Card from '../userinterface/Card';

import React, { useState } from 'react';
import axios from 'axios';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);

        axios
            .post('https://example.com/api/login', {
                username,
                password,
            })
            .then(response => {
                setIsLoading(false);
                // Handle successful login
            })
            .catch(error => {
                setIsLoading(false);
                setErrorMessage('Incorrect username or password. Please try again.');
            });
    };

    return (

        <Card>

            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <button type="submit">Log In</button>
                )}
            </form>
        </Card>
    );
}

export default LoginForm;
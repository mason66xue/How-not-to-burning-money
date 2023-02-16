
// login page

// import React, { useState } from 'react';

import classes from './LoginForm.module.css';
import Card from '../userinterface/Card';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import authService from '../../utils/auth';


function LoginForm() {
 
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const [login, { error, data }] = useMutation(LOGIN_USER, {
        onError: (error) => {
            console.log('Error:', error.message);
        }
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        console.log("id and value changes")
      console.log(id, value);
        setFormState({
            ...formState,
            [id]: value,
        });
        console.log("formState changes update")
        console.log(formState);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setErrorMessage('');

        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log("data from login mutation")
            console.log(data.login.token);
            // use authService to grab token
            authService.login(data.login.token);
        } catch (e) {
            console.error(e);
            setErrorMessage('Something went wrong. Please try again.');
        }

        // setIsLoading(false);
    };

    

    return (




        <Card>

            <form className={classes.form} onSubmit={handleFormSubmit}>
                <div className={classes.control}>
                    <label htmlFor="username">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={formState.username}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </div>
                {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                )} */}
                <button type="submit">Log In</button>
            </form>
        </Card>

    );
}

export default LoginForm;


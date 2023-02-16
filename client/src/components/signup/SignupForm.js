
// signup form


import classes from './SignupForm.module.css';
import Card from '../userinterface/Card';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';



const SignupForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [addUser, { error, data }] = useMutation(ADD_USER);


    // update state based on form input changes
    const handleChange = (event) => {
        const { id, value } = event.target;

        setFormState({
            ...formState,
            [id]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    // function SignupForm() {
    //     const [username, setUsername] = useState('');
    //     const [email, setEmail] = useState('');
    //     const [password, setPassword] = useState('');
    //     const [errorMessage, setErrorMessage] = useState('');
    //     const [isLoading, setIsLoading] = useState(false);

    //     const handleSubmit = event => {
    //         event.preventDefault();
    //         setIsLoading(true);

    //         axios
    //             .post('https://example.com/api/login', {
    //                 username,
    //                 email,
    //                 password,
    //             })
    //             .then(response => {
    //                 setIsLoading(false);
    //                 // Handle successful login
    //             })
    //             .catch(error => {
    //                 setIsLoading(false);
    //                 setErrorMessage('Incorrect username or password. Please try again.');
    //             });
    //     };

    return (

        <Card>

            <form className={classes.form} onSubmit={handleFormSubmit}>
                <div className={classes.control}>
                    <label htmlFor="username">Name:</label>
                    <input
                        type="text"
                        id="username"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={formState.email}
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

export default SignupForm;
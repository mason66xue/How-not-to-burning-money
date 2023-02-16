
// signup form

// signup form

import classes from './SignupForm.module.css';
import Card from '../userinterface/Card';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import authService from '../../utils/auth';

const SignupForm = () => {

    // use useState hook to create form state
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    // use useState hook to create error message state
    const [errorMessage, setErrorMessage] = useState('');

    const [addUser, { error, data }] = useMutation(ADD_USER, {
        onError: (error) => {
          console.log('Error:', error.message);
        }
      });
      

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

        setErrorMessage('');

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            console.log("data from addUser mutation")
            console.log(data);

            // use authService to log in user
            authService.login(data.addUser.token);
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
                {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {isLoading ? (
                    <p>Signing up...</p>
                ) : (
                    
                )} */}
                
                <button type="submit">Sign Up</button>
            </form>
        </Card>
    );
};

export default SignupForm;


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
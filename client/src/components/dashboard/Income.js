import React, { useState } from 'react';
import Card from '../userinterface/Card';
import { useMutation,useQuery } from '@apollo/client';
import { SET_INCOME } from '../../utils/mutations';
import authService from '../../utils/auth';
import { QUERY_USER } from '../../utils/queries';

function Income() {

    // const { data:queryData } = useQuery(QUERY_USER,{
    //     variables: { email: authService.getProfile().data.email }
    // });
    // const userIncome = queryData.getUser.income;

    const [inputState, setInputState] = useState(0); // user.income is undefined

    const [setIncome, { error, data }] = useMutation(SET_INCOME, {
        onError: (error) => {
            console.log('Error:', error.message);
        }
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        console.log("id and value changes")
      console.log(id, value);
        setInputState({
            ...inputState,
            [id]: value,
        });
        console.log("inputState changes update")
        console.log(inputState);
        console.log("=================================")
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
            const { data } = await setIncome({
                variables: { inputState },
            });
            console.log("data from login mutation")
            // use authService to grab token
            console.log(data);
            authService.login(data.setIncome.user.token);
        } catch (e) {
            console.error(e);
        }

    };

  
    return (
        <Card>
            <div>
                <h1>Income</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="number"
                        id="income"
                        value={inputState.income}
                        onChange={handleChange}
                    />
                    {inputState && ( 
                        <div
                            style={{
                                color: 'green',
                                fontSize: '24px',
                                marginLeft: '10px',
                            }}
                        >
                            {inputState.income}
                        </div>
                    )}
                </div>
                <button onClick={handleFormSubmit}>Set Income</button>
            </div>
        </Card>
    );

}

export default Income;






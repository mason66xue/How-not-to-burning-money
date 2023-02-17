import React, { useState } from 'react';
import Card from '../userinterface/Card';
import { useMutation } from '@apollo/client';
import { SET_INCOME } from '../../utils/mutations';
import authService from '../../utils/auth';

function Income() {
 
    const [formState, setFormState] = useState({
        amount: 0,
    });

    const [errorMessage, setErrorMessage] = useState('');

    const [setIncome, { error, data }] = useMutation(SET_INCOME, {
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
            console.log("formState from handleFormSubmit")
            console.log(formState)
            const { data } = await setIncome({
                variables: {amount:5400}
            });
            console.log("data from login mutation")
            // use authService to grab token
            // authService.login(data.setIncome.token);
        } catch (e) {
            console.error(e);
            setErrorMessage('Something went wrong. Please try again.');
        }

        // setIsLoading(false);
    };

  
    return (
        <Card>
            <div>
                <h1>Income</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <form>
                    <input
                        type="number"
                        id="amount"
                        value={formState.amount}
                        onChange={handleChange}
                    />
                    {formState && ( 
                        <div
                            style={{
                                color: 'green',
                                fontSize: '24px',
                                marginLeft: '10px',
                            }}
                        >
                            {formState.amount}
                        </div>
                    )}
                    </form>
                </div>
                <button onClick={handleFormSubmit}>Set Income</button> 
                
            </div>
           
        </Card>
    );

}

export default Income;

// import React, { useState } from 'react';
// import Card from '../userinterface/Card';
// import { useMutation, useQuery } from '@apollo/client';
// import { SET_INCOME } from '../../utils/mutations';
// import authService from '../../utils/auth';
// import { QUERY_USER } from '../../utils/queries';

// function Income() {
//     const { data: queryData } = useQuery(QUERY_USER, {
//         variables: { email: authService.getProfile().data.email },
//     });
//     const userIncome = queryData?.getUser?.income;

//     const [inputState, setInputState] = useState({ income: userIncome || 0 });

//     const [setIncome, { error, data }] = useMutation(SET_INCOME, {
//         onError: (error) => {
//             console.log('Error:', error.message);
//         },
//     });

//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setInputState({
//             ...inputState,
//             [id]: value,
//         });
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const { data } = await setIncome({
//                 variables: { income: inputState.income },
//                 refetchQueries: [
//                     { query: QUERY_USER, variables: { email: authService.getProfile().data.email } },
//                 ],
//             });
//             authService.login(data.setIncome.user.token);
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     return (
//         <Card>
//             <div>
//                 <h1>Income</h1>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <input type="number" id="income" value={inputState.income} onChange={handleChange} />
//                     {inputState.income && (
//                         <div
//                             style={{
//                                 color: 'green',
//                                 fontSize: '24px',
//                                 marginLeft: '10px',
//                             }}
//                         >
//                             {inputState.income}
//                         </div>
//                     )}
//                 </div>
//                 <button onClick={handleFormSubmit}>Set Income</button>
//             </div>
//         </Card>
//     );
// }

// export default Income;






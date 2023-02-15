import React, { useState } from 'react';
import Card from '../userinterface/Card'

function Savings(props) {
    const [savings, setSavings] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <Card>
            <div>
                <h1>Savings</h1>
                <input type="text" value={savings} onChange={e => setSavings(e.target.value)} />
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                <button>Add Savings</button>
            </div>
            <div>
                <h2>Savings</h2>
                <ul>
                    {props.savings.map(savings => (
                        <li key={savings.id}>
                            {savings.savings} - {savings.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}

export default Savings;
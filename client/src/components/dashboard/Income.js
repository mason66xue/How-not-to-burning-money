
import React, { useState } from 'react';
import Card from '../userinterface/Card'


function Income() {
    const [income, setIncome] = useState(0);

    return (

        <Card>
            <div>
                <h1>Income</h1>
                <input type="number" value={income} onChange={e => setIncome(e.target.value)} />
            </div>
        </Card>
    )
}

export default Income;


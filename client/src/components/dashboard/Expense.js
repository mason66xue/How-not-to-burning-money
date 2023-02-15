
import React, { useState } from "react";
import Card from "../userinterface/Card";

function Expense(props) {
    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <Card>
            <div>
                <h1>Add Expense</h1>
                <input type="text" value={expense} onChange={e => setExpense(e.target.value)} />
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                <button>Add Expense</button>
            </div>
            <div>
                <h2>Expenses</h2>
                <ul>
                    {props.expenses.map(expense => (
                        <li key={expense.id}>
                            {expense.expense} - {expense.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}

export default Expense;
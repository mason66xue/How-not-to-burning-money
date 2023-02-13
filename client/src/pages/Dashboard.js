// Dashboard Page

import React from 'react';
import Income from '../components/dashboard/Income';
import Expense from '../components/dashboard/Expense';
// import ExpenseList from '../components/dashboard/ExpenseList';



const mockData = {
    income: 4000,
    expenses: [
        { expense: "Netflix Monthly Subscription", amount: 10.99 },
        {
            expense: "Spotify Monthly Subscription", amount: 9.99
        },
        {
            expense: "Rent", amount: 1800
        }
    ]
}
function Dashboard() {
    return (
        <div>
            <h1> My Dashboard</h1>
            <Income />
            <Expense expenses={mockData.expenses} />
            {/* <ExpenseList expenses={mockData.expenses} /> */}
        </div>
    )

}

export default Dashboard;


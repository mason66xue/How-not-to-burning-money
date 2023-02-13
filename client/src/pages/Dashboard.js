// Dashboard Page
const mockData = {
    income: 4000,
    expenses: [
        { name: "Netflix Monthly Subscription", amount: 10.99 },
        {
            name: "Spotify Monthly Subscription", amount: 9.99
        },
        {
            name: "Rent", amount: 1800
        }
    ]
}
function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Income: ${mockData.income}</h2>
            <h2>Expenses</h2>
            <ul>
                {mockData.expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.name}: ${expense.amount}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Dashboard;


// import React, { useState } from 'react';
// import Card from '../userinterface/Card';

// function BudgetingForm() {
//     const [income, setIncome] = useState(0);
//     const [expense, setExpense] = useState('');
//     const [expenseAmount, setExpenseAmount] = useState(0);
//     const [expenses, setExpenses] = useState([]);
//     const [saving, setSaving] = useState('');
//     const [savingAmount, setSavingAmount] = useState(0);
//     const [savings, setSavings] = useState([]);

//     const addExpense = () => {
//         setExpenses([...expenses, { expense: expense, amount: expenseAmount, id: Math.random() }]);
//         setExpense('');
//         setExpenseAmount(0);
//     }

//     const addSaving = () => {
//         setSavings([...savings, { savings: saving, amount: savingAmount, id: Math.random() }]);
//         setSaving('');
//         setSavingAmount(0);
//     }

//     return (
//         <Card>
//             <div>
//                 <h1>Income</h1>
//                 <input type="number" value={income} onChange={e => setIncome(e.target.value)} />
//                 <button>Set Income</button>
//             </div>

//             <div>
//                 <h1>Expense</h1>
//                 <input type="text" value={expense} onChange={e => setExpense(e.target.value)} />
//                 <input type="number" value={expenseAmount} onChange={e => setExpenseAmount(e.target.value)} />
//                 <button onClick={addExpense}>Add Expense</button>

//                 <div>
//                     <h2>Expenses</h2>
//                     <ul>
//                         {expenses.map(expense => (
//                             <li key={expense.id}>
//                                 {expense.expense} - {expense.amount}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             <div>
//                 <h1>Savings</h1>
//                 <input type="text" value={saving} onChange={e => setSaving(e.target.value)} />
//                 <input type="number" value={savingAmount} onChange={e => setSavingAmount(e.target.value)} />
//                 <button onClick={addSaving}>Add Saving</button>

//                 <div>
//                     <h2>Savings</h2>
//                     <ul>
//                         {savings.map(saving => (
//                             <li key={saving.id}>
//                                 {saving.savings} - {saving.amount}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </Card>
//     );
// }

// export default BudgetingForm;

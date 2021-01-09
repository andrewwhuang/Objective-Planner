import React, { Component, useEffect } from 'react';
import { BudgetConsumer } from '../store';

class ExpenseList extends Component {
    render() {
        return (
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <BudgetConsumer>
                        {value => {
                            const expensesList = value.expenses.length > 0 ? (
                                value.expenses.map((expense, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{expense.title}</td>
                                            <td>{expense.amount}</td>
                                        </tr>

                                    )
                                })
                            ) : (
                                <tr>
                                   <td>No Listed Expense Yet</td>
                                </tr>
                            )
                            return <tbody>{expensesList}</tbody>
                        }}
                    </BudgetConsumer>
                    <tbody>

                    </tbody>
                </table>

            </div>
        )
    }
}

export default ExpenseList
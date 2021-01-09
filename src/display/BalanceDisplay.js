import React from 'react';
import { BudgetConsumer } from '../store';

const BalanceDisplay = () => {
    return(
        <BudgetConsumer> 
            {value => {
                const totalExpense = value.expenses.length > 0 ? (
                    value.expenses.reduce((acc, curr) => {
                        acc += parseInt(curr.amount) 
                        return acc 
                    }, 0)) : 0;
                

                return(
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">Goal</div>
                                <div className="card-body">
                                    <h5 className="text-center card-title">{value.goal}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">Interest</div>
                                <div className="card-body">
                                    <h5 className="text-center card-title">{value.interest}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">Time</div>
                                <div className="card-body">
                                    <h5 className="text-center card-title">{value.time}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )
         }}
       </BudgetConsumer> 
    )
}

export default BalanceDisplay
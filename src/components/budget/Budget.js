import React from 'react';
import InputBudget from './InputBudget';
import InputExpense from './InputExpense';
import DisplayBudget from '../display/DisplayBudget';

const Budget = () => {
    return (
        <div className="row">
            <div className ="col-lg-4">
                <InputBudget />
                <InputExpense />
            
            </div>
            <div className="col-lg-8">
           
                <DisplayBudget />
            </div>

        </div>

    )
}

export default Budget
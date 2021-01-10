import React from 'react';
import InputBudget from './InputBudget';
import InputExpense from './InputExpense';
import DisplayBudget from '../display/DisplayBudget';
import InputGoal from './inputGoal'
import InputInterestRate from './InputInterestRate';
import InputTime from './InputTime';

const Budget = () => {
    return (
        <div className="row">
            <div className ="col-lg-4">
                <InputBudget />
                <InputExpense />
                <InputGoal />
                <InputInterestRate />
                <InputTime />
            
            </div>
            <div className="col-lg-8">
           
                <DisplayBudget />
            </div>

        </div>

    )
}

export default Budget
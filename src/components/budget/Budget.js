import React from 'react';
import InputBudget from './InputBudget';
import InputExpense from './InputExpense';
import DisplayBudget from '../display/DisplayBudget';
import InputGoal from './inputGoal'
import InputInterestRate from './InputInterestRate';
import InputTime from './InputTime';
import SaveButton from '../SaveButton'

const Budget = () => {
    return (
<<<<<<< HEAD
        <div className="row" style = {{paddingTop: '10px', paddingBottom: '10px'}}>
            <div className ="col-lg-4" >
                <InputBudgetFB />
                <div style = {{paddingBottom: '10px'}}></div>
=======
        <div className="row">
            <div className ="col-lg-4">
                <InputBudget />
>>>>>>> e4674ec87cac5f7feb956f3867c7ec7c7fd86f04
                <InputExpense />
                <div style = {{paddingBottom: '10px'}}></div>
                <InputGoal />
                <div style = {{paddingBottom: '10px'}}></div>
                <InputInterestRate />
                <div style = {{paddingBottom: '10px'}}></div>
                <InputTime />
            </div>
            <div className="col-lg-8">
                <DisplayBudget />
                <SaveButton />
            </div>
        </div>
    )
}

export default Budget
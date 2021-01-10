import React from 'react';
import InputBudget from './InputBudget';
import InputExpense from './InputExpense';
import DisplayBudget from '../display/DisplayBudget';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase/context';
import InputGoal from './inputGoal'
import InputInterestRate from './InputInterestRate';
import InputTime from './InputTime';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Budget = () => {
    return (
        <div className="row">
            <div className ="col-lg-4">
                <InputBudgetFB />
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

const InputBudgetFB = compose(
    withFirebase
  )(InputBudget);


export default Budget
import React, { Component } from 'react';
import InputBudget from './InputBudget';
import InputExpense from './InputExpense';
import DisplayBudget from '../display/DisplayBudget';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase/context';
import InputGoal from './inputGoal'
import InputInterestRate from './InputInterestRate';
import InputTime from './InputTime';
import { BudgetConsumer } from '../store';

const INITIAL_STATE = {
    time: '',
    interestRate: '',
    goal: '',
    expenses: '',
}

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    render() {
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
        );
    }
}

const InputBudgetFB = compose(
    withFirebase
  )(InputBudget);


export default Budget
import React, { Component } from 'react';

const BudgetContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_BUDGET": 
        return {
            ...state,
            budget: action.budget
        };
        case "ADD_GOAL": 
        return {
            ...state,
            goal: action.goal
        };
        case "ADD_INTEREST": 
        return {
            ...state,
            interestRate: action.interestRate
        };
        case "ADD_TIME": 
        return {
            ...state,
            time: action.time
        };
        case "ADD_EXPENSES":
            return {
                ...state,
                expenses: action.expenses
            }
        default:
        return state
    }

}

class BudgetProvider extends Component {
    state = {
        budget: '',
        expenses: [],
        goal: '',
        interestRate: '',
        time: '',
        annuity: '',

        dispatch: action => this.setState(state => reducer(state, action))

    }
    render() {
        return(
            <BudgetContext.Provider value={this.state}>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}

const BudgetConsumer = BudgetContext.Consumer;

export { BudgetProvider, BudgetConsumer }
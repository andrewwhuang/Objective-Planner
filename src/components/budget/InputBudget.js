import React, { Component } from 'react';
import { BudgetConsumer } from  '../store';

const INITIAL_STATE = {
    budget: ''
}

class InputBudget extends Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    handleInput = (e) => {
        this.setState({budget: e.target.value})
    }

    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_BUDGET",
            budget: this.state.budget
        })
    }

    render() {
        return (
            <BudgetConsumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body mb3" style = {{paddingTop: '10px', paddingBottom: '10px'}}>
                    <label>Your Budget</label>
                    <form className="form-inline">
                        <input
                            onChange={this.handleInput}
                            value={this.state.budget}
                            className="form-control mr-2"
                            type="number"
                        />
                        <button onClick={this.handleSubmit.bind(this, dispatch)} className="btn btn-dark">Submit</button>
                    </form>
                    </div>
                    )
                }}
            </BudgetConsumer>


        )
    }
}

export default InputBudget;
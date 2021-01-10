import React, { Component } from 'react';
import { BudgetConsumer } from  '../store';

class InputInterestRate extends Component {

    state = {
        interestRate: ''
    }

    handleInput = (e) => {
        this.setState({interestRate: e.target.value})
    }

    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_INTEREST",
            interestRate: this.state.interestRate
        })
    }

    render() {
        return (
            <BudgetConsumer> 
                {value => {
                    const { dispatch } = value
                    return (
                    <div className="card card-body mb-3">
                    <label>Interest Rate %</label>
                    <form className="form-inline">
                        <input
                            onChange={this.handleInput}
                            value={this.state.interestRate}
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

export default InputInterestRate
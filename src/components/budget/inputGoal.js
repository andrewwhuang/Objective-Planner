import React, { Component } from 'react';
import { BudgetConsumer } from  '../store';

class InputGoal extends Component {

    state = {
        goal: ''
    }

    handleInput = (e) => {
        this.setState({goal: e.target.value})
    }

    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_GOAL",
            goal: this.state.goal
        })
    }

    render() {
        return (
            <BudgetConsumer> 
                {value => {
                    const { dispatch } = value
                    return (
                    <div className="card card-body mb3" style = {{paddingTop: '10px', paddingBottom: '10px'}}>
                    <label>Goal Amount</label>
                    <form className="form-inline">
                        <input
                            onChange={this.handleInput}
                            value={this.state.goal}
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

export default InputGoal
import React, { Component } from 'react';
import { BudgetConsumer } from  '../store';

class InputBudget extends Component {

    state = {
        goal: '',
        interest: '',
        time: ''
    }

    handleInputGoal = (e) => {
        this.setState({goal: e.target.value})
    }

    handleInputInterest = (e) => {
        this.setState({interest: e.target.value})
    }

    handleInputTime = (e) => {
        this.setState({time: e.target.value})
    }


    // To do
    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_BUDGET",
            goal: this.state.goal,  
            interest: this.state.interest,
            time: this.state.time
        })
    }


    // Merge the three submit buttons
    render() {
        return (
            <BudgetConsumer> 
                {value => {
                    const { dispatch } = value
                    return (
                    <div className="card card-body mb-3">

                    <label>Goal Amount</label>
                    <form className="form-inline">
                        <input
                            onChange={this.handleInputGoal}
                            value={this.state.goal}
                            className="form-control mr-2"
                            type="number"
                        />
                        <button onClick={this.handleSubmit.bind(this, dispatch)} className="btn btn-dark">Submit</button>    
                    </form>

                    <label>Interest Rate %</label>
                    <form className="form-inline">
                        <input
                            onChange={this.handleInputInterest}
                            value={this.state.interest}
                            className="form-control mr-2"
                            type="number"
                        />
                        <button onClick={this.handleSubmit.bind(this, dispatch)} className="btn btn-dark">Submit</button>    
                    </form>

                    <label>Time in Months</label>
                    <form className="form-inline">
                        <input
                            onChange={this.handleInputTime}
                            value={this.state.time}
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

export default InputBudget
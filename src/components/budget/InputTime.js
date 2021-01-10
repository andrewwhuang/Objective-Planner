import React, { Component } from 'react';
import { BudgetConsumer } from  '../store';

class InputTime extends Component {

    state = {
        time: ''
    }

    handleInput = (e) => {
        this.setState({time: e.target.value})
    }

    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_TIME",
            time: this.state.time
        })
    }

    render() {
        return (
            <BudgetConsumer> 
                {value => {
                    const { dispatch } = value
                    return (
                    <div className="card card-body mb3" style = {{paddingTop: '10px', paddingBottom: '10px'}}>
                    <label>Time</label>
                    <form className="form-inline">
                        <input
                            onChange={this.handleInput}
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

export default InputTime
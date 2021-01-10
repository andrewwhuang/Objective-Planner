import React from 'react';
import { BudgetConsumer } from './store';
import { withFirebase } from './Firebase/context'

const SaveButton = ({ firebase }) => (
  <BudgetConsumer>
    {value => {
      const data = {
        budget: value.budget,
        expenses: value.expenses,
        goal: value.goal,
        interestRate: value.interestRate,
        time: value.time
      }
      const uid = firebase.getCurrentUid()
      return(
        <button type="button" onClick={firebase.writeToDb(uid, data)} className="btn btn-dark" style = {{float: 'center', width: '100px', margin: '5px'}}>
          Save
        </button>
      )
    }
  }
  </BudgetConsumer>
);

export default withFirebase(SaveButton);
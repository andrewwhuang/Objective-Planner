import React, { Component } from 'react';
import DataGrid from 'react-data-grid';
import { ProgressBar } from "react-bootstrap";
import 'react-data-grid/dist/react-data-grid.css';
import { withFirebase } from '../../components/Firebase/context'

const ProgressBarFormatter = (value) => {
    return <ProgressBar now={value.row.progress} label={`${value.row.progress}%`} />;
};

class ViewPage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        columns: [
            { key: 'goal', name: 'Goal' },
            { key: 'saved', name: 'Amount Saved' },
            { key: 'annuity', name: 'Annuity' },
            { key: 'progress', name: 'Progress', formatter: ProgressBarFormatter }
          ],
        rows: [
            { goal: 'house', saved: '0', annuity: '3600', progress: 0 },
            { goal: 'dog', saved: '200', annuity: '400', progress: 50 },
            { goal: 'car', saved: '3000', annuity: '3600', progress: 90 },
        ],
        dt: this.props.firebase.readDb(this.props.firebase.getCurrentUid())
      }
    }


    render() {
      this.state.dt.then(function(result) {console.log("hehe: " + result.budget);});
      this.state.dt.then(function(result) {console.log("hehe: " + result.expenses[0].amount);});
      this.state.dt.then(function(result) {console.log("hehe: " + result.goal);});
      this.state.dt.then(function(result) {console.log("hehe: " + result.interestRate);});
      return (
        <DataGrid rows={this.state.rows} columns={this.state.columns}></DataGrid>
      );
    }
  }

  export default withFirebase(ViewPage);
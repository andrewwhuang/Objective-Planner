import React, { Component } from 'react';
import DataGrid from 'react-data-grid';
import { ProgressBar } from "react-bootstrap";
import 'react-data-grid/dist/react-data-grid.css';

const ProgressBarFormatter = (value) => {
    console.log(value.row.progress);
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
            { goal: 'dog', saved: '0', annuity: '420', progress: 50 },
            { goal: 'pc', saved: '0', annuity: '3600', progress: 90 },
        ]
      }
    }

    render() {
      return (
        <DataGrid rows={this.state.rows} columns={this.state.columns}></DataGrid>
      );
    }
  }

  export default ViewPage;
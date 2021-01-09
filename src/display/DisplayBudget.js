import React from 'react';
import BalanceDisplay from './BalanceDisplay';

const DisplayBudget = () => {
    return (
        <div className="card card-body">
            <h3 className="text-center">Your Budget Info</h3>
            <BalanceDisplay />
        </div>
    )
}
export default DisplayBudget
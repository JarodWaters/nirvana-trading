import React from 'react';

const PositionList = ({ positions }) => {
  return (
    <div>
      <h2>Open Positions</h2>
      <ul>
        {positions.map((position, index) => (
          <li key={index}>
            Collateral: {position.collateral}, Leverage: {position.leverage}, PnL: {position.pnl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PositionList;
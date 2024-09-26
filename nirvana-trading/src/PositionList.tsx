import React from 'react';

type Position = {
  collateral: number;
  leverage: number;
  isLong: boolean;
};

const PositionList = ({ positions }: { positions: Position[] }) => {
  return (
    <div>
      <h2>Your Open Positions</h2>
      <ul>
        {positions.map((position, index) => (
          <li key={index}>
            {position.collateral} SUI - {position.leverage}x - {position.isLong ? 'Long' : 'Short'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PositionList;

import React, { useState } from 'react';
import PositionForm from './PositionForm';  // Form to open a position
import PositionList from './PositionList';  // Display open positions
import TradingChart from './TradingChart';  // TradingView chart component

const App = () => {
  const [positions, setPositions] = useState([]);

  const handleOpenPosition = async (collateral, leverage, isLong) => {
    const newPosition = { leverage, collateral, pnl: 0 };  // Mock PnL for now
    setPositions([...positions, newPosition]);  // Add position to state
  };

  return (
    <div>
      <h1>Nirvana Trading Platform</h1>
      
      {/* TradingView chart */}
      <TradingChart />  {/* Add the TradingView chart here */}

      {/* Form to open new positions */}
      <PositionForm openPosition={handleOpenPosition} />

      {/* List of open positions */}
      <PositionList positions={positions} />
    </div>
  );
};

export default App;

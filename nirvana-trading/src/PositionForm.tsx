import React, { useState } from 'react';

const PositionForm = ({ onSubmit }: { onSubmit: (collateral: number, leverage: number, isLong: boolean) => void }) => {
  const [collateral, setCollateral] = useState<number>(0);
  const [leverage, setLeverage] = useState<number>(1);
  const [isLong, setIsLong] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(collateral, leverage, isLong);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Collateral (SUI): </label>
        <input
          type="number"
          value={collateral}
          onChange={(e) => setCollateral(Number(e.target.value))}
          placeholder="Enter collateral"
          min="0"
          required
        />
      </div>
      
      <div>
        <label>Leverage: </label>
        <select value={leverage} onChange={(e) => setLeverage(Number(e.target.value))}>
          {[...Array(30).keys()].map(i => (
            <option key={i + 1} value={i + 1}>
              {i + 1}x
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label>Direction: </label>
        <label>
          <input type="radio" value="long" checked={isLong} onChange={() => setIsLong(true)} /> Long
        </label>
        <label>
          <input type="radio" value="short" checked={!isLong} onChange={() => setIsLong(false)} /> Short
        </label>
      </div>

      <button type="submit">Open Position</button>
    </form>
  );
};

export default PositionForm;

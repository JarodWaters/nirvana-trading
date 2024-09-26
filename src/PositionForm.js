import React, { useState } from 'react';

const PositionForm = ({ openPosition }) => {
  const [collateral, setCollateral] = useState('');
  const [leverage, setLeverage] = useState('');
  const [isLong, setIsLong] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    openPosition(parseFloat(collateral), parseFloat(leverage), isLong);
    setCollateral('');
    setLeverage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={collateral}
        onChange={(e) => setCollateral(e.target.value)}
        placeholder="Collateral"
        required
      />
      <input
        type="number"
        value={leverage}
        onChange={(e) => setLeverage(e.target.value)}
        placeholder="Leverage"
        required
      />
      <select value={isLong} onChange={(e) => setIsLong(e.target.value === 'true')}>
        <option value="true">Long</option>
        <option value="false">Short</option>
      </select>
      <button type="submit">Open Position</button>
    </form>
  );
};

export default PositionForm;
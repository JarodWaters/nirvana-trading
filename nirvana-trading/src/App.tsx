import React, { useState } from 'react';
import { ConnectButton, useCurrentAccount, useSuiClientQuery } from '@mysten/dapp-kit';
import './App.css'; // Import your CSS file for styling
import TradingChart from './TradingChart'; // Add this import
import PositionForm from './PositionForm'; // Import the new form component
import PositionList from './PositionList'; // Import the PositionList component

type Position = {
  collateral: number;
  leverage: number;
  isLong: boolean;
};

function App() {
  const [positions, setPositions] = useState<Position[]>([]);

  // Function to handle submission of position form
  const handlePositionSubmit = (collateral: number, leverage: number, isLong: boolean) => {
    const newPosition = { collateral, leverage, isLong };
    setPositions([...positions, newPosition]); // Add the new position to the list of positions
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Nirvana Trading Platform</h1>
          <ConnectButton />
        </div>
      </header>

      <main className="App-content">
        <ConnectedAccount />
        <TradingChart /> {/* TradingView chart */}
        <PositionForm onSubmit={handlePositionSubmit} /> {/* Form for submitting positions */}
        <PositionList positions={positions} /> {/* List of open positions */}
      </main>
    </div>
  );
}

function ConnectedAccount() {
  const account = useCurrentAccount();

  if (!account) {
    return null;
  }

  return (
    <div className="account-info">
      <h2>Connected to: {account.address}</h2>
      <OwnedObjects address={account.address} />
    </div>
  );
}

function OwnedObjects({ address }: { address: string }) {
  const { data, isLoading, error } = useSuiClientQuery('getOwnedObjects', {
    owner: address,
  });

  if (isLoading) {
    return <div>Loading objects...</div>;
  }

  if (error) {
    return <div>Error loading objects</div>;
  }

  return (
    <ul className="owned-objects">
      {data?.data.map((object) => (
        <li key={object.data?.objectId}>
          <a href={`https://explorer.sui.io/object/${object.data?.objectId}`} target="_blank" rel="noreferrer">
            {object.data?.objectId}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;

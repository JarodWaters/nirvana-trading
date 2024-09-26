import React, { useEffect } from 'react';

const TradingChart = () => {
  useEffect(() => {
    // Load the TradingView widget when the component is mounted
    new window.TradingView.widget({
      symbol: 'SUIUSD', // Default symbol (you can change this dynamically)
      interval: '15',   // Time interval for the chart (15 min candles)
      container_id: 'tradingview_chart',  // Container for the chart
      width: '100%',    // Full width
      height: 500,      // Set a height for the chart
      theme: 'light',   // Can be light or dark theme
      style: '1',       // Style of the chart (1 = candlesticks)
      locale: 'en',     // Language
      toolbar_bg: '#f1f3f6',  // Background color of the toolbar
    });
  }, []);

  return <div id="tradingview_chart"></div>;  // Div to hold the chart
};

export default TradingChart;

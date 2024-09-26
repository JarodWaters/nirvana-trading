import React, { useEffect } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

const TradingChart = () => {
  useEffect(() => {
    // Dynamically load the TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          symbol: 'SUIUSD',  // Default symbol to display
          interval: '15',    // Time interval (15 minutes)
          container_id: 'tradingview_chart',  // ID of the div to render the chart
          width: '100%',     // Width of the chart
          height: 500,       // Height of the chart
          theme: 'light',    // Theme: light or dark
          style: '1',        // Chart style: 1 = candlestick
          locale: 'en',      // Locale: English
          toolbar_bg: '#f1f3f6', // Background color of the toolbar
        });
      }
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tradingview_chart"></div>; // Div to hold the TradingView chart
};

export default TradingChart;

import React, {useState} from 'react';

import Wheel from './components/wheel';

function App() {

  const [winnerText, setWinnerText] = useState(null);

  const [prices, setPrices] = useState([
    '0,0001 BTC',
    '0,0075 BTC',
    '0,0099 BTC',
    '0,0750 BTC',
    '0,0990 BTC',
    '0,7500 BTC',
    '0,9900 BTC',
    '0,8271 BTC',
    '0,1000 BTC',
    '0,0100 BTC',
    '0,0010 BTC',
    '1,0000 BTC',
  ]);

  function setupWinnerText(text) {
    setWinnerText(text);
  }

  return (
    <div className="App">
        <h1>Test your luck in Bitcoin?</h1>
        <Wheel items={prices} setupWinnerText={setupWinnerText} />
        <h4>Winner of Price in Bitcoin is: {winnerText}</h4>
    </div>
  );
}

export default App;

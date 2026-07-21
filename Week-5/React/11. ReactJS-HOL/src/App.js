import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [clickedText, setClickedText] = useState('');

  const handleWelcome = (welcomeMessage) => {
    setMessage(welcomeMessage);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setClickedText('I was clicked');
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => handleWelcome('Welcome')}>Say Welcome</button>
        <button onClick={handleClick}>Click on Me</button>
      </div>
      <div className="output">
        <p>Counter: {count}</p>
        <p>{message && `Hello ${message}`}</p>
        <p>{clickedText}</p>
      </div>
      <CurrencyConvertor />
    </div>
  );
}

export default App;

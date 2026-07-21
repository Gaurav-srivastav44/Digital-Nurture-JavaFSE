import React, { useState } from 'react';
import Guest from './Guest';
import User from './User';
import Greeting from './Greeting';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      <div className="actions">
        {!loggedIn ? (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        ) : (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        )}
      </div>
      <Greeting loggedIn={loggedIn} />
      {loggedIn ? <User /> : <Guest />}
    </div>
  );
}

export default App;

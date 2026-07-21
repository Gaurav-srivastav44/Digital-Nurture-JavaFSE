import React from 'react';

function Greeting({ loggedIn }) {
  return (
    <div className="greeting">
      {loggedIn ? <h2>Welcome back, user!</h2> : <h2>Welcome guest! Please login to book tickets.</h2>}
    </div>
  );
}

export default Greeting;

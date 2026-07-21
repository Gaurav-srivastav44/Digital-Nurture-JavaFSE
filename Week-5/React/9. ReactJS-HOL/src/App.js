import './App.css';

function App() {
  const t20Players = [
    { name: 'Rohit Sharma', score: 95 },
    { name: 'Virat Kohli', score: 82 },
    { name: 'Jasprit Bumrah', score: 30 },
    { name: 'Hardik Pandya', score: 65 },
    { name: 'Ravindra Jadeja', score: 55 },
  ];

  const ranjiPlayers = [
    { name: 'Cheteshwar Pujara', score: 105 },
    { name: 'Mayank Agarwal', score: 72 },
    { name: 'Shubman Gill', score: 68 },
    { name: 'Ajinkya Rahane', score: 88 },
    { name: 'Hanuma Vihari', score: 47 },
  ];

  const allPlayers = [...t20Players, ...ranjiPlayers];
  const belowSeventy = allPlayers.filter((player) => player.score < 70);

  return (
    <div className="App">
      <h1>Cricket Player Scores</h1>
      <section>
        <h2>All Players</h2>
        <ul>
          {allPlayers.map((player, index) => {
            const { name, score } = player;
            return (
              <li key={index}>
                {name} - {score}
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>Players below 70</h2>
        <ul>
          {belowSeventy.map(({ name, score }, index) => (
            <li key={index}>{name} - {score}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Indian Players</h2>
        <p>Odd Players</p>
        <ul>
          {allPlayers.filter((_, index) => index % 2 === 0).map((player, index) => (
            <li key={`odd-${index}`}>{player.name}</li>
          ))}
        </ul>
        <p>Even Players</p>
        <ul>
          {allPlayers.filter((_, index) => index % 2 === 1).map((player, index) => (
            <li key={`even-${index}`}>{player.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Player Type</h2>
        <p>{allPlayers.length > 0 ? 'Player data available' : 'No player data'}</p>
      </section>
    </div>
  );
}

export default App;

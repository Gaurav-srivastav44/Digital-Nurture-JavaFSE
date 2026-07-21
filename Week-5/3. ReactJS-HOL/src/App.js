import CalculateScore from './CalculateScore';
import './App.css';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Aarav"
        School="Cognizant School"
        Total={85}
        Goal={100}
      />
    </div>
  );
}

export default App;

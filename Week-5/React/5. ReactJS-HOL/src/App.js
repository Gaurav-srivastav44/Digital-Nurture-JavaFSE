import CohortDetails from './CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    { name: 'React Fundamentals', status: 'Ongoing' },
    { name: 'Advanced JavaScript', status: 'Completed' },
  ];

  return (
    <div className="App">
      <h1>Cohort Tracker</h1>
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.name} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;

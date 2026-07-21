import './App.css';

function App() {
  const offices = [
    {
      name: 'Sunshine Workspace',
      rent: 55000,
      address: '10 Main Street, Mumbai',
      image: 'https://via.placeholder.com/400x220?text=Office+1',
    },
    {
      name: 'Tech Hub Plaza',
      rent: 65000,
      address: '22 Park Avenue, Delhi',
      image: 'https://via.placeholder.com/400x220?text=Office+2',
    },
    {
      name: 'Business Center',
      rent: 72000,
      address: '45 Business Road, Bangalore',
      image: 'https://via.placeholder.com/400x220?text=Office+3',
    },
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>
      <div className="office-list">
        {offices.map((office, index) => (
          <div key={index} className="office-card">
            <img src={office.image} alt={office.name} />
            <h2>{office.name}</h2>
            <p>Rent: <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>₹{office.rent}</span></p>
            <p>Address: {office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './mystyle.css';

function CalculateScore({ Name, School, Total, Goal }) {
  const scorePercent = Goal ? ((Total / Goal) * 100).toFixed(2) : '0.00';

  return (
    <div className="score-card">
      <h1>Student Score Report</h1>
      <p>Name: {Name}</p>
      <p>School: {School}</p>
      <p>Total: {Total}</p>
      <p>Score %: {scorePercent}%</p>
    </div>
  );
}

export default CalculateScore;

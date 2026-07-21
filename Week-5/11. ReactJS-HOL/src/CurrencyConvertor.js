import React, { useState } from 'react';

function CurrencyConvertor() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = parseFloat(inr);
    if (!Number.isNaN(value)) {
      setEuro((value / 90).toFixed(2));
    }
  };

  return (
    <div className="currency-convertor">
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          INR Amount:
          <input
            type="number"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euro !== null && <p>Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;

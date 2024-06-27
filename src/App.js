import React, { useState } from 'react';
import './App.css';
import ValueDisplay from './ValueDisplay';

function App() {
  const [currentValue, setCurrentValue] = useState('');
  
  
  return (
    <div className="App">
      <h1>Display Current and Previous Props Value</h1>
      <input
        type="text"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        placeholder="Enter a value..."
      />
      <ValueDisplay currentValue={currentValue} />
    </div>
  );
}

export default App;
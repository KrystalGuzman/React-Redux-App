import React from 'react';
import './App.css';
import DateCard from './components/DateCard';
import YearCard from './components/YearCard';

function App() {
  return (
    <div className="App">
      <h1>Random Date Fact</h1>
      <DateCard />

      <h1>Random Year Fact</h1>
      <YearCard />
    </div>
  );
}

export default App;

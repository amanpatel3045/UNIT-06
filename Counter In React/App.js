import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);

  function handleIncrement() {
    setCounter(counter+1);
  }
  function handleDecrement() {
    setCounter(counter-1);
  }
  function handleDouble() {
    setCounter(counter*2);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1 style={counter%2===0?{color:'green'}:{color:'red'}}>{counter}</h1>
      <div>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleDouble}>Double</button>
      </div>
    </div>
  );
}

export default App;
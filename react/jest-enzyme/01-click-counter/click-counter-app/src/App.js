import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const sumCounterHandler = () => {
    setCounter((curCounter) => curCounter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <button className='button' type='button' onClick={sumCounterHandler}>Click me</button>
      </header>
    </div>
  );
}

export default App;

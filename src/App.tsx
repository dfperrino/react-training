import Button from '@material-ui/core/Button';
import React from 'react';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_DAVID);
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

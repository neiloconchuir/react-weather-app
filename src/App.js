import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          This project was coded by Neil O'Conchuir and is{" "}
          <a
            href="https://github.com/neiloconchuir/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

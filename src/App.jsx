import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.scss';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

// import './App.scss';

// export default function App() {
//   return (
//     <div className="App">
//         Gabarit de base d'une Application React
//     </div>
//   );
// }
// import React from 'react';
// import './App.css';

// const App = () => (
//   <div>
//     <h1>App is now here</h1>
//   </div>
// );

// export default App;

// import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Budget from './components/budget/Budget';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navbar />
      <div className ="container my-5" >
        <Budget />
      </div>
    </div>
  );
}

export default App;

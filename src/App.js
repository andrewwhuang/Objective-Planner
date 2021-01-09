// import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Budget from './components/budget/Budget';
import { FirebaseContext } from './components/Firebase'
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className ="container my-5" >
        <Budget />
      </div>
    </div>
  );
}

export default App;

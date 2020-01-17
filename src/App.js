import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/customer' >Customers</Link>
        <Link to='/customer/32' >Customers 32</Link>
      </div>
    </Router>
  );
}

export default App;

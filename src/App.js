import React from 'react';
import {Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';

function App() {
  const renderHome = () => <HomeContainer/>
  const renderCustomerContainer = () => <h1>Customer Container</h1>
  const renderCustomerListContainer = () => <h1>Customers List Container</h1>
  const renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component= {/*HomeContainer*/ renderHome}/>
        <Route exact path='/customers' component= {renderCustomerListContainer}/>
        <Switch>
          <Route path='/customers/new' component= {renderCustomerNewContainer}/>        
          <Route path='/customers/:dni' component= {renderCustomerContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

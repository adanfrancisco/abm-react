import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

function App() {
  
  //const renderHome = () => <HomeContainer/>
  const renderCustomerContainer = () => <h1>Customer Container</h1>
  
  //const renderCustomerListContainer = () => <CustomersContainer/>
  const renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component= {HomeContainer}/>
        <Route exact path='/customers' component= {CustomersContainer}/>
        <Switch>
          <Route path='/customers/new' component= {renderCustomerNewContainer}/>        
          <Route path='/customers/:dni' component= {renderCustomerContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

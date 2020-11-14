import React from "react";
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import './App.css'
import PizzaForm from './PizzaForm'

const App = () => {
  return (
    <div className="app">
      <nav>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
        <Link to="/">Home</Link><br></br>
        <Link>Help</Link>
      </div>
      </nav>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path ="/pizza">
        <PizzaForm/>
      </Route>
      <Link exact to="/pizza"><button>Pizza?</button></Link>
    </div>
  );
};
export default App;

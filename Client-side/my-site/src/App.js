
import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import './App.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer"




function App() {

  return (
    <Router>
    <div>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        </Switch>
        <Footer/>
    </div>

    </Router>
  );
}

export default App;
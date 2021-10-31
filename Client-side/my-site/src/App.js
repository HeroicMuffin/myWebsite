
import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import './App.css';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";



function App() {
  return (
    <Router>
    <div>
      
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects"  component={Projects}/>
        <Route path="/contact"  component={Contact}/>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
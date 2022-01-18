
import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import './App.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer"
import {Modal} from './Components/DemoModal'
import TempGif from './Images/Crypto.gif'


export const store = { show: true};
export const store2 = { gifPath:""};




function App() {
  const [showModal, setShowModal] = useState(store.show)
//   const openModal = () =>{
//     setShowModal(prev => !prev)
// }
  return (
    <Router>
    <div>
      {showModal?<Modal className="modalBG"  showModal={showModal} setShowModal={setShowModal} gif={TempGif}/>:null}
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
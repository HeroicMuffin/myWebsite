import React from "react";
import "./index.css";
import logo from "../../Images/sig.png"
import Pdf from "../../Images/Peleg_ohanuna_CV.pdf"
import {BrowserRouter as Router,Link} from 'react-router-dom'


function Navbar() {


    return (
        <div>
            <div className="navbar">
            <div>
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="https://fontmeme.com/permalink/211028/e7291e4a6aea91f7d68554659dbe5bc3.png"/>
                </Link>
            </div>
            <div className="navItems">
                <div className="navItem1">
                    <a class="btn btn-outline-primary" href = {Pdf} target = "_blank">Resume</a>
                </div>

            </div>
        </div>
    </div>
    );
}



export default Navbar;


import React from "react";
import "./index.css";
import logo from "../../assets/sig.png"
import Pdf from "../../assets/Peleg_ohanuna_CV.pdf"
import {Link} from 'react-router-dom'


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
                    <a className="btn btn-outline-primary" href = {Pdf} target = "_blank" rel="noreferrer">Resume</a>
                </div>

            </div>
        </div>
    </div>
    );
}



export default Navbar;


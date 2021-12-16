import React from "react";
import "./index.css";
import logo from "../../Images/sig.png"
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import routes from "../AppRouter/router.config"
import AppRoutes from "../AppRouter/appRouter";

function Navbar() {


    return (
        <div className="navbar">
            <div>
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="https://fontmeme.com/permalink/211028/e7291e4a6aea91f7d68554659dbe5bc3.png"/>
                </Link>
            </div>
            <div className="navItems">
                <div className="navItem1">
                    <Link to={"/projects"}>
                        <a class="button is-primary is-outlined is-rounded">Projects</a>
                    </Link>
                </div>
            

                <div className="navItem2">
                    <Link to={"/contact"}>
                        <a class="button is-primary is-outlined is-rounded">Say Hello</a>
                    </Link>
                </div>
            </div>
             
        </div>
        
    );
}



export default Navbar;


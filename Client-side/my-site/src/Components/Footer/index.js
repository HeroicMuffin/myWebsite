import React from "react";
import linkedin from "../../Images/linkedin.png"
import linkedinHover from "../../Images/linkedin-hover.png"
import github from "../../Images/github-logo.png"
import githubHover from "../../Images/github-logo-hover.png"
import "./index.css";


function Footer() {
    return (
        <div class="Footer">
                    <section className="links has-text-centered">
                <h3 className="title is-spaced is-size-4-desktop is-size-5-mobile">Feel free to contact me via LinkedIn or<br/> checkout my Github page!</h3>
                <div className="linksContainer">
                    <div className="linkBox">
                        <a href="https://www.linkedin.com/in/peleg-ohanuna-465a00213/" target="_blank"><img className="linkedInLogo" src={linkedin} onMouseOver={e => (e.currentTarget.src = linkedinHover)} onMouseOut={e => (e.currentTarget.src = linkedin)}/></a>
                    </div>
                    <div className="linkBox">
                        <a href="https://github.com/HeroicMuffin" target="_blank"><img className="gitHubLogo" src={github} onMouseOver={e => (e.currentTarget.src = githubHover)} onMouseOut={e => (e.currentTarget.src = github)}/></a>
                    </div>
                </div>
            </section>
        </div>
    );
}



export default Footer;

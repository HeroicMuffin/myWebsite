import React from "react";
import linkedin from "../../assets/linkedin.png"
import linkedinHover from "../../assets/linkedin-hover.png"
import github from "../../assets/github-logo.png"
import githubHover from "../../assets/github-logo-hover.png"
import "./index.css";


function Footer() {
    return (
        <div className="Footer">
                    <section className="links has-text-centered">
                <h3 className="title is-spaced is-size-4-desktop is-size-5-mobile">Feel free to contact me via LinkedIn or<br/> checkout my Github page!</h3>
                <div className="linksContainer">
                    <div className="linkBox">
                        <a href="https://www.linkedin.com/in/peleg-ohanuna-465a00213/" target="_blank" rel="noopener noreferrer" ><img className="linkedInLogo" src={linkedin} onMouseOver={e => (e.currentTarget.src = linkedinHover)} onMouseOut={e => (e.currentTarget.src = linkedin)} alt=""/></a>
                    </div>
                    <div className="linkBox">
                        <a href="https://github.com/HeroicMuffin" target="_blank" rel="noreferrer"><img className="gitHubLogo" src={github} onMouseOver={e => (e.currentTarget.src = githubHover)} onMouseOut={e => (e.currentTarget.src = github)} alt=""/></a>
                    </div>
                </div>
            </section>
        </div>
    );
}



export default Footer;

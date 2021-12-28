import React from "react";
import "./index.css";

import {DemoCarousel} from "./Carousel/Carousel"

function Projects() {


    return (
        <div class="projectsContainer">
            <h3 className="subtitle is-spaced is-size-4-desktop is-size-5-tablet is-size-6-mobile">Below are some of my project, presented in Gif format</h3>
            <div className="carouselContainer">
                <DemoCarousel/>
            </div>
        </div>
    );
}



export default Projects;

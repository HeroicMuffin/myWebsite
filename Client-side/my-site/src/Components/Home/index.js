import React from "react";
import deskImg from "../../Images/hero.svg"
import frontend from "../../Images/icons8-html-64.png"
import backend from "../../Images/backend.png"
import "./index.css";


function Home() {


    return (
        <div class="Home">
            <div className="titleBox">
                <h1 className="title is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">Designer & Fullstack Developer</h1>
                <h2 className="subtitle is-spaced is-size-4-desktop is-size-5-tablet is-size-6-mobile">I design and code beautifully simple things and I strive for excellence.</h2>
            </div>
            <div className="deskImg">
                <img src={deskImg}/>
            </div>
            <section className="section is-small is-primary has-text-centered is-long">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="desContainer">
                            <h3 className="title is-spaced is-size-4-desktop is-size-5-mobile">Hi, I'm Peleg. Nice to meet you</h3>
                            <p className="selfdesc">I'm a John bryce graduate but consider myself mostly self taught. I have created countless personal </p>
                            <p className="selfdesc">projects by using both front and back end technologies some of which can be accessed through my git page.</p>
                            <p className="selfdesc">  I'm looking forward to applying my knowledge for the benefit of others</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section skills has-text-centered">
                <div className="container skill">
                    <div className="box">
                        <div className="content">
                            <div className="columns  is-centered">
                                <div className="column left">
                                    <img className="skillogo" src={frontend}/>
                                    <h1 className="title is-spaced is-size-4">Front-end</h1>
                                    <p>I enjoy working with frameworks and bringing ideas to life on a browser </p>
                                </div>
                                <div className="column">
                                    <img className="skillogo" src={backend}/>
                                    <h1 className="title is-spaced is-size-4">Back-end</h1>
                                    <p>I like to write code from scratch and solve problems in creative ways</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}



export default Home;

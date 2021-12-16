import React, { Component } from 'react';
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AngularGif from '../../../Images/AngularShopGif.gif';
import VacationGif from '../../../Images/ReactVacationGif.gif';
import CryptoGif from '../../../Images/CryptoRecording.gif'



export class DemoCarousel extends Component {


    render() {
        return (
            <Carousel className='mainCarousel'>
                <div className="slideContainer">
                    <div>
                    <h1>Vacation Booking Website</h1>
                     <p>Developed with React, Redux, NodeJs and MySQL.
                        Landing page portraying vacation database with prices, images, description of the destination, statistics and graphs.
                        Includes user registration and validation, admin access and special abilities.
                    </p>
                    </div>
                    <img src={VacationGif} />
                </div>
                <div className="slideContainer">
                    <div>
                    <h1>Online Supermarket </h1>
                    <p>Store simulator developed with Angular, NodeJs and MongoDb via mongoose.
                    Store includes user registeration and validation, data retrieval from the
                    database and simulating an online store and cart filling mechanism.
                    Includes admin privilages and special actions
                    </p>
                    </div>
                    <img src={AngularGif} />
                </div>
                <div className="slideContainer">
                    <div>
                    <h1>Crypto Currency Tracker</h1>
                    <p>Simple API based database, presenting real-time prices and price history for all the Crypto curreny
                        market class, using charts and tables.
                    </p>
                    </div>
                    <img src={CryptoGif} />
                </div>
            </Carousel>
        );
    }
};



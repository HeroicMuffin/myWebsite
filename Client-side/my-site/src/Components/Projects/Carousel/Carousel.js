import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AngularGif from '../../../Images/AngularShopGif.gif';
import VacationGif from '../../../Images/ReactVacationGif.gif';
import CryptoGif from '../../../Images/cryptoGIF-compressed.gif'



export class DemoCarousel extends Component {


    render() {
        return (
            <Carousel className='mainCarousel'>
                <div className="slideContainer">
                    <h1>hello</h1>
                    <img src={VacationGif} />
                </div>
                <div className="slideContainer">
                    <img src={AngularGif} />
                </div>
                <div className="slideContainer">
                    <img src={CryptoGif} />
                </div>
            </Carousel>
        );
    }
};



import React, { Component } from 'react';
import classes from "./AdSlider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
 
export default class DemoCarousel extends Component {
    render() {
        return (
            <div className={classes.sliderHeight}>
            {/* <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            </div>
        );
    }
};
 

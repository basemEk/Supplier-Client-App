import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousel.module.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel>
                <div className={classes.img1}>
                    <img
                        src={"http://localhost:3001/assets/29-hero.jpg"}
                        width="200"
                        height="200"
                        alt="my-first-ad"
                    />
                </div>

                <div className={classes.img2}>
                    <img
                        src={"./assets/29-item-1.jpg"}
                        width="200"
                        height="200"
                        alt="my-first-ad"
                    />
                </div>

                <div className={classes.img3}>
                    <img
                        src={"./assets/29-item-3.jpg"}
                        width="200"
                        height="200"
                        alt="my-first-ad"
                    />
                </div>
            </Carousel>
        </div>
    );
}

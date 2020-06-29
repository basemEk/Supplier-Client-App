import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import classes from "./ItemInfo.module.css";

class ItemInfo extends Component {
    render() {
        return (
            <>
                <div className={classes.imgproductInfo}>
                    <div>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/ocean-spring.jpg"
                            }
                            className={classes.img}
                        />
                    </div>

                    <div>
                        <h2>Ocean spring Juice</h2>

                        <p>
                            The href attribute requires a valid value to be
                            <br />
                            correct The href attribute requires a valid value to
                            be correct
                        </p>

                        <h4>25000 LBP</h4>

                        <p>Minimum ordered Quantity:</p>
                        <input type="text" />
                        <br />
                        <br />
                        <Button variant="primary">Add to Cart</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default ItemInfo;

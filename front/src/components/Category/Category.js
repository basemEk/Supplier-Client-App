import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-link";
import classes from "./Category.module.css";
import SubCategories from "../SubCategories/SubCategories";

class Category extends Component {
    render() {
        return (
            <>
                <div className={classes.container}>
                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>

                                <Link to="/sub-categories">
                                <Button variant="primary">Go somewhere</Button>   
                                </Link>
                            </Card.Body>
                            
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className={classes.gridCategory}>
                        <Card style={{ width: "12rem" }}>
                            <Card.Img
                                className={classes.cardImage}
                                variant="top"
                                src="holder.js/100px180"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Add price here LBP</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </>
        );
    }
}

export default Category;

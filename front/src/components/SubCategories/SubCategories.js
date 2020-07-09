import React, { Component } from "react";
import { Tabs, Tab, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./SubCategories.module.css";
import "./SubCategories.css";
import axios from "axios";

class SubCategories extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	//fetching the data
	handleSubmit = () => {
		axios.get("http://127.0.0.1:8000/api/sub/category").then((res) => {
			this.setState({ data: res.data.data });
		});
	};

	componentDidMount = () => {
		this.handleSubmit();
	};

	render() {
		return (
			<>
				<div className={classes.threeTabs}>
					<Tabs
						defaultActiveKey="All"
						transition={false}
						id="noanim-tab-example"
					>
						<Tab eventKey="All" title="All">
							<div className={classes.container}>
								{this.state.data.map((key) => {
									return (
										<>
											<div className={classes.gridCategory}>
												<Card style={{ width: "12rem" }}>
													<Card.Img
														className={classes.cardImage}
														variant="top"
														src={
															process.env.PUBLIC_URL + `/assets/${key.image}`
														}
													/>
													<Card.Body>
														<Card.Title>{key.title}</Card.Title>
														<Card.Text>5000 LBP</Card.Text>

														<Link to="/sub-categories/item-info">
															<Button variant="primary">Order Now</Button>
														</Link>
													</Card.Body>
												</Card>
											</div>
										</>
									);
								})}
							</div>
						</Tab>

						<Tab eventKey="Grains" title="Grains Cans"><div className={classes.container}>
								{this.state.data.map((key) => {
									return (
										<>
											<div className={classes.gridCategory}>
												<Card style={{ width: "12rem" }}>
													<Card.Img
														className={classes.cardImage}
														variant="top"
														src={
															process.env.PUBLIC_URL + `/assets/${key.image}`
														}
													/>
													<Card.Body>
														<Card.Title>{key.title}</Card.Title>
														<Card.Text>5000 LBP</Card.Text>

														<Link to="/sub-categories/item-info">
															<Button variant="primary">Order Now</Button>
														</Link>
													</Card.Body>
												</Card>
											</div>
										</>
									);
								})}
							</div>
							</Tab>

						<Tab eventKey="Meat Cans" title="Meats Cans">
						<div className={classes.container}>
								{this.state.data.map((key) => {
									return (
										<>
											<div className={classes.gridCategory}>
												<Card style={{ width: "12rem" }}>
													<Card.Img
														className={classes.cardImage}
														variant="top"
														src={
															process.env.PUBLIC_URL + `/assets/${key.image}`
														}
													/>
													<Card.Body>
														<Card.Title>{key.title}</Card.Title>
														<Card.Text>5000 LBP</Card.Text>

														<Link to="/sub-categories/item-info">
															<Button variant="primary">Order Now</Button>
														</Link>
													</Card.Body>
												</Card>
											</div>
										</>
									);
								})}
							</div>
						</Tab>

						<Tab eventKey="Beverage Cans" title="Beverage Cans">
						<div className={classes.container}>
								{this.state.data.map((key) => {
									return (
										<>
											<div className={classes.gridCategory}>
												<Card style={{ width: "12rem" }}>
													<Card.Img
														className={classes.cardImage}
														variant="top"
														src={
															process.env.PUBLIC_URL + `/assets/${key.image}`
														}
													/>
													<Card.Body>
														<Card.Title>{key.title}</Card.Title>
														<Card.Text>5000 LBP</Card.Text>

														<Link to="/sub-categories/item-info">
															<Button variant="primary">Order Now</Button>
														</Link>
													</Card.Body>
												</Card>
											</div>
										</>
									);
								})}
							</div>
						</Tab>

						<Tab eventKey="Another Cans" title="Another Cans">
						<div className={classes.container}>
								{this.state.data.map((key) => {
									return (
										<>
											<div className={classes.gridCategory}>
												<Card style={{ width: "12rem" }}>
													<Card.Img
														className={classes.cardImage}
														variant="top"
														src={
															process.env.PUBLIC_URL + `/assets/Cans/Beverage${key.image}`
														}
													/>
													<Card.Body>
														<Card.Title>{key.title}</Card.Title>
														<Card.Text>5000 LBP</Card.Text>

														<Link to="/sub-categories/item-info">
															<Button variant="primary">Order Now</Button>
														</Link>
													</Card.Body>
												</Card>
											</div>
										</>
									);
								})}
							</div>
						</Tab>

					</Tabs>
				</div>
			</>
		);
	}
}

export default SubCategories;

{
	/* <div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/pepsi.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div> */
}

{
	/* 	<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/miranda.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/7up.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/jalapinos.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/mushroom.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/cola-can.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/cola-diet.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/black-beans.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/baked-beans.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can1.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can2.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>
						</div>
					

						</Tab>

                        <Tab eventKey="Sparkling Drinks" title="Sparkling Drinks">

						<div className={classes.container}>
							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can3.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>5000 LBP</Card.Text>

										<Link to="/sub-categories/item-info">
											<Button variant="primary">Order Now</Button>
										</Link>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can4.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can6.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can7.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can8.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can9.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "assets/can10.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can11.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can12.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can13.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can14.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can15.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can16.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can17.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can18.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can19.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can20.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can21.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div>

							<div className={classes.gridCategory}>
								<Card style={{ width: "12rem" }}>
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/can22.jpg"}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>Add price here LBP</Card.Text>
										<Button variant="primary">Order Now</Button>
									</Card.Body>
								</Card>
							</div> */
}

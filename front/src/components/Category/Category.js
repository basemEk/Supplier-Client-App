import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Category.module.css";
import axios from "axios";


class Category extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	//fetching the data
	handleSubmit = () => {
		axios.get("http://127.0.0.1:8000/api/category").then((res) => {
			this.setState({ data: res.data.data });
		});
	};

	componentDidMount = () => {
		this.handleSubmit();
	};

	render() {
		return (
			<>
				<div className={classes.container}>
					<div className={classes.gridCategory}>
						{this.state.data.map((key) => {
							return (
								<div>
									<Card style={{ width: "12rem" }}>
										<Link to="/sub-categories">
											<Card.Img
												className={classes.cardImage}
												variant="top"
												src={
													process.env.PUBLIC_URL + `/assets/Cans/Beverage${key.image}`
												}
											/>
										</Link>
										<Card.Body>
											<Card.Title>Cans</Card.Title>
										</Card.Body>
									</Card>
								</div>
							);
						})}

						<div className={classes.gridCategory}>
							<Card style={{ width: "13rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={
											process.env.PUBLIC_URL + "/assets/grains-rise-pastas.jpg"
										}
									/>
								</Link>
								<Card.Body>
									<Card.Title>Grains,Rise,Sugar</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/dairy-eggs.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Dairy & eggs</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/bakery.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Bakery</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/meats.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Meats & Fish</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/herbs-spices.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Herbs & Spices</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/organic.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Organics</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/chips-nuts.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Chips & Nuts</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem", height: "14.2rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={
											process.env.PUBLIC_URL + "/assets/chocolate-candies.jpg"
										}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Chocolate & Candies</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/icecream.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Ice creams</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/water-drinks.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Drinks & Water</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/coffe.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Coffe</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/tobacco.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Tobacco</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/deli.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Deli</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/grocery.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Grocery</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/detergents.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Detergents</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className={classes.gridCategory}>
							<Card style={{ width: "12rem" }}>
								<Link to="/sub-categories">
									<Card.Img
										className={classes.cardImage}
										variant="top"
										src={process.env.PUBLIC_URL + "/assets/detergents.jpg"}
									/>
								</Link>

								<Card.Body>
									<Card.Title>Tissues</Card.Title>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Category;

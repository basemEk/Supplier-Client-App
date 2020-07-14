import React, { Component } from "react";
import { Tabs, Tab, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./SubCategories.module.css";
import axios from "axios";

class SubCategories extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
			subCategories: [],
		};
	}

	//save products to local storage

	setData() {
		let obj = { id: 1, item: "pepsi" };
		localStorage.setItem("myData", JSON.stringify(obj));
		sessionStorage.setItem("mySessionStorageData", JSON.stringify(obj));
	}

	getData() {
		let data = sessionStorage.getItem("mySessionStorageData");
		data = JSON.parse(data);
		console.log(data.item);
	}

	//fetching the data
	getSubCategories = () => {
		axios.get("http://127.0.0.1:8000/api/sub/category").then((res) => {
			this.setState({ data: res.data.data });
		});
	};

	componentDidMount = () => {
		this.getSubCategories();
		this.getProducts(this.props.match.params.id);
	};

	getProducts = (category_id) => {
		axios
			.get(
				`${process.env.REACT_APP_BACKEND_URL}/api/category/${category_id}/products`
			)
			.then((res) => {
				const sub_categories_without_duplicates = [];

				const sub_categories = res.data.data.map((product) => {
					const sub_category = sub_categories_without_duplicates.find(sub => sub.id === product.sub_category.id);

					if(sub_category === undefined){
						sub_categories_without_duplicates.push(product.sub_category)
					}
					return product.sub_category;
				});


				this.setState({
					products: res.data.data,
					subCategories: sub_categories_without_duplicates,
				});
			});
	};

	render() {
		return (
			<>
				<div className={classes.localstorageTest}>
					{this.props.match.params.id}
					<button onClick={() => this.setData()}>Set data</button>
					<button onClick={() => this.getData()}>Get data</button>
				</div>
				<div className={classes.threeTabs}>
					<Tabs
						defaultActiveKey="All"
						transition={false}
						id="noanim-tab-example"
					>
						<Tab eventKey="All" title="All">
							<div className={classes.container}>
								{this.state.products.map((key) => {
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

						{this.state.subCategories.map((sub_category) => {
							return (
								<Tab eventKey={sub_category.id} title={sub_category.title}>
									<div className={classes.container}>
										{sub_category.items.map((key) => {
											return (
												<>
													<div className={classes.gridCategory}>
														<Card style={{ width: "12rem" }}>
															<Card.Img
																className={classes.cardImage}
																variant="top"
																src={
																	process.env.PUBLIC_URL +
																	`/assets/${key.image}`
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
							);
						})}
					</Tabs>
				</div>
			</>
		);
	}
}

export default SubCategories;

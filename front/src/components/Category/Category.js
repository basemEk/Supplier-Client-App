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
			categories: [],
		};
	}

	//fetching the data
	getCategories = () => {
		axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/category`).then((res) => {
			this.setState({ categories: res.data.data });
		});
	};

	componentDidMount = () => {
		this.getCategories();
	};

	render() {
		return (
			<>
				<div className={classes.container}>
					<div className={classes.flexCategories}>
						{this.state.categories.map((category) => {
							return (
								<div key={category.id}>
									<Card >
										<Link to={`/sub-categories/${category.id}`}>
											<Card.Img
												className={classes.cardImage}
												variant="top"
												src={category.image	}
											/>
										</Link>
										<Card.Body>
											<Card.Title>{category.title}</Card.Title>
										</Card.Body>
									</Card>
								</div>
							);
						})}

					
					</div>
				</div>
			</>
		);
	}
}

export default Category;

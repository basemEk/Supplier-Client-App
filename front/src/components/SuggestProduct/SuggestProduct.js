import React, { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "./SuggestProduct.module.css";

class SuggestProduct extends Component {
	render() {
		return (
			<>
			<div className={classes.suggestPage}>
				<h3>Suggest a Product</h3>
				<p>
					You may suggest a product to be added to our assortment depending on
					the Supplier stock availability
				</p><br/><br/>
				<input type = "text"/>
				<Button variant="primary">Order Now</Button>
				</div>

			</>
		);
	}
}

export default SuggestProduct;

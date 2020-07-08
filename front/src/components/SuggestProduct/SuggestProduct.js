import React, { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "./SuggestProduct.module.css";

class SuggestProduct extends Component {
	render() {
		return (
			<>
				<h3>Suggest a Product</h3>
				<p>
					you may suggest a product to be added to our assortment depending on
					the Supplier stock availability
				</p><br/><br/>
				<input type = "text"/>
				<Button variant="primary">Order Now</Button>

			</>
		);
	}
}

export default SuggestProduct;

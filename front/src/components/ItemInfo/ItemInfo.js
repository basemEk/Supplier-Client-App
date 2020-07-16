import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import classes from "./ItemInfo.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

class ItemInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: null,
		};
	}

	getProductInfo = (id) => {
        console.log(`${process.env.REACT_APP_BACKEND_URL}/api/item/info/${id}`)
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/item/info/${id}`)
			.then((res) => {
				this.setState({ itemData: res.data.data });
			});
	};

	componentDidMount() {
		this.getProductInfo(this.props.match.params.id);
	}

	render() {
		return (
			<>
				<div className={classes.imgproductInfo}>
					{this.state.itemData !== null ? (
						<>
							<div>
								<img
									src={process.env.REACT_APP_BACKEND_URL + `/uploads/products/${this.state.itemData.image}`}
									className={classes.img}
								/>
							</div>

							<div className={classes.itemInfoContainer}>
								<h2 className={classes.h2}>{this.state.itemData.title}</h2>

								<p>
									{this.state.itemData.description}
								</p>

								<h4 className={classes.h4}>{this.state.itemData.price_lbp}</h4>
								<br />
								<br />

								<p>Minimum Ordered Quantity:</p>
								<input type="text" readOnly value={this.state.itemData.minimum_quantity}/>
								<br />
								<br />
								<Button variant="primary">Add to Cart</Button>
                                 
                                 <Link to = "/home">
                                <Button variant="primary">Continue Shopping</Button>
                                 </Link>
							</div>
						</>
					) : null}
				</div>
			</>
		);
	}
}

export default ItemInfo;

{
	/* <div className={classes.imgproductInfo} key={item_info.id}>
					<div>
						<img
							src={
								process.env.REACT_APP_BACKEND_URL +
								`/uploads/products/${item_info.image}`
							}
							className={classes.img}
						/>
					</div>

					<div>
						<h2>{item_info.title}</h2>

						<p>
							{item_info.description}
						</p>

						<h4>{item_info.price}</h4>

						<p>Minimum Ordered Quantity:</p>
						<input type="text" readOnly />
						<br />
						<br />
						<Button variant="primary">Add to Cart</Button>
					</div>
				</div> */
}

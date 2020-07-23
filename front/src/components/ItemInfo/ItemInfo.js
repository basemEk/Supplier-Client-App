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
			item_quantity: 0,
		};
	}

	getProductInfo = (id) => {
		console.log(`${process.env.REACT_APP_BACKEND_URL}/api/item/info/${id}`);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/item/info/${id}`)
			.then((res) => {
				console.log(res.data.data);
				this.setState({
					itemData: res.data.data,
					item_quantity: res.data.data.minimum_quantity,
				});
			});
	};

	componentDidMount() {
		this.getProductInfo(this.props.match.params.id);
	}

	addItem = (e) => {
		console.log("add")
		e.preventDefault();
		const item = {
			quantity: this.state.item_quantity,
			available: true,
			item_info_id: this.props.match.params.id,
			title: this.state.itemData.title,
			price: this.state.itemData.price_lbp,
			total: this.state.itemData.price_lbp * this.state.item_quantity,
		};
		const order = localStorage.getItem("order");
		console.log("initial", order)
		if (order == null) {
			console.log('undef')
			localStorage.setItem("order", JSON.stringify([item]));
			console.log('here', localStorage.getItem("order"))
		} else {
			let available_in_the_order = false;
			const order_array = JSON.parse(order).map((currrent_item) => {
				if (item.item_info_id === currrent_item.item_info_id) {
					available_in_the_order = true;
					return {
						...item,
						quantity: this.state.item_quantity,
						title: this.state.itemData.title,
						price: this.state.itemData.price_lbp,
					};
				} else {
					return currrent_item;
				}
			});
			console.log('order_array', order_array)
			if (available_in_the_order) {
				localStorage.setItem("order", JSON.stringify([...order_array]));
			} else {
				localStorage.setItem("order", JSON.stringify([...order_array, item]));
			}
		}
	};



	render() {
		return (
			<>
				<div className={classes.imgproductInfo}>
					{this.state.itemData !== null ? (
						<>
							<div>
								<img
									src={
										process.env.REACT_APP_BACKEND_URL +
										`/uploads/products/${this.state.itemData.image}`
									}
									className={classes.img}
								/>
							</div>
							<div className={classes.itemInfoContainer}>
								<h2 className={classes.h2}>{this.state.itemData.title}</h2>
								<p>{this.state.itemData.description}</p>

								<div>
									<h4 className={classes.h4}>
										{this.state.itemData.price_lbp}
									</h4>
									<span className={classes.priceSpan}>LBP</span>
								</div>

								<br />
								<br />
								<div className={classes.orderGrid}>
									<div>
										<p>Minimum Ordered Quantity:</p>
										<input
											type="text"
											readOnly
											value={this.state.itemData.minimum_quantity}
											className={classes.readonlyWidth}
										/>
										<span>pcs</span>
									</div>
									<div>
										<p>Enter Quantity:</p>
										<input
											name="order"
											type="number"
											onChange={this.handleChange}
											className={classes.orderWidth}
											min={this.state.itemData.minimum_quantity}
											value={this.state.item_quantity}
											onChange={(e) =>
												this.setState({ item_quantity: e.target.value })
											}
										/>
										<span>pcs</span>
									</div>
								</div>

								<br />
								<br />
								<div className={classes.gridBtns}>
									<div>
										<Button onClick={(e) => this.addItem(e)}>
											Add to Cart
										</Button>
									</div>

									<Link to="/home">
										<div>
											<Button variant="primary">Continue Shopping</Button>
										</div>
									</Link>
									<Link to="/view-order-list">
										<div>
											<Button>View Order List</Button>
										</div>
									</Link>
								</div>
							</div>
						</>
					) : null}
				</div>
			</>
		);
	}
}

export default ItemInfo;

import React, { Component } from "react";
import classes from "./ViewOrderList.module.css";
import { Button } from "react-bootstrap";

class ViewOrderList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: true,
			products: [],
			EditInput: "",
			isEdit: null,
			save: false,
			item_quantity: 0,
			sum: 0,
			v: 0,
		};
	}

	RemoveBtn = (item_info_id) => {
		// debugger;
		const order = localStorage.getItem("order");

		if (order === null) {
			localStorage.setItem("order", JSON.stringify([]));
		} else {
			const filtred_order = JSON.parse(order).filter((item) => {
				if (item.item_info_id == item_info_id) {
					return false;
				} else {
					return true;
				}
			});

			localStorage.setItem("order", JSON.stringify(filtred_order));
		}
		this.setState({
			data: !this.state.data,
			isEdit: null,
		});
	};

	SaveBtn = (res) => {
		debugger;

		const order = localStorage.getItem("order");
		const item = {
			quantity: this.state.EditInput,
			item_info_id: res.item_info_id,
		};
		const new_oder = JSON.parse(order).map((orderItem) => {
			if (orderItem.item_info_id == item.item_info_id) {
				orderItem.quantity = item.quantity;
			}

			return orderItem;
		});
		localStorage.setItem("order", JSON.stringify(new_oder));
		this.setState({
			data: !this.state.data,
			isEdit: null,
		});
	};

	EditBtn = (value) => {
		console.log("bb", value.item_info_id);
		const order = localStorage.getItem("order");
		this.setState({
			isEdit: value.item_info_id,
			EditInput: value.quantity,
		});
	};

	submitAlert = () => {
		alert("Your order has sent successfully to the Supplier");
	};

	sumFunction = () => {
		JSON.parse(localStorage.getItem("order")).map(
			(value, key) => (
				(this.state.v = value.price * value.quantity),
				(this.state.sum = this.state.sum + this.state.v)
			)
		);
	};

	componentDidMount() {
		const orders = localStorage.getItem("order");
		console.log(orders);
	}

	render() {
		this.sumFunction();
		return (
			<div className={classes.shoppingList}>
				<h2>Order List</h2>
				<form ref="myForm" className="myForm">
					<div className={classes.table}>
						<table>
							<tr>
								<th>Name</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Sub Total</th>
							</tr>
							{JSON.parse(localStorage.getItem("order")).map((value, key) => (
								<>
									<tr key={key}>
										<td>{value.title}</td>
										<td>
											{this.state.isEdit == value.item_info_id ? (
												<input
													value={this.state.EditInput}
													min={this.state.EditInput}
													type="number"
													onChange={(e) =>
														this.setState({ EditInput: e.target.value })
													}
												/>
											) : (
												value.quantity
											)}
										</td>
										<td>{value.price}LBP</td>

										<td>{value.price * value.quantity}LBP</td>

										<td className={classes.tdButton}>
											<div>
												{this.state.isEdit == null ? (
													<Button
														variant="warning"
														onClick={() => this.EditBtn(value)}
													>
														Edit
													</Button>
												) : (
													""
												)}
											</div>
											<div>
												<Button
													variant="primary"
													onClick={() => this.SaveBtn(value)}
												>
													Save
												</Button>
											</div>

											<div>
												<Button
													variant="danger"
													onClick={() => this.RemoveBtn(value.item_info_id)}
												>
													Remove
												</Button>
											</div>
										</td>
									</tr>
								</>
							))}
						</table>

						<div className={classes.submitTotalGrid}>
							<div className={classes.SubmitBtn}>
								<Button onClick={() => this.submitAlert()} variant="success">
									Submit
								</Button>
							</div>
							<div className={classes.textT}>
								<label>
									<label>
										<b>Total: {this.state.sum} LBP</b>
									</label>
								</label>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}


export default ViewOrderList;

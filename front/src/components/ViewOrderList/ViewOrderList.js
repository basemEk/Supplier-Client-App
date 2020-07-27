import React, { Component } from "react";
import classes from "./ViewOrderList.module.css";
import { Button } from "react-bootstrap";

class ViewOrderList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: true,
			EditInput: 0,
			isEdit: null,
			save: false,
			item_quantity: 0,
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
		console.log("here",res)
		const order = localStorage.getItem("order");
		const item = {
			quantity: this.state.item_quantity,
			item_info_id: this.props.match.params.id,
		};

		//converting string to array
		const new_oder = JSON.parse(order).map((orderItem) => {
			if (orderItem.item_info_id == item.item_info_id) {
				orderItem.quantity = item.quantity;
			}

			return orderItem;
		});
		//convertinfg to string
		localStorage.setItem("order", JSON.stringify(new_oder));
		this.setState({
			data: !this.state.data,
		});
	};

	

	EditBtn = (value) => {
		console.log("bb",value);
		// const order = localStorage.getItem("order");
		this.setState({
			isEdit: value.item_info_id,
			// EditInput: this.state.EditInput,
		});
	};

	componentDidMount() {
		const orders = localStorage.getItem("order");
		console.log(orders);
	}

	render() {
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
								<th>Total</th>
							</tr>
							{JSON.parse(localStorage.getItem("order")).map((value, key) => (
								<>
									{console.log(value)}
									<tr>
										<td>{value.title}</td>
										<td>
											{this.state.isEdit == value.item_info_id ? (
												<input
													value={this.state.EditInput}
													min={this.state.EditInput}
													type="number"
													onChange={(e) =>
														// console.log(e.target.value)
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

						<div className={classes.btnGrids}>
							<Button variant="success">Submit</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default ViewOrderList;

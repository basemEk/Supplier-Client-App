import React, { Component } from "react";
import classes from "./ViewOrderList.module.css";
import { Button } from "react-bootstrap";


class ViewOrderList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: true,
			EditInput: "",
			isEdit: null,
			save: false
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


	SaveBtn = (event) => {
		const order = localStorage.getItem("order");
		// event.preventDefault();
		const item = {
			quantity: this.item_quantity,
			item_info_id: this.props.match.params.id,
		};
		this.setState({
			save: true
		})
        // this.setState({
		// 	isEdit: value.item_info_id,
		// 	// isEdit: e.target.value,
		// 	EditInput: value.quantity,
		// });

	};



	EditBtn = (value) => {
		// console.log("bb",value.item_info_id)
		this.setState({
			isEdit: value.item_info_id,
			EditInput: value.quantity,
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
														this.setState({ EditInput: e.target.value })
													}
												/>
											) : (
												value.quantity
											)}
										</td>
										<td>{value.price}</td>
										<td>{value.price * value.quantity}</td>
										<td className={classes.tdButton}>
											<div>
												<Button
													variant="primary"
													onClick={() => this.SaveBtn(value)}
												>
													Save
												</Button>
											</div>
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

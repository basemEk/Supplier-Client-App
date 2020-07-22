import React, { Component } from "react";
import classes from "./ViewOrderList.module.css";
import { Button } from "react-bootstrap";


class ViewOrderList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: true,
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
		});
	};

	
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
										<td>{value.quantity}</td>
										<td>{value.price}</td>
										<td>{value.price * value.quantity}</td>
										<td className={classes.tdButton}>
											<div>
												<Button variant="primary">Edit</Button>
											</div>
											<Button
												variant="danger"
												onClick={() => this.RemoveBtn(value.item_info_id)}
											>
												Remove
											</Button>
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
				{/* ${item.price_LBP}
        ${item.price_LBP * item.count} */}
			</div>
		);
	}
}

export default ViewOrderList;

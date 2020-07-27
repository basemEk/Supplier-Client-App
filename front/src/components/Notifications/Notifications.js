import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import classes from "./Notifications.module.css";
import axios from "axios";

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
		};
	}

	getSupplierInfo = (id) => {
		console.log(
			`${process.env.REACT_APP_BACKEND_URL}/api/order/history/details/${id}`
		);
		axios
			.get(
				`${process.env.REACT_APP_BACKEND_URL}/api/order/history/details/${id}`
			)
			.then((res) => {
				//console.log(res.data.data)
				// debugger;
				this.setState({ orders: res.data.data });
			});
	};

	componentDidMount = () => {
		this.getSupplierInfo(1);
	};

	render() {
		return (
			<>
				{localStorage.getItem("token") == null ? (
					this.props.history.push("/")
				) : (
					<>
						{this.state.orders.map((order) => {
							return (
								<div className={classes.notiDiv}>
									<h2 className={classes.h2}>Notifications</h2>
									<br />
									<br />
									<div className={classes.supplierInfo}>
										{/* <p>{this.state.supplierInfo}</p> */}
										<br />
										<p>Supplier Name: {order.supplier.supplier_name}</p>
										<br />
										<p>Supplier Email: {order.supplier.email}</p>
										<br />
										<p>Supplier Phone Number: {order.supplier.phone}</p>
										<br />
										<p>Supplier Company: {order.supplier.company}</p>
										<br />
									</div>

									<Table striped bordered hover>
										<thead>
											<tr>
												<th></th>
												<th>Available Items</th>
												<th>Quantity</th>
												<th>Message from Supplier</th>
											</tr>
										</thead>
										<tbody>
											{order.items.map((item) => {
												return (
													<tr>
														<td>{item.id}</td>
														<td>{item.available}</td>
														<td>{item.quantity}</td>
														<td></td>
													</tr>
												);
											})}
										</tbody>
									</Table>
									<Button variant="primary" className={classes.btn}>
										Confirm Order
									</Button>
								</div>
							);
						})}
					</>
				)}
			</>
		);
	}
}

export default Notifications;

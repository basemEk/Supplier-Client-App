import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import classes from "./OrderList.module.css";

class OrderList extends Component {
	render() {
		return (
			<>
				<div className={classes.notiDiv}>
					<h2 className={classes.h2}>Order List</h2>
					<br />
					<br />

					<Table striped bordered hover>
						<thead>
							<tr>
								<th></th>
								<th>Items Added</th>
								<th>Quantity</th>
								<th>Edit Items</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td>
									{/* <div className={classes.editDeleteBtns}>
									<Button variant="warning" className={classes.btn}>
										Confirm Order
									</Button>
									<Button variant="danger" className={classes.btn}>
										Confirm Order
									</Button>
									</div> */}
								</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</Table>
				</div>
			</>
		);
	}
}

export default OrderList;

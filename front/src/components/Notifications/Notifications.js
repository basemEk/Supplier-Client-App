import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import classes from "./Notifications.module.css";

class Notifications extends Component {
	render() {
		return (
			<>
				<div className={classes.notiDiv}>
					<h2 className={classes.h2}>Notifications</h2><br/><br/>

					<div className={classes.supplierInfo}>
					<p>Supplier Name:</p><br/>
					<p>Supplier Email:</p><br/>
					<p>Supplier Phone Number:</p><br/>
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
							<tr>
								<td>1</td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>2</td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>3</td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</Table>
					<Button variant="primary" className={classes.btn}>Confirm Order</Button>
				</div>
				
			</>
		);

		
	}
	
}

export default Notifications;

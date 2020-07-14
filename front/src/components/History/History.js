import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import classes from "./History.module.css";
import MyComponent from "../DatePicker/DatePicker";



class History extends Component {
	render() {
		return (
			<>
				<h2 className={classes.h2}>History</h2>
				<div className={classes.searchBar}>
					{/* <div className={classes.dateSearch}>
                    <label>Search by date:</label>
                 <input type="date"/>
                </div> */}
					<div>
						<MyComponent />
					</div>

					<div>
						<Form inline>
							<FormControl
								type="text"
								placeholder="insert invoice number"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</div>
				</div>

				<hr />
				<hr />

				<div className={classes.histoDiv}>
					<h3 className={classes.h3}>Order Invoice</h3>
					<div className={classes.supplierInfo}>
						<p>Order Date:</p>
						<br />
						<p>Supplier:</p>
						<br />
						<label>Invoice Number:</label>
						<input type="label" value="#1234" style={{ width: 80 }} readOnly />

						<br />
					</div>
					<br />

					<Table striped bordered hover>
						<thead>
							<tr>
								<th></th>
								<th>Ordered Items</th>
								<th>Quantity</th>
								<th>Price per unit</th>
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

					<div className={classes.total}>
						<table>
							<th>
								<h4>
									<b>Total</b>
								</h4>
							</th>
							<th>
								<input type="label" value="450000 LBP" readOnly />
							</th>
						</table>
					</div>
				</div>

				<hr />

				<div className={classes.histoDiv}>
					<h3 className={classes.h3}>Order Invoice</h3>
					<div className={classes.supplierInfo}>
						<p>Order Date:</p>
						<br />
						<p>Supplier:</p>
						<br />
						<label>Invoice Number:</label>
						<input type="label" value="#5678" style={{ width: 80 }} readOnly />

						<br />
					</div>
					<br />

					<Table striped bordered hover>
						<thead>
							<tr>
								<th></th>
								<th>Ordered Items</th>
								<th>Quantity</th>
								<th>Price per unit</th>
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

					<div className={classes.total}>
						<table>
							<th>
								<h4>
									<b>Total</b>
								</h4>
							</th>
							<th>
								<input type="label" value="380000 LBP" readOnly />
							</th>
						</table>
					</div>
				</div>
			</>
		);
	}
}

export default History;

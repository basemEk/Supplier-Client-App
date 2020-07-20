import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import classes from "./Notifications.module.css";
import axios from "axios";
import { Link } from "react-router-dom";


class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supplierInfo: null,
		};
	}
 
	getSupplierInfo = (id) => {
		console.log(`${process.env.REACT_APP_BACKEND_URL}/api/supplier/info/${id}`);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/supplier/info/${id}`)
			.then((res) => {
				console.log(res.data.data);
				this.setState({ supplierInfo: res.data.data });
			});
	};

	componentDidMount() {
		this.getSupplierInfo(this.props.match.params.id);
	}

	render() {
		return (
			<>
			    {this.state.supplierInfo !== null ? (

				 <div className={classes.notiDiv}>
					<h2 className={classes.h2}>Notifications</h2><br/><br/>
					<div className={classes.supplierInfo}>
					<p>{this.state.supplierInfo.supplier.name}</p><br/>
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
				) : null}

			</>
		);

		
	}
	
}

export default Notifications;

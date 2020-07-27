import React, { Component } from "react";
import classes from "./SupplierCode.module.css";
import { withRouter } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

// import styles from "./SupplierCode.less";

class SupplierCode extends Component {
	state = {
		type: "password",
		supCode: [],
		code: "",
		correct: false,
	};

	//fetching the data
	getSupplierCode = () => {
		const token = localStorage.getItem("token");
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/supplier/code`)
			.then((res) => {
				console.log(res.data.data);
				this.setState({ supCode: res.data.data });
			});
	};

	componentDidMount() {
		this.getSupplierCode();
	}


	btnAlert = () => {
		let correct = false;
		this.state.supCode.map((value) => {
			if (value.code == this.state.code) {
				correct = true;
			}
		});
		if (correct) {
			alert("Supplier Code Entered Successfully");
			this.props.history.push("/home");
		} else alert("Incorrect Supplier Code");
	};

	inputSupplierCode = (e) => {
		e.preventDefault();
		this.setState({
			code: e.target.value,
		});
	};

	render() {
		return (
			<>
				{localStorage.getItem("token") == null ? (
					this.props.history.push("/")
				) : (
					<div className={classes.h3Field}>
						<h3 className={classes.h3}>Enter Supplier Code</h3>
						<br />
						<div className={classes.passVisible}>
							<FormControl
								type={this.state.type}
								{...this.props}
								inputRef={(ref) => {
									this.input = ref;
								}}
								onChange={(e) => this.inputSupplierCode(e)}
							/>

							<br />

							<Button
								onClick={(e) => {
									e.preventDefault();
									this.btnAlert();
								}}
								className={classes.btn}
							>
								Click here
							</Button>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default withRouter(SupplierCode);

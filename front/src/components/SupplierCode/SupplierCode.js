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
	};

	//fetching the data
	getSupplierCode = () => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/supplier/code`)
			.then((res) => {
				this.setState({ type: res.data.data });
			});
	};

	showHide = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			type: this.state.type === "text" ? "password" : "text",
		});
		this.input.focus();
	};

	render() {
		return (
			<>
			{localStorage.getItem('token')==null?this.props.history.push('/'):(
				
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
							/>

							<span
								className={[
									classes.visibility,
									"flaticon-eye",
									this.state.type === "text"
										? classes.is_visible
										: classes.is_hidden,
								].join(" ")}
								onClick={this.showHide}
							></span>
							<br />
							<Button
								onClick={(e) => {
									e.preventDefault();
									this.getSupplierCode();
								}}
								variant="primary"
								className={classes.btn}
							>
								Enter
							</Button>
						</div>
					</div>
				)}
			</>
		);
	}
}


export default withRouter(SupplierCode);


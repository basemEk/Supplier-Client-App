import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classes from "./SignUp.module.css";
import axios from "axios";



class Validate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://127.0.0.1:8000/api/register", {
				name: this.state.firstName,
				email: this.state.email,
				password: this.state.password,
			})
			.then((res) => {
				console.log("here");
				localStorage.setItem("token", res.data.access_token);
				this.props.history.push("/");
			})
			.catch((err) => console.log(err));
	};

	handleChangeFirstName = (e) => {
		e.preventDefault();
		this.setState({
			firstName: e.target.value,
		});
	};
	handleChangeLastName = (e) => {
		e.preventDefault();
		this.setState({
			lastName: e.target.value,
		});
	};
	handleChangeEmail = (e) => {
		e.preventDefault();
		this.setState({
			email: e.target.value,
		});
	};
	handleChangePassword = (e) => {
		e.preventDefault();
		this.setState({
			password: e.target.value,
		});
	};
	handleChangePhone = (e) => {
		e.preventDefault();
		this.setState({
			phone: e.target.value,
		});
	};

	render() {
		return (
			<>
				<div className={classes.signupWrapper}>
					<form onSubmit={this.handleSubmit} className={classes.signupForm}>
						<h2 className={classes.signUp}>Sign Up</h2>
						<div className={classes.formGroup}>
							<label>First Name:</label>
							<br />
							<input
								style={{ width: "150%" }}
								type="text"
								value={this.state.firstName}
								className={classes.formControl}
								placeholder="First name"
								onChange={(e) => this.handleChangeFirstName(e)}
							/>
							<div style={{ color: "red", fontSize: 12 }}>
								{this.state.firstNameError}
							</div>
							<br />
						</div>
						<div className={classes.formGroup}>
							<label>Last Name:</label>
							<br />
							<input
								style={{ width: "150%" }}
								type="text"
								value={this.state.lastName}
								className={classes.formControl}
								placeholder="Last name"
								onChange={(e) => this.handleChangeLastName(e)}
							/>
							<div style={{ color: "red", fontSize: 12 }}>
								{this.state.lastNameError}
							</div>
							<br />
						</div>
						<label>Email Address:</label>
						<br />
						<input
							style={{ width: "150%" }}
							type="text"
							value={this.state.email}
							className={classes.formControl}
							placeholder="example@email.com"
							onChange={(e) => this.handleChangeEmail(e)}
						/>
						<div style={{ color: "red", fontSize: 12 }}>
							{this.state.emailError}
						</div>
						<br />

						<label>Password:</label>
						<br />
						<input
							style={{ width: "150%" }}
							type="password"
							value={this.state.password}
							className={classes.formControl}
							placeholder="Enter password"
							onChange={(e) => this.handleChangePassword(e)}
						/>
						<div style={{ color: "red", fontSize: 12 }}>
							{this.state.passwordError}
						</div>
						<br />

						{/* 
                        <label>Confirm Password:</label>
                        <br />
                        <input
                            style={{ width: "150%" }}
                            type="password"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            className={classes.formControl}
                            placeholder="Retype you password"
                            onChange={this.handleChange}
                        /> */}
						{/* <div style={{ color: "red", fontSize: 12 }}>
                            {this.state.confirmPasswordError}
                        </div> */}
						<br />

						<label>Phone Number</label>
						<br />
						<input
							style={{ width: "150%" }}
							type="text"
							name="phone"
							value={this.state.phone}
							placeholder="example: (+961)-03-456-789"
							className={classes.formNumber}
							onChange={(e) => this.handleChangePhone(e)}
						/>
						<div style={{ color: "red", fontSize: 12 }}>
							{this.state.phoneError}
						</div>
						<br />

						<input type="submit" value="Submit" className={classes.btn} />

						<p className="forgot-password text-right">
							Already registered <Link to="/">Sign in?</Link>
						</p>
					</form>
				</div>
			</>
		);
	}
}

export default withRouter(Validate);

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classes from "./SignIn.module.css";
import axios from 'axios'


class Login extends Component {
constructor(props){
	super(props)
	this.state = {
		email: "",
		password: "",
		emailError: "",
		passwordError: "",
	};
}
	handlechange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	validate = () => {
		let emailError = "";
		let passwordError = "";

		if (!this.state.email.includes("@")) {
			emailError = "please enter your email";
		}

		if (!this.state.password) {
			passwordError = "please enter your password";
		}

		if (emailError || passwordError) {
			this.setState({ emailError, passwordError });
			return false;
		}
		return true;
	};

	handleSubmit = () => {
		console.log(this.state)
		const isValid = this.validate();
		if (isValid){
		axios.post('http://127.0.0.1:8000/api/login', {
			email:this.state.email,
			password:this.state.password
		}).then((res)=>{
			localStorage.setItem('token', res.data.access_token)
			this.props.history.push('/supplier-code')

		})
	}
	};

	render() {
		return (
			<>
				<div className={classes.signinWrapper}>
					<form
						onSubmit={this.handleSubmit}
						className={classes.signinForm}
					>
						<h2 className={classes.signIn}>Sign In</h2>
						<label>Email address:</label>
						<br />
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handlechange}
							className={classes.formControl}
							placeholder="Enter email"
						/>
						<br />
						<br />
						<div style={{ color: "red", fontSize: 12 }}>
							{this.state.emailError}
						</div>

						<label>Password:</label>
						<br />
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handlechange}
							className={classes.formControl}
							placeholder="password"
						/>

						<br />
						<div style={{ color: "red", fontSize: 12 }}>
							{this.state.passwordError}
						</div>

						<input
							type="checkbox"
							className={classes.customControlInput}
							id="customCheck1"
						/>
						<label
							className={classes.customControlLabel}
							htmlFor="customCheck1"
						>
							Remember me
						</label>
						<br />
						<br />

						<input
							type="submit"
							value="Submit"
							className={classes.btn}
							onClick={(e) => {
								e.preventDefault();
								this.handleSubmit();
							}}
						/>

						<p className="forgot-password text-right">
							<p>
								<br />
								If you are new to the Application,{" "}
								<Link to="/sign-up">Sign up here</Link>
							</p>
							Forgot <a href="#">password?</a>
						</p>
					</form>
				</div>
			</>
		);
	}
}


export default withRouter(Login);
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";

export default class Validate extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        phoneError: "",
        passwordError: "",
        confirmPasswordError: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let phoneError = "";
        let passwordError = "";
        let confirmPasswordError = "";

        if (!this.state.firstName) {
            firstNameError = "first name can't be empty";
        }

        if (!this.state.lastName) {
            lastNameError = "last name can't be empty";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email";
        }

        if (isNaN(this.state.phone)) {
            phoneError = "please type your phone number";
        }

        if (!this.state.password) {
            passwordError = "password can't be empty";
        }

        if (!this.state.confirmPassword) {
            confirmPasswordError = "please retype your password";
        }

        if (
            firstNameError ||
            lastNameError ||
            emailError ||
            phoneError ||
            passwordError ||
            confirmPasswordError
        ) {
            this.setState({
                firstNameError,
                lastNameError,
                emailError,
                phoneError,
                passwordError,
                confirmPasswordError,
            });
            return false;
        }

        return true;
    };

    handleSubmit = (event) => {
        const isValidate = this.validate();
        if (isValidate) {
            console.log(this.state);
            this.setState(this.state);
        }
    };

    render() {
        return (
            <>
                <div className={classes.signupWrapper}>
                    <form
                        onSubmit={(event) => this.handleSubmit(event)}
                        className={classes.signupForm}
                    >
                        <h2 className={classes.signUp}>Sign Up</h2>
                        <div className={classes.formGroup}>
                            <label>First Name:</label>
                            <br />
                            <input
                                style={{ width: "150%" }}
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                className={classes.formControl}
                                placeholder="First name"
                                onChange={this.handleChange}
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
                                name="lastName"
                                value={this.state.lastName}
                                className={classes.formControl}
                                placeholder="Last name"
                                onChange={this.handleChange}
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
                            name="email"
                            value={this.state.email}
                            className={classes.formControl}
                            placeholder="example@email.com"
                            onChange={this.handleChange}
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
                            name="password"
                            value={this.state.password}
                            className={classes.formControl}
                            placeholder="Enter password"
                            onChange={this.handleChange}
                        />
                        <div style={{ color: "red", fontSize: 12 }}>
                            {this.state.passwordError}
                        </div>
                        <br />
                        

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
                        />
                        <div style={{ color: "red", fontSize: 12 }}>
                            {this.state.confirmPasswordError}
                        </div>
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
                            onChange={this.handleChange}
                        />
                        <div style={{ color: "red", fontSize: 12 }}>
                            {this.state.phoneError}
                        </div>
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
                            Already registered <Link to="/">Sign in?</Link>
                        </p>
                    </form>
                </div>
            </>
        );
    }
}

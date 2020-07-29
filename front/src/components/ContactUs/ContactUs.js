import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./ContactUs.module.css";
import "../ContactUs/ContactUs.module.css";
import { Button } from "react-bootstrap";



class ContactUs extends Component {
	render() {
		return (
			<>
			{localStorage.getItem('token')==null?this.props.history.push('/'):(
				<div className={classes.contactUsPage}>
					<section className="bg-contact bg-section" id="contact">
						<div className="container-fluid">
							<h1 className="container-h1">Contact us</h1>

							<div className="fields">
								<div className="row">
									<div className="col-md-6 col-sm-6 contact-right">
										<form
											noValidate
											action="mailto:anttnew@gmmmail.com"
											name="frm"
											method="post"
											className={classes.contactForm}
										>
										
											<div className="form-group has-feedback">
												<label className="sr-only">Name:</label>
												<input
													type="text"
													name="surname"
													className="form-control"
													placeholder="Enter full name"
													required
												/>
											</div>
											<div className="form-group has-feedback">
												<label className="sr-only">Email:</label>
												<input
													type="email"
													name="email"
													className="form-control"
													placeholder="Example@gmail.com"
													required
												/>
											</div>
											<div className="form-group">
												<label
													className="sr-only"
													name="comment"
													htmlFor="comment"
												>
													Comment:
												</label>
												<textarea
													className="form-control"
													rows={5}
													id="comment"
													placeholder="Type your message here.."
													defaultValue={""}
												/>
											</div>
											<div className={classes.btnContactGrids}>
												<Button
													type="submit"
													name="submit"
													defaultValue="Send"
													variant="success"
												>Submit</Button>
												<Button type="reset" defaultValue="Reset">Reset</Button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			)} 

			</>
		);
	}
}

export default withRouter(ContactUs);
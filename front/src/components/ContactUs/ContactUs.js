import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./ContactUs.module.css";
import "../ContactUs/ContactUs.module.css";


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
												<label className="sr-only">First name:</label>
												<input
													type="text"
													name="name"
													className="form-control"
													placeholder="First name"
													required
												/>
											</div>
											<div className="form-group has-feedback">
												<label className="sr-only">Last name:</label>
												<input
													type="text"
													name="surname"
													className="form-control"
													placeholder="Last name"
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
													placeholder="Description"
													defaultValue={""}
												/>
											</div>
											<div className="contact-buttons pull-left">
												<input
													type="submit"
													name="submit"
													defaultValue="Send"
												/>
												<input type="reset" defaultValue="Reset" />
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
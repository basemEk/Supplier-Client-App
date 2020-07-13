import React, { Component } from "react";
import classes from "./Footer.module.css";

class Footer extends Component {
	render() {
		return (
			<>
				<div className={classes.footerDiv}>
					<p className={classes.cpText}>
						© Copyright 2020 Powered by Bassem Kreidly. All rights reserved.
					</p>
				</div>
			</>
		);
	}
}

export default Footer;

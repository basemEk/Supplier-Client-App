import React, { Component } from "react";
import classes from "./Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <>
                <div className={classes.footerDiv}>
                <p className={classes.copyRights}>&copy; 2020 All rights reserved - Powered by Bassem Kreidly </p>
                </div>
                </>
        
        );
    }
}

export default Footer;

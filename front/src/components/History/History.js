import React, { Component } from "react";
import classes from "./History.module.css";

class History extends Component {
    render() {
        return (
            <>
                <h2>History</h2>
                <br />
                <input
                    type="date"
                   
                ></input>
                <p>Search by Date:</p>
                <br />
                <p>Invoice:</p>
            </>
        );
    }
}

export default History;

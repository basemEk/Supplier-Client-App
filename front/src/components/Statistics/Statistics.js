import React, { useState } from "react"; //usinig react hooks
import { Bar } from "react-chartjs-2";
import classes from "./Statistics.module.css";
import Button from "react-bootstrap/Button";

const getItems = () => {
	let a = JSON.parse(localStorage.getItem("order"));
	let temp = [];
	if (a !== null) {
		a.map((value, key) => temp.push(value.title));
	}
	return temp;
};

const getQuantity = () => {
	let a = JSON.parse(localStorage.getItem("order"));
	let temp = [];
	if (a !== null) {
		a.map((value, key) => temp.push(value.quantity));
	}
	return temp;
};

const state = {
	labels: getItems(),

	datasets: [
		{
			label: "graph",

			backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],

			hoverBackgroundColor: [
				"#501800",

				"#4B5000",

				"#175000",

				"#003350",

				"#35014F",
			],

			data: getQuantity(),
		},
	],
};

function Reports() {
	return (
		<div className={classes.reportContainer}>
			{console.log(getItems())}
			<div className={classes.chartsForm}>
				<div id="form-report">
					<h2>Items Movements</h2>
					<br />

					<div>
						<select name="shape" id="charts-list">
							<option value="monthly">Monthly</option>
							<option value="yearly">Yearly</option>
						</select>

						<span>
							<Button variant="success" id="ADD-btn">
								Set
							</Button>
						</span>
					</div>
				</div>
			</div>

			<div>
				<div
					style={{
						position: "relative",
						width: 650,
						height: 800,
						margin: 75,
					}}
				>
					<Bar
						data={state}
						options={{
							title: {
								display: true,
								text: "ordered items",
								fontSize: 20,
							},
							legend: {
								display: true,
								position: "right",
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Reports;

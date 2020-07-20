import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./suggest.css";

class Suggest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Suggest a Product",
			act: 0,
			index: "",
			datas: [],
		};
	}

	componentDidMount() {
		this.refs.name.focus();
	}

	fSubmit = (e) => {
		e.preventDefault();
		console.log("insert");

		let datas = this.state.datas;
		let name = this.refs.name.value;

		if (this.state.act === 0) {
			//new
			let data = {
				name,
			};
			datas.push(data);
		} else {
			//update
			let index = this.state.index;
			datas[index].name = name;
		}

		this.setState({
			datas: datas,
			act: 0,
		});

		this.refs.myForm.reset();
		this.refs.name.focus();
	};

	fRemove = (i) => {
		let datas = this.state.datas;
		datas.splice(i, 1);
		this.setState({
			datas: datas,
		});

		this.refs.myForm.reset();
		this.refs.name.focus();
	};

	fEdit = (i) => {
		let data = this.state.datas[i];
		this.refs.name.value = data.name;

		this.setState({
			act: 1,
			index: i,
		});

		this.refs.name.focus();
	};

	render() {
		let datas = this.state.datas;
		return (
			<div className="App">
				<h2>{this.state.title}</h2>
				<form ref="myForm" className="myForm">
					<input
						type="text"
						ref="name"
						placeholder="write your suggestion here"
						className="formField"
					/>
					<Button variant="success" onClick={(e) => this.fSubmit(e)} className="myButton">
						submit
					</Button>
				</form>
				<pre>
					{datas.map((data, i) => (
						<li key={i} className="myList">
							{i + 1}. {data.name}, {data.address}
							<Button
								variant="danger"
								onClick={() => this.fRemove(i)}
								className="myListButton"
							>
								remove{" "}
							</Button>
							<Button
								variant="primary"
								onClick={() => this.fEdit(i)}
								className="myListButton"
							>
								edit{" "}
							</Button>
						</li>
					))}
				</pre>
			</div>
		);
	}
}

export default Suggest;

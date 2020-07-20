import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import classes from "./ItemInfo.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

class ItemInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: null,
		};
	}

	getProductInfo = (id) => {
		console.log(`${process.env.REACT_APP_BACKEND_URL}/api/item/info/${id}`);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/item/info/${id}`)
			.then((res) => {
				this.setState({ itemData: res.data.data });
			});
	};

	componentDidMount() {
		this.getProductInfo(this.props.match.params.id);
	}

	addToCart=()=>{
        this.props.OrederID(this.state.data);
        this.props.history.push("/add-to-cart");
        }

	render() {
		return (
			<>
				<div className={classes.imgproductInfo}>
					{this.state.itemData !== null ? (
						<>
							<div>
								<img
									src={
										process.env.REACT_APP_BACKEND_URL +
										`/uploads/products/${this.state.itemData.image}`
									}
									className={classes.img}
								/>
							</div>
							<div className={classes.itemInfoContainer}>
								<h2 className={classes.h2}>{this.state.itemData.title}</h2>
								<p>{this.state.itemData.description}</p>

                                <div>
                                <h4 className={classes.h4}>{this.state.itemData.price_lbp}</h4>
                                <span className={classes.priceSpan}>LBP</span>
                                </div>
								
								<br />
								<br />

                                <div>
								<p>Minimum Ordered Quantity:</p>
								<input
									type="text"
									readOnly
                                    value={this.state.itemData.minimum_quantity}
                                    className={classes.readonlyWidth} 
								/>
                                <span>pcs</span>
                                </div>
								<br />
								<br />
								<div className={classes.gridBtns}>
                                <div>
									<Button onClick={() => this.addToCart()}>Add to Cart</Button>
								</div>
									<Link to="/home">
										<div>
											<Button variant="primary">Continue Shopping</Button>
										</div>
									</Link>									
								</div>
							</div>
						</>
					) : null}
				</div>
			</>
		);
	}
}

export default ItemInfo;

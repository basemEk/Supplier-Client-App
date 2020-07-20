import React, { Component } from "react";
import "./ViewOrderList.module.css";


class ViewOrderList extends Component {
	render() {
		return (
			<>
				<h2>Shopping Cart</h2>
				<table>
					<tr>
						<th>Name</th>
						<th>Count</th>
						<th>Price</th>
						<th>Total</th>
					</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					
				</table>
        {/* ${item.price_LBP}
        ${item.price_LBP * item.count} */}
			</>
		);
	}
}

export default ViewOrderList;

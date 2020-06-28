import React, { Component } from 'react';
import classes from './ItemInfo.module.css';


class ItemInfo extends Component {
	render() {
		return (
			<>
<div>
<img src={process.env.PUBLIC_URL + '/assets/29-hero.jpg'}/>
</div>

<div>
	<p>title</p>
	<p>description</p>
	<p>price</p>
	<p>minimum price</p>
</div>
			</>
		);
	}
}

export default ItemInfo;


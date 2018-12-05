import React, { Component } from "react";
import "../../App.less";

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navState: this.props.visible,
			navLinks: ["Home", "Art", "Code", "About"]
		};
	}

	navigate = e => {
		console.log(e);
	};

	render() {
		const { navState, navLinks } = this.state;
		console.log("navState", navState);

		const genNavItem = title => (
			<li className="pointer" onClick={this.navigate}>
				{title}
			</li>
		);
		return (
			<div className={`navigation ${navState}`}>
				<div className="nav-head">
					<img src={require("../../images/OCAT-header-round.svg")} />
				</div>
				<ul>{navLinks.map(link => genNavItem(link))}</ul>
			</div>
		);
	}
}

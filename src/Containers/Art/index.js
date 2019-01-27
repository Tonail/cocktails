import React from "react";
import ReactDOM from "react-dom";
import "./art.less";

export default class Art extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className='width-full fill-grey'>Art</div>;
	}
}

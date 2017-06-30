import React from 'react';
import "./index.css";

export default class Index extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="fd-font-light">
				<span className="lignt-txt">{this.props.test}</span>
				<div className="lignt-bgc"></div>
				<div className="lignt-ani"></div>
			</div>
			)
	}
}

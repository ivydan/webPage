// require("./index.css");
// //style-loader 讲css代码以style标签格式插入到页面上从而生效，
// //css-loader 检查css代码代码中的import语句找到依赖并合并
// document.body.appendChild(document.createElement("div"));

import React from 'react';
import ReactDom from 'react-dom';

import Font from '../components/fontLight/index';
import Wood from '../components/wood/index';

import "./index.css";

class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="container">
				<Font test="FD-TEST-TTT" />
				<Wood />
				<div className="fd-flow">
					<span className="flow-comm flow-c">css</span>
					<span className="flow-comm flow-a">abc</span>
					<span className="flow-comm flow-x">xml</span>
				</div>
			</div>
		)
	}
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);
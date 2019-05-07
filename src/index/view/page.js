// require("./index.css");
// //style-loader 讲css代码以style标签格式插入到页面上从而生效，
// //css-loader 检查css代码代码中的import语句找到依赖并合并
// document.body.appendChild(document.createElement("div"));

import React, { Component } from 'react';
import _ from 'lodash';
import Common from './chapter1';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="container">
				page1
				<pre>
					<button onClick={(e) => {
						Common.hide(e.target, true);
						Common.debug('hide button 1')
					}}>Hide1</button>
				</pre>
				<pre>
					<button onClick={(e) => {
						Common.hide(e.target);
						Common.debug('hide\n button 2\
						test test\
						Over')
					}}>Hide2</button>
				</pre>
			</div>
		)
	}
}
/**
 * @Page
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Page from './view/page';
// import Chapter1 from './view/chapter1';
import "./index.less";

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Page />, app);


// import _ from 'lodash';

// function component() {
//     var element = document.createElement('div');

//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());
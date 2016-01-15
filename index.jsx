require('./style/style.css');
var ReactDOM = require('react-dom');
var React = require('react');
var data = require('./data/finalData.js');

var Index = require('./components/index.jsx');

ReactDOM.render(<Index data={data}/>, document.getElementById('example'));


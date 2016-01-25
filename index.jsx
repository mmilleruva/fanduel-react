require('./style/style.css');
var ReactDOM = require('react-dom');
var React = require('react');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link


var Index = require('./components/pagePlayerList.jsx');
var PlayerDetail = require('./components/pagePlayerDetail.jsx');


ReactDOM.render(
 <Router onUpdate={function(){ window.scrollTo(0, 0)}}>
    <Route path="/" component={Index}>
    </Route>
    <Route path="/players/:id" component={PlayerDetail} />
  </Router>
  , document.getElementById('example'));


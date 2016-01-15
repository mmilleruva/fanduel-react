// main.js
var React = require('react');
var PlayerList = require('./playerList.jsx');
module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
        return <div>
          <h1>
          Player List
          </h1>
          <PlayerList data={this.props.data}/>
        </div>
    }
})

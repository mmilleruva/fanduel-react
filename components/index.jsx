// main.js
var React = require('react');
var PlayerList = require('./playerList.jsx');
var TeamSummary = require('./teamSummary.jsx');
var data = require('../data/finalData.js');

module.exports = React.createClass({
    displayName: 'HelloReact',

    getInitialState: function() {
      return {
        data: data,
        players: []
      }
    },
    render: function(){
        return <div>
          <h1>
          Player List
          </h1>
          <div className="row">
            <div className="col s8">
              <PlayerList data={this.state.data}/>
            </div>
            <div className="col s4">
              <TeamSummary players={this.state.players} />
            </div>
          </div>
        </div>
    }
})

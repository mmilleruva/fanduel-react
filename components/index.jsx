// main.js
var React = require('react');
var PlayerList = require('./playerList.jsx');
var TeamSummary = require('./teamSummary.jsx');
var data = require('../data/finalData.js');

var playerStore = require('../stores/playerStore.js');

function getPlayerState(){
  return {
        data: playerStore.getAll(),
        players: playerStore.getAllOnTeam() || []
  }
}

module.exports = React.createClass({
    displayName: 'HelloReact',

    getInitialState: function() {
      return getPlayerState();
    },

    componentDidMount: function() {
      playerStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      playerStore.removeChangeListener(this._onChange);
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
              <TeamSummary salary={60000} players={this.state.players} />
            </div>
          </div>
        </div>
    },

    _onChange: function() {
    this.setState(getPlayerState());
  }
})

// main.js
var React = require('react');
var playerStore = require('../stores/playerStore.js');
var GameStatsList = require('./gameStatsList.jsx');
var PlayerStatusBadge = require('./playerStatusBadge.jsx');

function getPlayerState(nflId){
  return {
        player: playerStore.getPlayerByNflId(nflId),
  }
}

module.exports = React.createClass({
    displayName: 'HelloReact',

    getInitialState: function() {
      return getPlayerState(this.props.params.id);
    },

    componentDidMount: function() {
      playerStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      playerStore.removeChangeListener(this._onChange);
    },


    render: function(){
        var player = this.state.player;
        console.log(player);
        return (<div className="row">
          <div className="col s12">
            <h1>
              {player.name}
              &nbsp;
              <span className="position">
                {player.position}
              </span>
              &nbsp;
              <PlayerStatusBadge status={player.status} />

            </h1>
          </div>
              <h4>{player.team}</h4>
              <h4>{player.salaryString}</h4>

              <GameStatsList games={player.gameStats}/>
          </div>);
    },
    _onChange: function() {
      this.setState(getPlayerState());
    }
})


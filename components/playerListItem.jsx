// main.js
var React = require('react');
var PlayerActions = require('../actions/playerActions.js');

module.exports = React.createClass({
    displayName: 'PlayerListItem',
    render: function(){
      var player = this.props.player;

      var addRemove = (<a href="#" onClick={this._addPlayer} className="green-text accent-4">Add Player</a>);
      if (player.added) {
        addRemove = (<a href="#" onClick={this._removePlayer} className="red-text accent-4">Remove Player</a>)
      };


        return (
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">
                {player.name}
                &nbsp;
                <span className="position">
                  {player.position}
                </span>

              </h2>
              <div className="details">
                <h4>{player.team}</h4>
                <h4>{player.salaryString}</h4>
                <h4> Projected: {player.regression.expected.toFixed(1)}</h4>

              </div>
            </div>
            <div className="card-action">
                {addRemove}
              </div>
          </div>
        );
    },

  _addPlayer: function() {
    PlayerActions.addPlayer(this.props.player);
  },

  _removePlayer: function() {
    PlayerActions.removePlayer(this.props.player);
  }
})


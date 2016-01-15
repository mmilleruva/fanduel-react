// main.js
var React = require('react');


module.exports = React.createClass({
    displayName: 'TeamSummary',
    render: function(){

      var playerNodes = this.props.players.map(function(player) {
        return <div> {player.name} </div>
      });
      return <div className="card team-summary">
       <div className="card-content">
          <div className="card-title">
            Team Summary
          </div>

          <div className="card-content">
            {playerNodes}
          </div>
        </div>
      </div>
    }
})

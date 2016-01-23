// main.js
var React = require('react');
var playerHelpers = require('../data-helpers/playerHelpers.js')

module.exports = React.createClass({
    displayName: 'TeamSummary',
    render: function(){

      var playerNodes = this.props.players.map(function(player) {
        return <div key={player.nflId}> {player.name} &nbsp; {player.position}</div>
      });

      var remainingSalary = this.props.salary - playerHelpers.totalSalary(this.props.players);
      return <div className="card team-summary">
         <div className="card-content">
            <div className="card-title">
              Team Summary
            </div>

            <div className="card-content">
              {playerNodes}
            </div>

          </div>
          <div className="card-action">
            Salary Remaining: ${remainingSalary}
          </div>
      </div>
    }
})

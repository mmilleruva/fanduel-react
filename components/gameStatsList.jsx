// main.js
var React = require('react')
var PlayerListItem = require('./playerListItem.jsx');

module.exports = React.createClass({
    displayName: 'GameStatsList',
    render: function(){
      var gameNodes = this.props.games.map(function(game) {

        return (
          <tr>
                <td>{game.gameStarted}</td>
                <td>{game.rushYD}</td>
                <td>{game.rushTD}</td>
                <td>{game.rec}</td>
                <td>{game.recYD}</td>
                <td>{game.recTD}</td>
                <td>{game.fumbles}</td>
                <td>{game.passYD}</td>
                <td>{game.passTD}</td>
                <td>{game.INT}</td>
                <td>{game.score}</td>
                <td>{game.fantasyPoints.toFixed(1)}</td>
            </tr>
        );
    });
        return(
        <table className="striped responsive-table">
          <thead>
            <tr>
                <th>Started</th>
                <th>Rush YD</th>
                <th>Rush TD</th>
                <th>Receptions</th>
                <th>Rec YD</th>
                <th>Rec TD</th>
                <th>Fumbles</th>
                <th>Pass YD</th>
                <th>Pass TD</th>
                <th>INT</th>
                <th>Team Score</th>
                <th>Fantasy Points Scored</th>
            </tr>
          </thead>

          <tbody>
            {gameNodes}
          </tbody>
      </table>
      )
    }
})

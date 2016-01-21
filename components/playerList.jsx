// main.js
var React = require('react')
var PlayerListItem = require('./playerListItem.jsx');

module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
      var playerNodes = this.props.data.map(function(player) {

        return (
          <PlayerListItem key={player.nflId} player={player}/>
        );
    });
        return <div>
          {playerNodes}
        </div>
    }
})

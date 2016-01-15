// main.js
var React = require('react')

module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
      var playerNodes = this.props.data.map(function(player) {

        var addRemove = (<a href="#" className="green-text accent-4">Add Player</a>);
        if (player.salary > 9000) {
          addRemove = (<a href="#" className="red-text accent-4">Remove Player</a>)
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
    });
        return <div>
          {playerNodes}
        </div>
    }
})

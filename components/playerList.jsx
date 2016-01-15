// main.js
var React = require('react')

module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
      var playerNodes = this.props.data.map(function(player) {
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
              <h3>{player.salaryString}</h3>
              <h3>{player.team}</h3>
            </div>
          </div>
          <div className="card-action">
              <a href="#">View Player Details</a>
            </div>
        </div>
      );
    });
        return <div className="col s12 m6">
          {playerNodes}
        </div>
    }
})

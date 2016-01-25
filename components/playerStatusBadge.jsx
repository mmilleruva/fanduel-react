// main.js
var React = require('react')
var PlayerListItem = require('./playerListItem.jsx');

module.exports = React.createClass({
    displayName: 'HelloReact',

    render: function(){
      var result = (<span></span>);
      switch (this.props.status){
        case 'P':
          result = (<span className="chip white-text light-green">PROBABLE</span>);
          break;

        case 'Q':
          result = (<span className="chip white-text yellow accent-3">QUESTIONABLE</span>);
          break;

        case 'O':
          result = (<span className="chip white-text red accent-4">OUT</span>);
          break;

        case 'IR':
          result = (<span className="chip white-text red accent-4  ">INJURED RESERVE</span>);
          break;

        default:
      }


      return result;
    }
});

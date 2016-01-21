var AppDispatcher = require('../dispatcher/appDispatcher');
var PlayerConstants = require('../constants/playerConstants');

var PlayerActions = {
  addPlayer: function(player){
    AppDispatcher.dispatch({
      actionType: PlayerConstants.PLAYER_ADD,
      player: player
    });
  },

  removePlayer: function(player){
    AppDispatcher.dispatch({
      actionType: PlayerConstants.PLAYER_REMOVE,
      player: player
    });
  }
}

module.exports = PlayerActions;

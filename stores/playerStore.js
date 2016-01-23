var _ = require('lodash');
var players = require('../data/finalData.js');
var AppDispatcher = require("../dispatcher/appDispatcher.js");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var playerConstants = require('../constants/playerConstants.js');

var CHANGE_EVENT = 'change';

players = _.filter(players, function(curPlayer){
  return curPlayer.nflId;
});

function findPlayer(player){
  return _.find(players, function(curPlayer){
    return player.name == curPlayer.name
      && player.team == curPlayer.team;
  });
}

function findPlayersOnTeam() {
  return _.filter(players, {'added': true});
}


function addPlayer(player){
  var selectedPlayer = findPlayer(player);
  selectedPlayer.added = true;
}

function removePlayer(player){
  var selectedPlayer = findPlayer(player);
  selectedPlayer.added = false;
}

var PlayerStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return players;
  },

  getAllOnTeam: function() {
    return findPlayersOnTeam();
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});


AppDispatcher.register(function(action){
  switch(action.actionType){
    case playerConstants.PLAYER_ADD:
      addPlayer(action.player);
      PlayerStore.emitChange();
      break;

    case playerConstants.PLAYER_REMOVE:
      removePlayer(action.player);
      PlayerStore.emitChange();
      break;

  }
});

module.exports = PlayerStore;

var _ = require("lodash");

module.exports = {
  totalSalary: function(players){
    debugger;
    var total = _.sumBy(players, function(player){
      debugger;
      return player.salary;
    });
    if (total) {
      return total;
    };
    return 0;
  }
}

var _ = require("lodash");

module.exports = {
  totalSalary: function(players){
    var total = _.sumBy(players, function(player){
      return player.salary;
    });
    if (total) {
      return total;
    };
    return 0;
  }
}

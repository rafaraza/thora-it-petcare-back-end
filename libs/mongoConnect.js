/**
 * [mongoose description]
 * @type {[type]}
 */
var mongoose   = require('mongoose');
var single_connection;
var env_url = {
  "test": "mongodb://localhost/petcare-auto-test"
};

module.exports = function() {
  var url = env_url[process.env.NODE_ENV || "development"];

  if(!single_connection) {
	  single_connection = mongoose.connect(url);
	}

  return single_connection;
};

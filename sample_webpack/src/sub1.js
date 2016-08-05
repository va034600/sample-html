var $ = require("jquery");

module.exports = function(message) {
  document.write("aa-" + message);
  $("#test-box").html("ccc2");
};
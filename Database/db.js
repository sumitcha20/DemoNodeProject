
var mongoose = require('mongoose');

/**  MongoDB Connection  **/
mongoose.connect("mongodb://TFT:tftus123@host:27017/CRUD");
module.exports = {mongoose};

var mongoose = require('mongoose');

var RecordSchema = new mongoose.Schema({
  Title: String,
  Artist: String,
  Year: String,
  checkedOut: String,
  borrower: String
});

module.exports = mongoose.model('Record', RecordSchema);

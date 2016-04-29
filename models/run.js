var mongoose = require('mongoose');

var runSchema = new mongoose.Schema({
  date: String,
  time: String,
  distance: Number,
  location: String,
  difficulty: Number,
  image: String
});

var Run = mongoose.model('Run', runSchema);

// Make this available to our other files
module.exports = Run;

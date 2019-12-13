const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema({
  name: { type: String, require: true },
  score: { type: String, require: true },
  time: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("score", ScoreSchema);

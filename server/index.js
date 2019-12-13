const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const Score = require("./models/score.model");

app.use(cors);

app.get("/:game", async (req, res) => {
  try {
    const scores = await Score.find({ game: req.params.game });
    res.json(scores);
  } catch (err) {
    res.json({ message: `Error: ${err}` });
  }
});

app.post("/", async (req, res) => {
  try {
    const score = new Score({
      date: Date.now(),
      name: req.body.name,
      score: req.body.score,
      game: req.body.game
    });
    const savedScore = score.save();
    jes.json(savedScore);
  } catch (err) {
    res.json({ message: `Error: ${err}` });
  }
});

mongoose.connect(
  process.env.DB_CONN,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected to db");
  }
);

app.listen(port, () => {
  console.log("listening at port " + port);
});

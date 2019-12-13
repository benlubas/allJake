const router = require("express").Router();
const Score = require("./../models/score.model");

router.get("/", async (req, res) => {
  try {
    const scores = await Score.find();
    res.json(scores);
  } catch (err) {
    res.json({ message: `Error: ${err}` });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const scores = await Score.findById(req.params.id);
    res.json(scores);
  } catch (err) {
    res.json({ message: `Error: ${err}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const score = new Score({
      date: Date.now(),
      name: req.body.name,
      score: req.body.score
    });
    const savedScore = score.save();
    jes.json(savedScore);
  } catch (err) {
    res.json({ message: `Error: ${err}` });
  }
});

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
  const feedbackData = req.body;

  pool
    .query(queryText, [
      feedbackData.feeling,
      feedbackData.understanding,
      feedbackData.support,
      feedbackData.comments,
    ])
    .then((responseDB) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;

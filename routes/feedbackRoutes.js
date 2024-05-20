const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const pool = require('../model/helper');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'vademos'
  });

  db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });

router.post('/api/feedback', async (req, res) => {
  const { usabilityMap, usabilityPredictionTool, additionalComments, overallExperience, featureRequests } = req.body;
  
  try {
    const sql = `
      INSERT INTO feedback (usabilityMap, usabilityPredictionTool, additionalComments, overallExperience, featureRequests)
      VALUES (?, ?, ?, ?, ?)
    `;
    await pool.query(sql, [usabilityMap, usabilityPredictionTool, additionalComments, overallExperience, featureRequests]);
    res.status(200).send('Feedback submitted successfully');
  } catch (error) {
    console.error('Failed to insert feedback:', error);
    res.status(500).send('Failed to submit feedback');
  }
});

module.exports = router;

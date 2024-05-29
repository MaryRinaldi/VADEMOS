const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const pool = require('../model/helper');

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true
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

var express = require("express");
var router = express.Router();
const mapboxSdk = require("@mapbox/mapbox-sdk");
const db = require("../model/helper");
require("dotenv").config();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const feedbackRoutes = require('./feedbackRoutes');


const accessToken = process.env.MAPBOX_ACCESS_TOKEN;
const geocodingClient = mapboxSdk({ accessToken: accessToken}).geocoding;
// variables needed for bcrypt to do the encryption
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;

router.use(feedbackRoutes);


/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.post("/register", async (req, res) => {
  let { userName, userEmail, userPassword } = req.body;
  try {
    let encryptedPWD = await bcrypt.hash(userPassword, saltRounds);
    //create new user on DB to store user credentials
    await db(
      `INSERT into users (userName, userEmail, userPassword) VALUES ("${userName}", "${userEmail}", "${encryptedPWD}");`
    );
    res.send({ message: "User created correctly" });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { userName, userPassword } = req.body;
  try {
    const response = await db(
      `SELECT * FROM users WHERE userName = "${userName}"`
    );
    const user = response.data[0];
    if (user) {
      const doMatch = await bcrypt.compare(userPassword, user.userPassword);
      if (!doMatch) {
        return res.status(401).send({ error: "Password doesn't match" });
      }
      const token = jwt.sign({ userId: user.id }, supersecret);
      return res.send({ token, userId: user.id });
    } else {
      return res.status(401).send({ error: "User not found" });
    }
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/private", async (req, res) => {
  // check "authorization" header, it has the format: "Bearer <token>"
  // and split the string to get only the <token> part
  let authHeader = req.headers["authorization"];
  // Separate 'Bearer' and token
  let [str, token] = authHeader.split(" ");
  try {
    //verify token and extract payload that includes user id (⇒ `jwt.verify()`)
    let payload = jwt.verify(token, supersecret);
    let result = await db(`SELECT * FROM users WHERE id = ${payload.userId}`);
    res.send(result.data[0]); 
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route for reversed geocoding
router.get("/reverse-geocoding", async (req, res) => {
  try {
    const { longitude, latitude } = req.query;
    const reverseGeocodeResponse = await geocodingClient
      .reverseGeocode({
        query: [longitude, latitude],
        limit: 1,
      })
      .send();

    const results = reverseGeocodeResponse.body.features;
    if (results.length > 0) {
      const address = results[0].place_name;
      res.json({ address });
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    console.error("Error during reversed geocoding:", error);
    res.status(500).json({ message: "Error during reversed geocoding" });
  }
});

router.get("/users/:id", function (req, res, next) {
  db(`SELECT userName, userEmail FROM users WHERE id=${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});


router.get("/pcp_fmd", async (req, res) => {
  try {
    const response = await db(`SELECT * FROM PCP_FMD`);
    res.send(response.data);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.post("/animal_diseases", async (req, res) => {
  const newData = req.body; // Assuming the request body contains the data for the new record
  try {
    await db(`INSERT INTO Animal_Diseases SET ?`, newData);
    res.send({ message: "New record added successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});


router.get("/pcp_fmd/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await db(`SELECT * FROM PCP_FMD WHERE id = ${id}`);
    res.send(response.data);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.put("/animal_diseases/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body; // Assuming the request body contains the updated data
  try {
    await db(`UPDATE Animal_Diseases SET ? WHERE event_id = ${id}`, newData);
    res.send({ message: "Record updated successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});


router.delete("/pcp_fmd/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db(`DELETE FROM PCP_FMD WHERE id = ${id}`);
    res.send({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});


router.get("/animal_diseases/search", async (req, res) => {
  const { country, disease } = req.query; // Assuming query parameters for filtering
  try {
    const response = await db(`SELECT * FROM Animal_Diseases WHERE country = "${country}" AND disease = "${disease}"`);
    res.send(response.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

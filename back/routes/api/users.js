const express = require("express");
const mongodb = require("mongodb");
require('dotenv').config();

const router = express.Router();

// get
router.get("/", async (req, res) => {
  const users = await loadUserCollection();
  res.status(200).send(await users.find({})
    .sort({created_at: 1})
    .toArray()
  );
});

// add
router.post("/", async (req, res) => {
  const users = await loadUserCollection();
  const insertion = await users.insertOne({
    id: req.body.id,
    name: req.body.name,
    token: req.body.token,
    kind: req.body.kind,
    expires_in: req.body.expires_in,
    type: req.body.type,
    scope: req.body.scope,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  // let data = {};
  // if (insertion.acknowledged) data = await users.findOne({_id: insertion.insertedId});
  // res.status(201).send(data);
  res.status(201).send();
});

// helper
async function loadUserCollection() {
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const dbName = process.env.MONGODB_DBNAME;
  const connection_string = `mongodb+srv://${user}:${password}@reservation-app.3ueyn.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const client = await mongodb.MongoClient.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return client.db(dbName).collection("users");
}

module.exports = router;

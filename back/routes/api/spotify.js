const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();
let request = require("request");
let querystring = require("querystring");

const router = express.Router();

const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

router.get("/login", function(req, res) {
  console.log("/login");
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: "71a3a5397b9840098bdde0bddd938121",
        scope: "user-read-private user-read-email user-top-read",
        redirect_uri
      })
  );
});

router.get("/callback", async (req, res) => {
  console.log("/callback");
  // 1 ------ get token
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code"
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer.alloc(
          65,
          process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET_ID
        ).toString("base64")
    },
    json: true
  };
  const users = await loadUserCollection();
  let access_token;
  request.post(authOptions, function(error, response, body) {
    access_token = body.access_token;
    // 2 ------ get spotify user
    // ...
    // 3 ------ store user
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
    // 4 ------ send token back to front-end
    let uri = process.env.CLIENT_ME;
    res.redirect(uri + "/" + access_token);
  });
});

// helper
async function loadUserCollection() {
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const dbName = process.env.MONGODB_DBNAME;
  const connection_string = `mongodb+srv://${user}:${password}@cluster0.4vp0x.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const client = await mongodb.MongoClient.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return client.db(dbName).collection("users");
}

module.exports = router;

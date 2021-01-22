const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();
let request = require("request");
let querystring = require("querystring");

const router = express.Router();

router.get("/login", function(req, res) {
  console.log("/login");
  res.redirect(
    "https://accounts.google.com/o/oauth2/v2/auth?" +
      querystring.stringify({
        scope: "https://www.googleapis.com/auth/youtube.readonly",
        include_granted_scopes: "true",
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        response_type: "token",
        client_id: process.env.GOOGLE_CLIENT_ID
      })
  );
});

router.get("/callback", async function(req, res) {
  console.log("/callback");
  console.log('req.query', req.query);
  console.log('req.query.access_token', req.query.access_token);
  console.log('req.params', req.params);
  const uri = process.env.CLIENT_GOOGLE;
  res.redirect(uri + "/");
});

module.exports = router;

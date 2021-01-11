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

router.get("/callback", function(req, res) {
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
  let access_token;
  request.post(authOptions, function(error, response, body) {
    access_token = body.access_token;
    // console.log("access_token:", access_token);
    // 2 ------ send token back to front-end
    let uri = process.env.CLIENT_ME;
    // console.log("redirect uri:", uri  + "/" + access_token);
    res.redirect(uri + "/" + access_token);
    // res.redirect(uri + "?access_token=" + access_token);
  });
});

module.exports = router;

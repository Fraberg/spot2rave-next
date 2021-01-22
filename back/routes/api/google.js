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

//accounts.google.com/signin/oauth/delegation?authuser=0&part=AJi8hAP2VfBJBMLtaZqFq2ikXv-QwqMsM2qPBPzZ4KzVYnzPCt08GgdOX2KF41rrK_8FSsTa-xIfElFZslVQgfNkcG1u8vgX14XyYAcrf8xIq4jcKKoUfYzabB_psuFr5GVoZ8fGYAsiXI7T7FSJ3-31wkdsN9cN_6OTyMdggn_jW3wVojv0OUalvEt0v8EqfyjbBss1jUAmukwWsXAUctPchU9bLHUmdsfrqGVrVBbYuldNqUaFjAJAYXxvhkNtJB7agUGV1g6K82wyYqIABqRdtSUKO08Xpxt5VRmYTYw6AcdwSk2zDGGBqAvjCIqgFviftMnw8JYaql2RGOLJ3hxyhfMESNtk0ttLpp8KlBhM1FD6iO1dXkPiC7mIZvmYAySA5bjdrmusyB7Lcmd8vDdc1h6f_DJnt93AAP_a6BJMf92WFsrlDj5fDpKSCSIPyap5Uasjmgts&as=S-1224107326%3A1611260274985609&pli=1&rapt=AEjHL4P2e3T-RGvkxmmEgCnkl-06Tq2caqn6B7_3JjpO63ePM_Dkt7o5bSRan2RH9rGMCrc6l0VgSmjDhlbS9niAifDBVwjJSQ&flowName=GeneralOAuthFlow
// protocol:  https
// username:  
// password:  
// hostname:  accounts.google.com
// port:      
// full host: accounts.google.com
// userinfo:  
// authority: accounts.google.com
// origin:    https://accounts.google.com
// domain:    google.com
// subdomain: accounts
// tld:       com
// pathname:  /signin/oauth/delegation
// directory: /signin/oauth
// filename:  delegation
// suffix:    
// query:     authuser=0&part=AJi8hAP2VfBJBMLtaZqFq2ikXv-QwqMsM2qPBPzZ4KzVYnzPCt08GgdOX2KF41rrK_8FSsTa-xIfElFZslVQgfNkcG1u8vgX14XyYAcrf8xIq4jcKKoUfYzabB_psuFr5GVoZ8fGYAsiXI7T7FSJ3-31wkdsN9cN_6OTyMdggn_jW3wVojv0OUalvEt0v8EqfyjbBss1jUAmukwWsXAUctPchU9bLHUmdsfrqGVrVBbYuldNqUaFjAJAYXxvhkNtJB7agUGV1g6K82wyYqIABqRdtSUKO08Xpxt5VRmYTYw6AcdwSk2zDGGBqAvjCIqgFviftMnw8JYaql2RGOLJ3hxyhfMESNtk0ttLpp8KlBhM1FD6iO1dXkPiC7mIZvmYAySA5bjdrmusyB7Lcmd8vDdc1h6f_DJnt93AAP_a6BJMf92WFsrlDj5fDpKSCSIPyap5Uasjmgts&as=S-1224107326%3A1611260274985609&pli=1&rapt=AEjHL4P2e3T-RGvkxmmEgCnkl-06Tq2caqn6B7_3JjpO63ePM_Dkt7o5bSRan2RH9rGMCrc6l0VgSmjDhlbS9niAifDBVwjJSQ&flowName=GeneralOAuthFlow
// hash:      
// fragment:  
// resource:  /signin/oauth/delegation?authuser=0&part=AJi8hAP2VfBJBMLtaZqFq2ikXv-QwqMsM2qPBPzZ4KzVYnzPCt08GgdOX2KF41rrK_8FSsTa-xIfElFZslVQgfNkcG1u8vgX14XyYAcrf8xIq4jcKKoUfYzabB_psuFr5GVoZ8fGYAsiXI7T7FSJ3-31wkdsN9cN_6OTyMdggn_jW3wVojv0OUalvEt0v8EqfyjbBss1jUAmukwWsXAUctPchU9bLHUmdsfrqGVrVBbYuldNqUaFjAJAYXxvhkNtJB7agUGV1g6K82wyYqIABqRdtSUKO08Xpxt5VRmYTYw6AcdwSk2zDGGBqAvjCIqgFviftMnw8JYaql2RGOLJ3hxyhfMESNtk0ttLpp8KlBhM1FD6iO1dXkPiC7mIZvmYAySA5bjdrmusyB7Lcmd8vDdc1h6f_DJnt93AAP_a6BJMf92WFsrlDj5fDpKSCSIPyap5Uasjmgts&as=S-1224107326%3A1611260274985609&pli=1&rapt=AEjHL4P2e3T-RGvkxmmEgCnkl-06Tq2caqn6B7_3JjpO63ePM_Dkt7o5bSRan2RH9rGMCrc6l0VgSmjDhlbS9niAifDBVwjJSQ&flowName=GeneralOAuthFlow

// authuser=0
// &part=AJi8hAP2VfBJBMLtaZqFq2ikXv-QwqMsM2qPBPzZ4KzVYnzPCt08GgdOX2KF41rrK_8FSsTa-xIfElFZslVQgfNkcG1u8vgX14XyYAcrf8xIq4jcKKoUfYzabB_psuFr5GVoZ8fGYAsiXI7T7FSJ3-31wkdsN9cN_6OTyMdggn_jW3wVojv0OUalvEt0v8EqfyjbBss1jUAmukwWsXAUctPchU9bLHUmdsfrqGVrVBbYuldNqUaFjAJAYXxvhkNtJB7agUGV1g6K82wyYqIABqRdtSUKO08Xpxt5VRmYTYw6AcdwSk2zDGGBqAvjCIqgFviftMnw8JYaql2RGOLJ3hxyhfMESNtk0ttLpp8KlBhM1FD6iO1dXkPiC7mIZvmYAySA5bjdrmusyB7Lcmd8vDdc1h6f_DJnt93AAP_a6BJMf92WFsrlDj5fDpKSCSIPyap5Uasjmgts
// &as=S-1224107326%3A1611260274985609
// &pli=1
// &rapt=AEjHL4P2e3T-RGvkxmmEgCnkl-06Tq2caqn6B7_3JjpO63ePM_Dkt7o5bSRan2RH9rGMCrc6l0VgSmjDhlbS9niAifDBVwjJSQ
// &flowName=GeneralOAuthFlow

// ---------------------------------

// protocol:  http
// username:  
// password:  
// hostname:  localhost
// port:      5000
// full host: localhost:5000
// userinfo:  
// authority: localhost:5000
// origin:    http://localhost:5000
// domain:    localhost
// subdomain: 
// tld:       localhost
// pathname:  /api/google/callback
// directory: /api/google
// filename:  callback
// suffix:    
// query:     
// hash:      #access_token=ya29.a0AfH6SMDtbQWOBdY6VJVlErgzxQgQaPVHd9yGYPSlxTNk64DPpY9jq6X7GmK6Preur59deNYPoEuD9ONmUwxmHjkWKlMkC7RPkEVK_lY73lVmTtSJlOMdaxZiEK5LqquX7NR7KpTKBj3tTsYglHIwcPEne7powwAx4z9O6tfvUpo&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/youtube.readonly
// fragment:  access_token=ya29.a0AfH6SMDtbQWOBdY6VJVlErgzxQgQaPVHd9yGYPSlxTNk64DPpY9jq6X7GmK6Preur59deNYPoEuD9ONmUwxmHjkWKlMkC7RPkEVK_lY73lVmTtSJlOMdaxZiEK5LqquX7NR7KpTKBj3tTsYglHIwcPEne7powwAx4z9O6tfvUpo&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/youtube.readonly
// resource:  /api/google/callback#access_token=ya29.a0AfH6SMDtbQWOBdY6VJVlErgzxQgQaPVHd9yGYPSlxTNk64DPpY9jq6X7GmK6Preur59deNYPoEuD9ONmUwxmHjkWKlMkC7RPkEVK_lY73lVmTtSJlOMdaxZiEK5LqquX7NR7KpTKBj3tTsYglHIwcPEne7powwAx4z9O6tfvUpo&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/youtube.readonly

// #access_token=ya29.a0AfH6SMDtbQWOBdY6VJVlErgzxQgQaPVHd9yGYPSlxTNk64DPpY9jq6X7GmK6Preur59deNYPoEuD9ONmUwxmHjkWKlMkC7RPkEVK_lY73lVmTtSJlOMdaxZiEK5LqquX7NR7KpTKBj3tTsYglHIwcPEne7powwAx4z9O6tfvUpo
// &token_type=Bearer
// &expires_in=3599
// &scope=https://www.googleapis.com/auth/youtube.readonly

router.get("/callback", async function(req, res) {
  console.log("/callback");
  console.log('req.query', req.query);
  console.log('req.query.access_token', req.query.access_token);
  console.log('req.params', req.params);
  // console.log('req', req);
  // 1 ------ get token
  // let code = req.query.code || null;
  // let authOptions = {
  //   url: "https://accounts.spotify.com/api/token",
  //   form: {
  //     code: code,
  //     redirect_uri,
  //     grant_type: "authorization_code"
  //   },
  //   headers: {
  //     Authorization:
  //       "Basic " +
  //       new Buffer.alloc(
  //         65,
  //         process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET_ID
  //       ).toString("base64")
  //   },
  //   json: true
  // };
  // let access_token;
  // request.post(authOptions, function(error, response, body) {
  //   access_token = body.access_token;
  //   // console.log("access_token:", access_token);
  //   // 2 ------ send token back to front-end
    let uri = process.env.CLIENT_GOOGLE;
  //   // console.log("redirect uri:", uri  + "/" + access_token);
    res.redirect(uri + "/");
  //   // res.redirect(uri + "?access_token=" + access_token);
  // });
});

module.exports = router;

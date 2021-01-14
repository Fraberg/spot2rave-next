const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();
const axios = require('axios');

const router = express.Router();

const artistsEndpoint = keywords => {
  return `https://app.ticketmaster.com/discovery/v2/attractions?apikey=${process.env.TM_API_KEY}&keyword=${keywords}&locale=*`;
};

const eventsEndpoint = attractionId => {
  return `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TM_API_KEY}&attractionId=${attractionId}&locale=*`;
};

// get artist
router.get('/artist', async (req, res) => {
  console.log('/artist | req.query.keywords:', req.query.keywords)
  // req.query.keywords
  const tmRes = await axios.get(artistsEndpoint('salut c est cool'), {
    headers: {
      'content-type': 'application/json'
    }
  });
  // console.log('/artist | tmRes:', tmRes.data._embedded.attractions[0])
  res.status(200).send(tmRes.data._embedded.attractions[0]);
});

// get events for artistId
router.get('/events', async (req, res) => {
  console.log('/events | req.query.keywords:', req.query.artistId)
  // req.query.keywords
  const tmRes = await axios.get(eventsEndpoint('K8vZ9173-97'), {
    headers: {
      'content-type': 'application/json'
    }
  });
  console.log('/events | tmRes:', tmRes.data._embedded.events)
  res.status(200).send(tmRes.data._embedded.events);
});

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const spotify = require('./routes/api/spotify');
app.use('/api/spotify', spotify);
const ticketmaster = require('./routes/api/ticketmaster');
app.use('/api/ticketmaster', ticketmaster);

// Production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'));
    // handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
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

// Production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'));
    // handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || process.env.LOCALHOST_SERVER_PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));
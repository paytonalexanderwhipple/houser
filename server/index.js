require('dotenv').config()
const { SERVER_PORT, DB_URL } = process.env;

const express = require('express');
const massive = require('massive');
const ctrl = require('./controller.js');

const app = express()
// *** TOPLEVEL MIDDLEWARE *** //

app.use(express.json());
massive(DB_URL)
    .then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, () => console.log(`listening on PORT: ${SERVER_PORT}`))
    })

// *** ENDPOINTS *** //

app.post('/api/houses', ctrl.create)
app.get('/api/houses', ctrl.read)
app.delete('/api/houses/:house_id', ctrl.delete)
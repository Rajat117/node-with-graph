const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const routes = require('./routes');

const port = process.env.PORT || 3000;

app.use(bodyParser());

app.get('/', (req, res) => {
    return res.send('Server is Up!')
});

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`)
})
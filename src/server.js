const express = require('express');
const morgan = require('morgan');
const rateLimiter = require('./middlewares/rateLimiting.js');
const ageRoute = require('./router.js');

const app = express();

app.use(morgan('combined'));
// app.use(rateLimiter);

const PORT = process.env.PORT || 3004;

app.use('/howold', ageRoute);

app.listen(PORT);

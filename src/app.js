'use strict';


const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use(require('./routes/user-routes'));



module.exports = app;
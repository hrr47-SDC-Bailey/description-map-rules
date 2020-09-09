const path = require('path');
const express = require('express');
const { find } = require('./database/db.js');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/house/:id/:querytype', find);

module.exports = app;

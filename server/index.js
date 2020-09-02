const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const { find } = require('./database/db.js');

const app = express();

app.use(express.json());
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/house/:id/:querytype', find);

module.exports = app;

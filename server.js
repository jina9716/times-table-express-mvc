'use strict';

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const favicon = require('serve-favicon')
const path = require('path')
var logger = require('morgan')

app.use(logger());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

const router = require('./api/route');
router(app);

app.listen(port);
'use strict'

var express = require('express');

var phonesController = require('../controllers/phones');

var api = express.Router();

api.get('/', phonesController.list);

module.exports = api;
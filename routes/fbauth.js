var express = require('express');
var router = express.Router();

var passport = require('passport');

var Model = require('../models/model');

/* GET users listing. */
router.get('/', function (req, res, next) {
    passport.authenticate('facebook');
});

module.exports = router;
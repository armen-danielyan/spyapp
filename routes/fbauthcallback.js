var express = require('express');
var router = express.Router();

var passport = require('passport');

var Model = require('../models/model');

/* GET users listing. */
router.get('/', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
}));

module.exports = router;
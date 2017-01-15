var express = require('express');
var router = express.Router();

var Model = require('../models/model');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('result', {title: 'Result'});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //console.log(req.connection.remoteAddress);
    res.render('index', {title: 'Express', ip: req.connection.remoteAddress});
});

module.exports = router;

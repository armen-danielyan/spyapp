var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var output = req.headers['user-agent'];
    console.log(output);
    res.render('index', {title: 'Express', data: output});
});

module.exports = router;

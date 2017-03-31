var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var config = require('config');

var conn = mysql.createConnection(config.get('mysql'));


/* GET users listing. */
router.get('/', function (req, res, next) {

    var q = 'SELECT ID, country, region, city, location, org, ip, hostname, screen, useragent, COUNT(ip) as count, max(created_at) as created_at FROM users GROUP BY ip ORDER BY created_at DESC';

    conn.query(q, function (error, results, fields) {
        if (error) throw error;
        return res.render('result', {title: 'Result', data: results});
    });



});

module.exports = router;

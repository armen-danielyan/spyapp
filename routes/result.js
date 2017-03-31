var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var config = require('config');

//var conn = mysql.createConnection(config.get('mysql'));
var mysqlPool  = mysql.createPool(config.get('mysql'));


/* GET users listing. */
router.get('/', function (req, res, next) {
    var strQuery = 'SELECT *, COUNT(ip) as count, max(created_at) as created FROM users GROUP BY ip ORDER BY created_at DESC';
    mysqlPool.getConnection(function(err, conn) {
        if(err) throw err;
        conn.query(strQuery, function(err, rows) {
            if(err) {
                conn.release();
                console.error(err);
                return;
            }
            res.render('result', {title: 'Result', data: rows});
            conn.release();
        });
    });
});

module.exports = router;

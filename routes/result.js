var express = require('express');
var router = express.Router();

var Model = require('../models/model');

/* GET users listing. */
router.get('/', function (req, res, next) {
    new Model.User()
        .query(function (qb) {
            qb.groupBy('ip');
        })
        .orderBy('created_at', 'DESC')
        .fetchAll()
        .then(function (model) {
            res.render('result', {title: 'Result', data: model.toJSON()});
        });
});

module.exports = router;

var express = require('express');
var router = express.Router();

var Model = require('../models/model');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Home'});
});

router.post('/ajax', function (req, res, next) {
    new Model.User()
        .save({
            location: '',
            country: req.body.country,
            region: req.body.region,
            city: req.body.city,
            org: req.body.org,
            ip: req.body.ip,
            hostname: req.body.hostname,
            screen: req.body.screen,
            useragent: req.headers['user-agent']
        })
        .then(function(model){
            console.log(model.toJSON());
            return res.json({id: model.toJSON().ID});
        });
});

router.post('/loc', function (req, res, next) {
    new Model.User({ID: req.body.id})
        .save({
            location: req.body.loc
        }, {patch: true})
        .then(function(model){
            console.log(model.toJSON());
            return res.json({id: model.toJSON().ID});
        });
});

module.exports = router;
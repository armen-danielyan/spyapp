var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var index = require('./routes/index');
var result = require('./routes/result');

/*var fbAuth = require('./routes/fbauth');
var fbAuthCallback = require('./routes/fbauthcallback');*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/result', result);

/*app.use('/auth/facebook', fbAuth);
app.use('/auth/facebook/callback', fbAuthCallback);*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/*passport.use(new FacebookStrategy({
        clientID: '156472874842583',
        clientSecret: 'd82f769751e94e16e261613ef278b77d',
        callbackURL: '/auth/facebook/callback'
    }
));*/
passport.use(new FacebookStrategy({
    clientID: '156472874842583',
    clientSecret: 'd82f769751e94e16e261613ef278b77d',
    callbackURL: 'https://picview.herokuapp.com/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        //Assuming user exists
        done(null, profile);
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/error'
}));


module.exports = app;

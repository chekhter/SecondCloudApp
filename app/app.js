const xsenv = require('@sap/xsenv');
const services = xsenv.getServices({ uaa:'mysecond-uaa' });
const passport = require('passport');
const JWTStrategy = require('@sap/xssec').JWTStrategy;
passport.use(new JWTStrategy(services.uaa));

const express = require('express');
const app = express();
app.use(passport.initialize());
app.use(passport.authenticate('JWT', {session: false}));

app.get('/email', function (req, res, next) {
	res.send('Application user: ' + req.user.id);
});

app.get('/user', function (req, res, next) {
	res.send('Application user: ' + req.user);
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('My Second App listening on port ' + port);
});
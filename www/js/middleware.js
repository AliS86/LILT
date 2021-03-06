var express     = require('express');
var app         = express();
var jwt    		= require('jsonwebtoken'); // used to create, sign, and verify tokens
var config 		= require('./config'); // get our config file

// route middleware to verify a token
function requiresToken(req,res, next) {

    app.set('superSecret', config.secret); // secret variable

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
};

module.exports.requiresToken = requiresToken;
var express = require('express');
var app = express();

module.exports = function(app) {
    app.get('/health', function(req, res) {
        res.status(200);
        res.send('Ok');
        return;
    });
};
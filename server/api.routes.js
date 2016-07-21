module.exports = (function() {
    'use strict';

    var router = require('express').Router();

    router.get('/', function(req, res) {
        res.json({"data":"Welcome :)"});
    });

    return router;
})();
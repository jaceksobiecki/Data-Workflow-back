var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    'use strict';

    const fs = require('fs');

    let rawdata = fs.readFileSync('./file.json');
    let formsData = JSON.parse(rawdata);
    res.send(rawdata);
});

module.exports = router;
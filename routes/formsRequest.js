var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    'use strict';

    const fs = require('fs');

    let rawdata = fs.readFileSync('./file.json');
    let formsData = JSON.parse(rawdata);
    console.log(">>>>>>>>>>>>>>")
    console.log(formsData.form.inputFields[0].name)
    res.send(formsData);
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    'use strict';

    //const fs = require('fs');

    //let rawdata = fs.readFileSync('./file.json');
    //let formsData = JSON.parse(rawdata);
    //console.log(">>>>>>>>>>>>>>")
    //console.log(formsData.form.inputFields[0].name)
    //res.send(formsData);

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        dbo.collection("forms").find( { cooperators: { $in: [ req.body.username]} }).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result)
            res.send(result);
            db.close();
        });
    });
});

module.exports = router;
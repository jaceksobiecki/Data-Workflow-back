var express = require('express');
var router = express.Router();
var mongo = require('mongodb');


router.post('/', function(req, res, next) {
    res.send("Got it");
    const form = req.body.form
    const reqType = req.body.reqType

    console.log(form)
    console.log(reqType)

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    console.log(">>>>>>>>>>>>>>"+form.currentState.name)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        if(reqType==="save"){
            dbo.collection("forms").insertOne(form, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        } else if(reqType==="update"){
            console.log("##########"+form._id)
            dbo.collection("forms").drop({_id: form._id}, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
            dbo.collection("forms").insertOne(form, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        } else if(reqType==="delete"){
            dbo.collection("forms").drop({_id: form._id}, function(err, res) {
                if (err) throw err;
                console.log("1 document deleted");
                db.close();
            });
        }

    });
/*
    const fs = require('fs');
    fs.writeFile("/Users/Jacek/WebstormProjects/Data Workflow/data-workflow/src/file.json", form, function(err) {

        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

 */

});

module.exports = router;
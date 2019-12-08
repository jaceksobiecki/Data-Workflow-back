var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    res.send("Got it");

    const fs = require('fs');

    fs.writeFile("/Users/Jacek/WebstormProjects/Data Workflow/data-workflow/src/file.json", JSON.stringify(req.body), function(err) {

        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
    console.log(">>>>>>>>>>Success");
});

module.exports = router;
const express = require('express');
const fs = require("fs");
const appclass = require('./app');
const body_parser = require('body-parser');

const server = express();
const port = 4000;

server.get('/authuser', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var obj = JSON.parse(data);
        var username = obj["user"]['username'];
        var password = obj["user"]['password'];

        appclass.checkIfUserExists(username,password, function(err,data){
            if (err) {
                // error handling code goes here
                res.status(404).send(false);
                console.log("ERROR : ",err);
            } else {
                // code to execute on data retrieval
                res.status(200).send(true);
                console.log("result from db is : ",data);
            }
        });


        // var keys = Object.keys(obj);
        // for (var i = 0; i < keys.length; i++) {
        //     console.log(obj[keys[i]]);
        // }
        //console.log(data);


    });
});




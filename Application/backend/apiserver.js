// Used this tutorial: https://dev.to/lenmorld/quick-rest-api-with-node-and-express-in-5-minutes-336j


// importing the required modules in order for the API server to run and work.
const express = require('express');
const body_parser = require('body-parser');

// importing the selfmade app module.
const appclass = require('./app');

// express instance invoked and port number made as an instance.
const server = express();
const port = 4000;

// parse incoming JSON (application/json content-type)
server.use(body_parser.json());

// server.get("/", (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

server.get("/json", (req, res) => {
    res.json({ message: "Hello world" });
});

server.post("/login", (req, res) => {
    let json_input = req.body;
    let username = json_input["username"];
    let password = json_input["password"];

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
});

server.post("/register", (req, res) => {
    let json_input = req.body;
    let username = json_input["username"];
    let email = json_input["email"];
    let password = json_input["password"];

    appclass.insertUser(username,email,password, function(err,data){
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
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
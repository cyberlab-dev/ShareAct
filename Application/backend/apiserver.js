// Used this tutorial: https://dev.to/lenmorld/quick-rest-api-with-node-and-express-in-5-minutes-336j


// importing the required modules in order for the API server to run and work.
const express = require('express');
const body_parser = require('body-parser');

// importing the selfmade app module.
const app = require('./app');

// express instance invoked and port number made as an instance.
const server = express();
const port = 4000;

// parse incoming JSON (application/json content-type)
// if disabled, it will return the following TypeError:
// "TypeError: Cannot read property 'username' of undefined"
server.use(body_parser.json());

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// server.get("/", (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

server.get("/json", (req, res) => {
    res.json({ message: "Hello world" });
});

server.post("/login", (req, res) => {
    let json_input = req.body;
    console.log(json_input);
    let username = json_input["username"];
    let password = json_input["password"];

    app.checkIfUserExists(username,password, function(err,data){
        if (!data) {
            // error handling code goes here
            //res.json({message: false});
            // res.status(404).send(false);
            // console.log("ERROR : ",err);
            // console.log("failed...");
            //return false;
            console.log("user does not exist...");
            res.json({message: false});
            //res.send("false");
        } else {
            // code to execute on data retrieval
            //res.json({message: true});
            //res.status(200).send(true);
            //console.log("result from db is : ",data);
            console.log("user exists!");
            res.json({message: true});
            //res.send("true");
        }
    });
});

server.post("/register", (req, res) => {
    let json_input = req.body;
    let username = json_input["username"];
    let email = json_input["email"];
    let password = json_input["password"];

    app.insertUser(username,email,password, function(err,data){
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

// appclass.checkIfUserExists("persha95","123123pp", function(err,data){
//     //if (err) {
//     if (!data) {
//         // error handling code goes here
//         //res.json({message: false});
//         // res.status(404).send(false);
//         // console.log("ERROR : ",err);
//         //console.log("failed...");
//         return false;
//     } else {
//         // code to execute on data retrieval
//         //res.json({message: true});
//         //res.status(200).send(true);
//         //console.log("result from db is : ",data);
//         return true;
//     }
// });



// appclass.checkUser("persha95","123123pps",function(err,data){
//     if (err) {
//         // error handling code goes here
//         //res.json({message: false});
//         // res.status(404).send(false);
//         // console.log("ERROR : ",err);
//         console.log("failed...");
//         return false;
//     } else {
//         // code to execute on data retrieval
//         //res.json({message: true});
//         //res.status(200).send(true);
//         console.log("result from db is : ",data);
//         return true;
//     }
// });
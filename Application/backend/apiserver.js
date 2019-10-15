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
    //console.log("nice, well done GET!");
});

server.post("/login", (req, res) => {
    // const item = req.body;
    let username = req.params.username;

    // return updated list
    res.json(username);
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
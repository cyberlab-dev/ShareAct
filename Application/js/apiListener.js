var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Create a request variable and assign a new XMLHttpRequest object to it.

function apiRegister() {

    //retrieving data from registration form
    var username = document.forms["registerForm"]["userName"].value;
    var email = document.forms["registerForm"]["userMail"].value;
    var password = document.forms["registerForm"]["userPass"].value;

    // url of the specified API
    var url = "http://localhost:4000/register";

    // data to be sent to the server
    var data = {};
    data.username = username;
    data.email  = email;
    data.password = password;
    var json = JSON.stringify(data);

    // preparing the request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
            return true;
        } else {
            console.error(users);
            return false;
        }
    };

    // sending the request
    xhr.send(json);

    // return value whether it is true or false
    return xhr.response;
}


function apiLogin() {

    //retrieving data from login form
    //var username = document.forms["loginForm"]["userName"].value;
    //var password = document.forms["loginForm"]["userPass"].value;
    var username = "persha95";
    var password = "123123pdp";
    // url of the specified API
    var url = "http://localhost:4000/login";

    // data to be sent to the server
    var data = {};
    data.username = username;
    data.password = password;




    var jsonSend = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonReceive = JSON.parse(xhr.responseText);
            if (jsonReceive["message"]) {
                console.log("true");
            } else {
                console.log("false");
            }

        }
    };
    // var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
    xhr.send(jsonSend);

}

apiLogin();
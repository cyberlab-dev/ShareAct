//

// Create a request variable and assign a new XMLHttpRequest object to it.

function apiRegister() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
        var response = JSON.parse(xhr.responseText);
        //if (xhr.readyState == 4 && xhr.status == "201") {
        if (response["message"]) {
            return true;
        } else {
            return false;
        }
    };

    // sending the request
    xhr.send(json);

    // return value whether it is true or false
    return xhr.response;
}


function apiLogin() {
    //window.location.replace("/views/loginCompletePage.html");
    //loadView('loginsuccess');
    //window.location.href= "/views/loginCompletePage.html";
    //retrieving data from login form
    var username = document.getElementById("userName").value;
    var password = document.getElementById("userPass").value;
    // url of the specified API
    var url = "http://localhost:4000/login";

    // data to be sent to the server
    var data = {};
    data.username = username;
    data.password = password;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           var json = JSON.parse(xhr.responseText);
           if (json["message"] === true) {
               console.log("login successful!");
               // var myVariable = json.message;
               //
               // sessionStorage['myvariable'] = myVariable;
               //
               // var readValue = sessionStorage['myvariable'];
               // console.log(readValue);
           } else {
               console.log("login failed...");
               //loadView('loginfail');
           }
       }
    };

    var jsonSend = JSON.stringify(data);
    xhr.send(jsonSend);

}

function apiTest() {
    var myVariable = "Hello World";

    sessionStorage['myvariable'] = myVariable;

    var readValue = sessionStorage['myvariable'];
    console.log(readValue);
}
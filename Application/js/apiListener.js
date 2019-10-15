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


function apilogin() {

    //retrieving data from login form
    //var username = document.forms["loginForm"]["userName"].value;
    //var password = document.forms["loginForm"]["userPass"].value;
    var username = "persha95";
    var password = "123123pp";
    // url of the specified API
    var url = "http://localhost:4000/login";

    // data to be sent to the server
    var data = {};
    data.username = username;
    data.password = password;
    var json = JSON.stringify(data);

    // preparing the request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    try {
        xhr.onload = function () {
            var returnValue = JSON.parse(xhr.responseText);
            if (returnValue) {
                console.log("logged in!");
            } else {
                console.log("not logged in.....");
                //window.location.href = "views/loginNotCompletePage.html";
            }
            // if (xhr.readyState == 4 && xhr.status == "201") {
            //     //console.table(users);
            // } else {
            //     console.error(users);
            // }
        };

        // sending the request
        var returnValue = xhr.send(json);

        if (returnValue) {
            //window.location.href = "views/loginCompletePage.html";
        } else {
            //window.location.href = "views/loginNotCompletePage.html";
        }
    } catch(e) {
        console.log('catch', e);
    }
    // return value whether it is true or false
    //return xhr.response;

}

apilogin();
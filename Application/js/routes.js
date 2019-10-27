function loadView(view) {
    var xhttp = new XMLHttpRequest();
    var viewPath = view;
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("Content").innerHTML = this.responseText;
        }
    };

    switch(viewPath) {
    case 'chat':
        xhttp.open("GET", "views/chat.html", true);
        xhttp.send();
        break;
    case 'profile':
        xhttp.open("GET", "views/profile.html", true);
        xhttp.send();
        break;
    case 'reg':
        xhttp.open("GET", "views/register.html", true);
        xhttp.send();
        break;
    case 'loginsuccess':
        xhttp.open("GET", "views/loginCompletePage.html", true);
        xhttp.send();
        break;
    case 'loginfail':
        xhttp.open("GET", "views/loginNotCompletePage.html", true);
        xhttp.send();
        break;
    default:
        xhttp.open("GET", "views/home.html", true);
        xhttp.send();
    }
}
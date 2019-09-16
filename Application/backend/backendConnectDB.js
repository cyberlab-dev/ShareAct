module.exports = class backendConnectDB {

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "www.shareact.tech",
        user: "bacheloruserdb",
        password: "123123pp"
    });

};

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

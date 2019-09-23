var con = require('./db');

function insertUser() {
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "INSERT INTO Users (UserName, UserMail, UserPass) VALUES ('Company Inc23123', 'Highwa213@sf.com', '123123')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

function fetchUser() {
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "SELECT UserName, UserPass FROM Users WHERE UserName = 'Company Incs' AND UserPass = '123123'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

module.exports = {
    insertUser: insertUser,
    fetchUser: fetchUser
};



var con = require('./db');

//Insert user data into database using their usernames, emails and user passwords.
function insertUser(un, um, up) {
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "INSERT INTO Users (UserName, UserMail, UserPass) VALUES "+"('"+un+"','"+um+"','"+up+"');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

// Select specific user using their usernames and passwords and check whether they exists.
// If the username and password matches, it will also mean that the user exists and hence return true,
// if not, then return false.
function authUser(un,up) {
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "SELECT UserName, UserPass FROM Users WHERE UserName = "+"'"+un+"' AND UserPass = '"+up+"';";
        con.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result[0].UserName === un);
            return result[0].UserName === un;
        });
    });
}

function checkIfExists(callback, un, up) {
    var sql = "SELECT UserName, UserPass FROM Users WHERE UserName = "+"'"+un+"' AND UserPass = '"+up+"';";
    var rows = 0;
    con.query(sql, function (err, result, fields) {
        if (err) {
            callback(err, null);
        } else {
            //console.log(result.length);
            // rows += result.length;

            // callback(null, rows > 0);
        }
    }).then(function() {
        return result[0].UserName === un;
    });
}

// checkIfExists(function(err, isExists) {
//     if (err) {
//         // An error occured
//     } else {
//         console.log(isExists);
//     }
// });

module.exports = {
    insertUser: insertUser,
    authUser: authUser,
    checkIfExists: checkIfExists
};



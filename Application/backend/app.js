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
function checkIfUserExists(un, up, callback)  {
    let sql = "SELECT UserName, UserPass FROM Users WHERE UserName = "+"'"+un+"' AND UserPass = '"+up+"';";
    let sql2 = "SELECT EXISTS(SELECT * FROM Users WHERE UserName = "+"'"+un+"' AND UserPass = '"+up+"') as result;";
    con.query(sql2, function(err, result) {
        if (err) {
            //console.log(result["result"]);
            callback(false);
        } else {
            //console.log(result["result"]);
            // if (result[0]["UserName"] === )
            if (result["result"] == 1) {
                callback(true);
            } else {
                callback(false);
            }

        }
    });
}





module.exports = {
    insertUser: insertUser,
    checkIfUserExists: checkIfUserExists,

    checkUser: function (un,up,callback) {
        con.query("SELECT * FROM Users WHERE UserName = "+"'"+un+"' AND UserPass = '"+up+"';", (error, results) => {
            if(error) {
                //console.log(err);
                callback(true);
            } else {
                callback(false, results[0]["UserName"]);
            }
        });
    }

};



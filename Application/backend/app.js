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
    let sql2 = "SELECT EXISTS(SELECT * FROM Users WHERE UserName = "+"'"+un+"' AND UserPass = '"+up+"') as r;";
    con.query(sql2, function(err, result) {
        if (err) {
            //console.log(result["result"]);
            callback(false);
        } else {
            // console.log(result[0].result);
            //console.log(result[0]["r"]);
            //console.log(result["r"]);
            // if (result[0]["UserName"] === )
            if (result[0]["r"] === 1) {
                // console.log(result);
                return callback(null, true);
                //callback(true);
            } else {
                // console.log("FAIL");
                return callback(err, false);
                //callback(false);
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
                if (results[0]["UserName"] && results[0] === undefined) {
                    //callback(true);
                    return callback(error, null);
                } else {
                    return callback(null, results);
                    //callback(false, results[0]["UserName"]);
                }

            }
        });
    }

};



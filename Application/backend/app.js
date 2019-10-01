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
    con.query(sql, function(err, result) {
        if (err)
            callback(false,null);
        else
            callback(null,result[0].UserName);

    });

}



module.exports = {
    insertUser: insertUser,
    checkIfUserExists: checkIfUserExists
};



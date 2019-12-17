var con = require('./db');


// insertUser("pershas post","hello its a test","1", function(err,data){
//     if (!data) {
//         console.log("insert failed");
//     } else {
//         console.log("inserted finally!");
//     }
// });


// insertPost("pershas post","hello its a test", "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=","2", function(err,data){
//     if (!data) {
//         console.log(err);
//         console.log("post failed");
//     } else {
//         console.log("posted finally!");
//     }
// });


// fetchPosts(function(err,data){
//     if (err) {
//         console.log(err);
//         console.log("failed viewing posts");
//     } else {
//         for (var i = 0; i < 10; i++) {
//             console.log("post works! Get data value is: "+data[i]["PostTitle"]);
//         }
//
//     }
// });

// editPost("7","12321321321321","TESTESTSTESTSETES","hehehehe",function(err){
//     if (err) {
//         console.log(err);
//         console.log("failed editing post");
//     } else {
//         console.log("editing post works!");
//     }
// });







// Method for inserting a post, if the user wants to post a post.
// Note: the time is instantiated in the method and not given in the parameter,
// because it is something that needs to be specific and not customized by anyone.
// pEdit is a counter for how many times the post has been edited. This is just set to 0, since it isn't edited,
// when the post is created for the first time.
function insertPost(pTitle, pDesc, pIMG, uID, callback) {
    const DATE_FORMATER = require( 'dateformat' );
    const pTime = DATE_FORMATER(new Date(), "yyyy-mm-dd HH:MM:ss");
    const pEdit = 0;
    con.connect(function(err, data) {
        console.log("Connected!");
        var sql = "INSERT INTO Posts (PostTitle, PostDesc, PostTime, PostEdit, PostImg, fk_UserId) VALUES "+"('"+pTitle+"','"+pDesc+"','"+pTime+"','"+pEdit+"','"+pIMG+"','"+uID+"');";
        con.query(sql, function (err) {
            if (err) {
                return callback(err, false);
            } else {
                return callback(err, true);
                console.log("1 record inserted");
            }
        });
    });
}

// This function fetches all the posts in the database as an array and
// it will be up to the user's decision to choose what content to view based on the array
function fetchPosts(callback) {
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "SELECT * FROM Posts;";
        con.query(sql, function (err, result) {
            if (err) {
                return callback(err, false);
            } else {
                return callback(err, result);
            }
        });
    });
}

function editPost(pID, pTitle, pDesc, pIMG, callback) {
    const DATE_FORMATER = require( 'dateformat' );
    const pTime = DATE_FORMATER(new Date(), "yyyy-mm-dd HH:MM:ss");
    const pEdit = 0;
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "UPDATE Posts SET PostTitle = " + "'" + pTitle + "'" + ", PostDesc = " + "'" + pDesc + "'" + ", PostTime = " + "'" + pTime + "'" + ", PostEdit = " + "'" + pEdit + "'" + ", PostImg = " + "'" + pIMG + "' WHERE PostId = " + "'" + pID + "'";
        con.query(sql, function (err) {
            if (err) {
                return callback(err, false);
            } else {
                return callback(null, true);
                console.log("1 record inserted");
            }
        });
    });
}


function deletePost(postId, callback) {
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "DELETE FROM Posts WHERE PostId = "+"'"+postId+"';";
        con.query(sql, function (err) {
            if (err) {
                return callback(err, false);
            } else {
                return callback(err, true);
            }
        });
    });
}


//Insert user data into database using their usernames, emails and user passwords.
function insertUser(un, um, up, callback) {
    con.connect(function(err) {
        console.log("Connected!");
        var sql = "INSERT INTO Users (UserName, UserMail, UserPass) VALUES "+"('"+un+"','"+um+"','"+up+"');";
        con.query(sql, function (err) {
            if (err) {
                return callback(err, false);
            } else {
                return callback(null, true);
                console.log("1 record inserted");
            }
        });
    });
}

// Select specific user using their usernames and passwords and check whether they exists.
// If the username and password matches, it will also mean that the user exists and hence return true,
// if not, then return false.
function checkIfUserExists(un, up, callback)  {
    let sql = "SELECT EXISTS(SELECT * FROM Users WHERE UserName = "+"'"+un+"' AND UserPass = '"+up+"') as r;";
    con.query(sql, function(err, result) {
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
    insertPost: insertPost,
    fetchPosts: fetchPosts,
    editPost: editPost,
    deletePost: deletePost
};
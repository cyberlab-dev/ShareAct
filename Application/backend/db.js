var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'www.shareact.tech',
    user     : 'bacheloruserdb',
    password : '123123pp',
    database : 'shareactdb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '206.81.29.12',
    user     : 'bacheloruserdb',
    password : '123123pp',
    database : 'shareactdb'
});

module.exports = connection;
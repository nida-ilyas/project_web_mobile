var mysql = require("mysql");

// First you need to create a connection to the db
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : 'web_mobile_project_3'
});

//connection.connect();
connection.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

connection.query('SELECT * from klanten  AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows);
});

connection.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});
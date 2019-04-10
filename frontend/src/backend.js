var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "auze217",
    password: "CuteBoiConner",
    database: "hotwheelsdb"
});
//connecting the db
connection.connect( (err) => {
    if (err) {
        console.log("Error")
        throw err;
    } else {
        console.log("Database Connected!")
        //creating the db
        connection.query("CREATE DATABASE hotwheelsdb", (err, result) => {
            if (err) {
                console.log("Error creating the database")
                throw err;
            } else {
                //made the db
                console.log("Database Created: hotwheelsdb!")
                //creating the tables****not sure if this is where
            }
        })
    }
})
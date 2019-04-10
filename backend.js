var mysql = require('mysql');

function backEnd() {
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
    }
})
}
export default backEnd;
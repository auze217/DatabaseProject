var pg = require('pg');

function backEnd() {
    console.log("got to back end----");
    var connectionString = "postgres://conner:password@serverName/localhost:5432/hotwheelsdb";
    var pgClient = new pg.Client(connectionString);
    //connecting the db
pgClient.connect( (err) => {
    if (err) {
        console.log("Error database not connected!!")
        throw err;
    } else {
        console.log("Database Connected!")
    }
})
}

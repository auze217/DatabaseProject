const backEndFile = require('./backend')
const fs = require('fs')
const express = require('express')
const app = express()

var pg = require('pg');

app.get('/test', (req, res) => {
    res.send("got to back end----");
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
})

app.get("/", (req, res) => {
     res.writeHead(200, {
         
     })
     fs.readFile('./frontend.html', null, (error, data) => {
         if (error) {
             res.writeHead(404)
             res.write("File Not Fund")
         } else {
             res.write(data)
         }
         res.end()
     })
})
app.listen(80, () => {
    console.log('Back end API is up!')
})

process.on('SIGINT', () => process.exit());

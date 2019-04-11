const backEnd = require('./backend')
const fs = require('fs')
const express = require('express')
const app = express()

app.get("/", (req, res) => {
     res.writeHead(200, {
         'Content-Type': 'text/html'
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

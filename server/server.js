const express = require('express');
const cowsay = require('cowsay');
// Constants
const hostname = '127.0.0.1';
const port = 8080;

// App
const app = express();

// GET method route
app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/txt');
    res.send(
        cowsay.say({
            text: "Has realizado una solicitud a traves del GET method",
            e: "-O",
            T: "U "
        })
    );
});
  
// POST method route
app.post('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/txt');
    res.send(
        cowsay.say({
            text: "Has realizado una solicitud a traves del POST method",
            e: "-O",
            T: "U "
        })
    );
});

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", 'text/plain');
//     res.end('Hello World, from NodeJS');
// });

// server.listen(port, hostname, () => {
//     console.log(`server listening on http://${hostname}:${port}`);
// })

const express = require('express');

const port = 3000;

const server = express();

server.get('/', (req, res) => {
    res.send('Hello world from Express!')
})

server.listen(port, () => {
    console.log(`server listening on ${port}`);
})
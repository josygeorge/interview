const http = require('http');
console.log('Hi there');

const server = http.createServer((req, res) => {
    console.log('Server started');
    res.end('<h1>Message from server. Server connected...</h1>')
})

server.listen(5050);
/**
 * Created by Jason on 14/09/2016.
 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    });

// If a client connection emits an 'error' event, it will be forwarded here.
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

// Emitted each time a client requests a http CONNECT method. If this event isn't listened for,
// then clients requesting a CONNECT method will have their connections closed.
server.on('connect',(request, socket,head)=>{
    console.log('client connected');
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
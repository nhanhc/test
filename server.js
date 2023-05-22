const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run server')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello ...</h3>');
    res.write('<h2>Nhanhc ...</h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('node running 3000')
})
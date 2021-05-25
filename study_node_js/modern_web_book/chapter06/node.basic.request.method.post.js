/**
 * リクエストメソッド（Post）
 */

// Module
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    switch (req.method) {
        // Get Request
        case 'GET':
            fs.readFile('../resources/html/HTMLPage.2.html', (err, data) => {
                res.writeHead(200, {    'Content-Type': 'text/html' });
                res.end(data);
            });
            break;
        // Post Request
        case 'POST':
            req.on('data', (data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>' + data + '</h1>');
            });
            break;
    }

}).listen(52273, () => {
    console.log('Server Running Port Number : 52273');
});
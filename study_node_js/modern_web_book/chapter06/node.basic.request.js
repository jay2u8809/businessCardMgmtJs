/**
 * リクエスト
 */

// Modules
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {

    const pathname = url.parse(req.url).pathname;

    if (pathname == '/') {
        fs.readFile('../resources/html/HTMLPage.html', (err, data) => {
            res.writeHead(200, {    'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (pathname == '/OtherPage') {
        fs.readFile('../resources/html/OtherHTMLPage.html', (err, data) => {
            res.writeHead(200, {    'Content-Type': 'text/html' });
            res.end(data);
        });
    }

}).listen(52273, () => {
    console.log('Server Running Port Number : 52273');
});

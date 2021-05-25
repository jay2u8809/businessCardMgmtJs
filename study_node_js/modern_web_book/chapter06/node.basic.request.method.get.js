/**
 * リクエストメソッド（Get）
 */

// Module
const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    let query = url.parse(req.url, true).query;

    res.writeHead(200, {    'Content-Type': 'text/html' });
    res.end('<h1>' + JSON.stringify(query) + '</h1>');

    if (req.method == 'GET') {
        console.log('Get Method');
    } else if (req.method == 'POST') {
        console.log('POST Method');
    }

}).listen(52273, () => {
   console.log('Server Running Port Number : 52273');
});

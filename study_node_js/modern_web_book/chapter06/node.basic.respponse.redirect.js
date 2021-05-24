/**
 * リダイレクト
 */

const http = require('http');

http.createServer((req, res) => {

    // redirect
    res.writeHead(302, {
        'Location': 'https://www.google.com'
    });

    res.end();

}).listen(52273, () => {
    console.log('Server Running Port Number : 52273');
});
/**
 * forever module
 * シングルスレッドのNode.jsの例外のためなモジュール
 */

const http = require('http');

http.createServer((req, res) => {

    if (req.url == '/') {
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write(' <title>Forever</title>');
        res.write('</head>');
        res.write('<body>');
        res.write(' <h1>Forever</h1>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    } else {
        error.error.error();
    }

}).listen(52273, () => {
    console.log('Server Running Port Number : 52273');
});

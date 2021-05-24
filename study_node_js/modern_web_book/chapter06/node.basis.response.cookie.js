/**
 * クッキー
 * Name = Value; Expires = 日付; Domain = ドメイン; Path = 経路; Secure
 */

const http = require('http');

http.createServer((req, res) => {

    // cookie date
    let date = new Date();
    date.setDate(date.getDate() + 7);

    // cookie
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breakfast = toast; Expires = ' + date.toUTCString(),
            'dinner = chicken'
        ]
    });

    // display cookie data
    res.end('<h1>' + req.headers.cookie + '</h1>');

}).listen(52273, () => {
   console.log('Server Running Port Number : 52273');
});
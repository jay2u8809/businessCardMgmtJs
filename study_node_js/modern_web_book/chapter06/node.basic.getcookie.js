/**
 * クッキー情報の取得
 */

const http = require('http');

http.createServer((req, res) => {

    // Get Cookie
    let cookie = req.headers.cookie;

    if (cookie) {

        let cookieData = cookie.split(';').map(f => {
            let elements = f.split('=');
            return {
                key: elements[0],
                value: elements[1]
            };
        });

        res.end('<h1>' + JSON.stringify(cookieData) + '</h1>');
    } else {

        // Set Cookie
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': [
                'name = RintIanTta',
                'region = Seoul'
            ]
        });

        // response
        res.end('<h1>クッキーを生成しました。</h1>');
    }

    }).listen(52273, () => {
   console.log('Server Running Port Number : 52273');
});
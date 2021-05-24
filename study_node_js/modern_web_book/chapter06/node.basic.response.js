/**
 * レスポンスオブジェクト
 * Response Object
 */

require('http').createServer((req, res) => {

    // レスポンスの「ヘッダー」
    res.writeHead(200, {    'Content-Type': 'text/html' });

    // レスポンスの「本文」
    res.end('<h1> Hello Web Server with Node.js </h1>');

}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});
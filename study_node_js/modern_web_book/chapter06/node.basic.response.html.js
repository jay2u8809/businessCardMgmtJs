/**
 * レスポンス：HTMLファイル読み込み
 */

// ファイルモジュール
const fs = require('fs');
// httpモジュール
const http = require('http');

http.createServer((req, res) => {

    // HTML読み込み
    fs.readFile('./HTMLPage.html', (err, data) => {
        res.writeHead(200, {    'Content-Type': 'text/html' });
        res.end(data);
    });

}).listen(52273, () => {
    console.log('Sever Running at http://127.0.0.1:52273');
});
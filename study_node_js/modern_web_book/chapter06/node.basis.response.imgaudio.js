/**
 * レスポンス：画像、音楽ファイル読み込み
 */

// ファイルモジュール
const fs = require('fs');
// httpモジュール
const http = require('http');

// make server port number 52273 (image)
http.createServer((req, res) => {
    // 画像ファイルの読み込み
    fs.readFile('../media/wallpaper.jpg', (err, data) => {
        res.writeHead(200, {    'Content-Type': 'image/jpg'    });
        res.end(data);
    });
}).listen(52273, () => {
    console.log('Sever Running at http://127.0.0.1:52273');
});

// make server port number 52274 (music)
http.createServer((req, res) => {
    // 音楽ファイルの読み込み
    fs.readFile('./media/test.mp3', (err, data) => {
        res.writeHead(200, {    'Content-Type': 'audio/mp3' });
        res.end(data);
    });
}).listen(52274, () => {
    console.log('Sever Running at http://127.0.0.1:52274');
});
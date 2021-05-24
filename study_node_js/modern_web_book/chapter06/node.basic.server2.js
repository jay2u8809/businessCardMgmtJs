
const server = require('http').createServer();


// クライアント側のリクエストがある際に発生するイベント
server.on('request', (code) => {
    console.log('Request On');
});

// クライアントが接続する際に発生するイベント
server.on('connection', (code) => {
   console.log('Connection On');
});

// サーバーが終了になる際に発生するイベント
server.on('close', (code) => {
   console.log('Close On');
});

//
server.listen(52273);
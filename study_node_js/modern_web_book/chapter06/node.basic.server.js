/**
 * Httpモジュール
 */

const server = require('http').createServer();

// server ports number : 52273
// server start
server.listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273')
});

let test = () => {
    console.log('Server Terminated');
    // server terminated
    server.close();
};

setTimeout(test, 10000)
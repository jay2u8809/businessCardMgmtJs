/**
 * イベントの連結
 */

// Exit event
process.on('exit', (code) => {
   console.log('Good bye!');
});

// UncaughtException event
process.on('uncaughtException', (error) => {
    console.log('Throw Exception!');
});

let cnt = 0;
let test = () => {
    cnt += 1;
    if (cnt > 3)    return;

    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test,  2000);
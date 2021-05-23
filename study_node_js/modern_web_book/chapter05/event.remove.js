/**
 * イベント削除
 */

let onUncaughtException = (error) => {
    console.log('Throw Exception');

    // process.removeListener('uncaughtException', onUncaughtException);
};

// process.on('uncaughtException', onUncaughtException);
process.once('uncaughtException', onUncaughtException);

const test = (error) => {
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test, 2000);
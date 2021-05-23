/**
 * 強制的にイベント発生
 */

process.on('exit', (code) => {
   console.log('Good Bye');
});

// 該当イベントリスナーのみ実行させる（プログラムは終了されない）
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// プログラムの終了
process.exit();

console.log('Program Processing');
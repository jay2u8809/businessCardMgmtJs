/**
 * イベントの生成
 */

// EventEmitter Object
const EventEmitter = require('events');
let custom = new EventEmitter();

custom.on('tick', (code) => {
    console.log('Process Event');
});

custom.emit('tick');
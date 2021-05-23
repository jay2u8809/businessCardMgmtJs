
const EventEmitter = require('events');
exports.timer = new EventEmitter();

setInterval(() => {
    exports.timer.emit('tick');
}, 1000);
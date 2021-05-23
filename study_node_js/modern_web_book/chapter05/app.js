
let rint = require('./rint');

rint.timer.on('tick', (code) => {
    console.log('processing event');
});
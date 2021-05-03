// how to use os module

const moduleOs = require('os');

let data = moduleOs.hostname();
console.log(`os.hostname : ${data}`);
data = moduleOs.type() ;
console.log(`os.type : ${data}`);
data = moduleOs.platform() ;
console.log(`os.platform : ${data}`);
data = moduleOs.arch();
console.log(`os.arch : ${data}`);
data = moduleOs.release() ;
console.log(`os.release : ${data}`);
data = moduleOs.uptime() ;
console.log(`os.uptime : ${data}`);
data = moduleOs.loadavg() ;
console.log(`os.loadavg : ${data}`);
data = moduleOs.totalmem() ;
console.log(`os.totalmem : ${data}`);
data = moduleOs.freemem() ;
console.log(`os.freemem : ${data}`);
data = moduleOs.cpus() ;
console.log(`os.cpus : ${data}`);
data = moduleOs.networkInterfaces() ;
console.log(`os.networkInterfaces : ${data}`);


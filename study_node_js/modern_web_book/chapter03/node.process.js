// process.argv
process.argv.forEach((item, index) => {
    // print
    console.log(index + ` : ` + typeof(item) + ` : `, item);

    // --exti
    if (item == '--exit') {
        let exitTime = Number(process.argv[index + 1]);
        setTimeout(() => {
            process.exit();
        }, exitTime);
    }
})

console.log(`-process.env : `, process.env);
// node version
console.log(`-process.version : `, process.version);
// all modules versions
console.log(`-process.versions : `, process.versions);
console.log(`-process.arch : `, process.arch);
console.log(`-process.platform : `, process.platform);
console.log(`-process.connected : `, process.connected);
console.log(`-process.execArgv : `, process.execArgv);
console.log(`-process.exitCode : `, process.exitCode);
console.log(`-process.mainModule : `, process.mainModule);
console.log(`-process.release : `, process.release);

console.log(`-process.memoryUsage() : `, process.memoryUsage());
console.log(`-process.uptime() : `, process.uptime());
console.log(`-process.uptime() : `, process.uptime());
console.log(`-process.uptime() : `, process.uptime());


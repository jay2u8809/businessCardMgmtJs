// how to use file system module

const fs_module = require('fs');

let text = fs_module.readFileSync('./textfile.txt', 'utf-8');
// Sync type : read file
console.log(`file content : ${text}`);

// Async type : read file
fs_module.readFile('./textfile.txt', 'utf-8', (error, data) => {
    console.log(`file data : ${data}`);
});

let data = 'Hello World...';
// Sync type : write file
fs_module.writeFileSync('./TextFileOtherWriteSync.txt', data, 'utf-8');
console.log(`WRITE FILE SYNC COMPLETE`);

// Async type : write file
fs_module.writeFile('./TextFileOtherWrite.txt', data, 'utf-8', (error) => {
    console.log(`WRITE FILE ASYNC COMPLETE`);
});



// Sync type :  Error Exception
try {
    let data2 = fs_module.readFileSync('./textfile.txt', 'utf-8');
    console.log(`data2 : ${data2}`);
} catch (e) {
    console.log(`ReadSync file Error : ${e}`);
}

try {
    fs_module.writeFileSync('./TextFileOtherWriteSync2.txt', 'Hello World Write Sync 2', 'utf-8');
    console.log(`FILE WRITE COMPLETE`);
} catch (e) {
    console.log(`WriteSync file Error : ${e}`);
}

// Async type : Error Exception
fs_module.readFile('./textfile.txt', 'utf-8', (error, data) => {
    if (error) return console.log(`Read file Error : ${error}`);
    console.log(`Reda File data : ${data}`);
});

fs_module.writeFile('./TextFileOtherWrite2.txt', 'Hello World Write 2', 'utf-8', (error) => {
    if (error) return console.log(`Read file Sync Error : ${error}`);
    console.log(`Reda File data : ${data}`);
});

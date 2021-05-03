// how to use crypto module

const crypto_module = require('crypto');

let shasum = crypto_module.createHash('sha256');
console.log(`createHash : ${shasum}`);

shasum.update('crypto_hash');
console.log(`createHash : ${shasum}`);

let output = shasum.digest('hex');
console.log(`digest : ${output}`);

let key = 'my password';
let input = 'PASSWORD';

let cipher = crypto_module.createCipher('aes192', key);
cipher.update(input, 'utf-8', 'base64');
let cipheredOutput = cipher.final('base64');

let decipher = crypto_module.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf-8');
let decipherOutput = decipher.final('utf-8');

console.log(`original : ${input}`);
console.log(`cipher : ${cipheredOutput}`);
console.log(`decipher : ${decipherOutput}`);
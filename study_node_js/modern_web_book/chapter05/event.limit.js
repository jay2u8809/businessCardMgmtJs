/**
 * イベント連結数量の制限
 * デフォルト：10個
 */

const CNT_MAX_EVENTS = 3;
process.setMaxListeners(CNT_MAX_EVENTS);

let cnt = 1;
// 01
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 02
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 03
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 04
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 05
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 06
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 07
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 08
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 09
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 10
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
// 11
process.on('exit', () => {});
console.log(`${cnt}`, cnt++);
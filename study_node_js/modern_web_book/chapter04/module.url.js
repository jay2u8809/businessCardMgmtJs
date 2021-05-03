// how to use url module

const moduleUrl = require('url');

let parseObject = moduleUrl.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(`${parseObject}`);

parseObject = new URL('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(`protocol : ${parseObject.protocol}`);
console.log(`slashes : ${parseObject.slashes}`);
console.log(`auth : ${parseObject.auth}`);
console.log(`host : ${parseObject.host}`);
console.log(`port : ${parseObject.port}`);
console.log(`hostname : ${parseObject.hostname}`);
console.log(`hash : ${parseObject.hash}`);
console.log(`search : ${parseObject.search}`);
console.log(`searchParams : ${parseObject.searchParams}`);
console.log(`query : ${parseObject.query}`);
console.log(`pathname : ${parseObject.pathname}`);
console.log(`path : ${parseObject.path}`);
console.log(`href : ${parseObject.href}`);



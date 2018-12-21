'use strict';
let fs = require('fs');

let str = `'use strict';
let arr = ['bob','ann','paul'];

arr.forEach(name => {
  console.log(name);
});`;

let buffer = Buffer.alloc(str.length);
buffer.fill(str);

fs.writeFile('loop.js', buffer, function (err) {
  if (err) throw err;
});

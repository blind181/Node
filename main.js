'use strict';

const hello = require('./hello');

var s = 'Michael';

hello.greet(s);
hello.goodbye(s);
console.dir(hello.s);
console.dir(s);
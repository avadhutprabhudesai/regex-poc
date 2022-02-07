/*
* Create RegExp
	- Through object: new RegExp()
	- Through literal: /regex/
  Useful methods
	- RegExp
	  - test
	  - exec
	- String
	  - match
	  - search
	  - replace
	  - split
  Flags
	- Global
	- Case-insensitive
	- Multiline
*/

// case sensitive regex
const reg1 = /hello/,
  reg2 = /world/,
  reg3 = /\s/,
  reg4 = /s\s/g,
  reg5 = /t/gi;

const s1 = 'This is another string with lots of words.';

console.log(
  '\n\n=========================REGEX BASICS => RegExp and String methods================================'
);
console.log('\n------------------ RegExp test()\n');
console.log(reg1.test('Hello World!!! hello is just a greeting')); // true
console.log(reg2.test('Hello World!!! hello is just a greeting')); // false. case-sensitive regex. World !== world

console.log('\n------------------ RegExp exec()\n');
console.log(reg1.exec('Hello World!!! hello is just a greeting')); // array
console.log(reg2.exec('Hello World!!! hello is just a greeting')); // null. case-sensitive regex. World !== world

console.log('\n------------------ String match()\n');
console.log('hello world, hello'.match(reg1)); // array

console.log('\n------------------ String search()\n');
console.log('hello world, hello'.search(reg1)); // number

console.log('\n------------------ String replace()\n');
console.log('hello world, hello'.replace(reg1, 'hi')); // new string

console.log('\n------------------ String split()\n');
console.log('hello world hello'.split(reg3)); // array

console.log(
  '\n\n=========================REGEX BASICS => RegExp and String methods================================'
);

console.log(
  '\n\n=========================REGEX BASICS => Flags================================'
);
console.log('\n------------------ g flag\n');
// RegExp.exec() with global flag
console.log('\nRegExp.exec() with global flag: /s\\s/');
console.log(reg4.exec(s1));
console.log(reg4.exec(s1));
console.log(reg4.exec(s1));
console.log(reg4.exec(s1));

// String.match() with global flag
console.log('\nString.match() with global flag: /s\\s/\n');
console.log(s1.match(reg4));

console.log('\n------------------ i flag: /t/gi\n');
console.log(s1.match(reg5));

console.log(
  '\n\n=========================REGEX BASICS => Flags================================'
);

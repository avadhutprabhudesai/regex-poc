/**
 *    - \t tab
 *    - \r carriage return
 *    - \n newline
 *    - \v vertical tab
 */

console.log(
  '\n\n=========================SPECIFYING CHARACTERS => Control characters================================'
);

console.log('\n------------------ \t tab character\n');
const reg1 = /h\tt/g;
const s1 = 'hot het h@t h t h\tt hoot';
console.log(`"${s1}".match(${reg1})`);
console.log(s1.match(reg1));

console.log('\n------------------ \\n newline character\n');
const reg2 = /h\nt/;
const s2 = 'hot het h@t h\nt hoot';
console.log(`"${s2}".match(${reg2})`);
console.log(s2.match(reg2));
console.log(
  '\n\n=========================SPECIFYING CHARACTERS => Control characters================================'
);

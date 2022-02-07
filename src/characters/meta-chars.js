/**
 *    - . (Wildcard character)Match any single characters except some characters
 *    - \ (Escape character)Treat the metachar followed by \ as a normal string character
 */

console.log(
  '\n\n=========================SPECIFYING CHARACTERS => Meta characters================================'
);

console.log('\n------------------ . wildcard character\n');
const reg1 = /h.t/g;
const s1 = 'hot het h@t h t h t hoot';
console.log(`"${s1}".match(${reg1})`);
console.log(s1.match(reg1));

console.log('\n------------------ \\ escape character\n');
const reg2 = /h\.t/;
const s2 = 'hot het h@t h.t hoot';
console.log(`"${s2}".match(${reg2})`);
console.log(s2.match(reg2));
console.log(
  '\n\n=========================SPECIFYING CHARACTERS => Meta characters================================'
);

/**
 *    - character range
 *    - number range
 *    - multiple char sets
 *    - multiple ranges in 1 char set
 *    - matching for - (hyphen) in the char set.
 *    - how to match 2 digit numbers in a range.
 *    - excluding the range
 *    - shorthand for inclusion
 *    - shorthand for exclusion
 *
 */

console.log(
  '\n\n=========================SPECIFYING CHARACTERS => Character sets ================================'
);

(function () {
  console.log('\n------------------ character range\n');
  const regex = /[a-e]/g;
  const str = 'A dog comes after cat in alphabetical order';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ number range\n');
  const regex = /[1-5]/g;
  const str = '123 is less than 234 and is greater than 65';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ multiple char sets\n');
  const regex = /[1-9][0-9]/g;
  const str = '1 120 3 99 1 77';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ multiple char sets\n');
  const regex = /[0-9a-fA-F]/g;
  const str = '0x34FE5255E';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ matching for - in a string\n');
  const regex = /[1\-3]/g;
  const str = '21-345';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ matching 2 digit number in a range\n');
  const regex = /[1][0-9]/g;
  const str = '10 9 12 7 33 99 19 20';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ Excluding a range\n');
  const regex = /[^a-zA-Z0-9 ]/g;
  const str = '/Regex to include speci@l ch@rs only!~#$%^)';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ Shorthand for digit inclusion\n');
  const regex = /\d/g;
  const str = 'This regex includes only (12345) numbers like 12345';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();
(function () {
  console.log('\n------------------ Shorthand for word inclusion\n');
  const regex = /\w/g;
  const str = 'all digits 12345 1 3, words and _';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();
(function () {
  console.log('\n------------------ Shorthand for space inclusion\n');
  const regex = /\s/g;
  const str = 'This regex includes all kinds of whitespace like 12345\t\n ';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ Shorthand for digit exclusion\n');
  const regex = /\D/g;
  const str = 'This regex excludes all (12345) numbers like 12345';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();
(function () {
  console.log('\n------------------ Shorthand for word exclusion\n');
  const regex = /\W/g;
  const str = 'excludes all digits 12345 1 3, words and _';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();
(function () {
  console.log('\n------------------ Shorthand for space exclusion\n');
  const regex = /\S/g;
  const str = 'This regex excludes all kinds of whitespace like 12345\t\n ';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

console.log(
  '\n\n=========================SPECIFYING CHARACTERS => Character sets ================================'
);

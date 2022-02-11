/**
 *    - parenthesis
 *    - capturing groups
 *    - non capturing groups
 *    - application of capturing groups
 *    - named capture groups
 *    - lookahead groups
 *
 */

console.log(
  '\n\n========================= GROUPING ================================'
);

(function () {
  console.log('\n------------------  Without parenthesis\n');
  const regex = /[0-9]-{2,}/gi;
  const str = '1-1-';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------  With parenthesis\n');
  const regex = /([0-9]-){2,}/gi;
  const str = '1-1-';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ without capturing groups \n');
  const regex = /(\d{4})[/.-](\d{1,2})[/.-](\d{1,2})/gi;
  const str = '2022/2-3'; //Notice how year and month separated by / and month and date separated by -. Yet this is a match.
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ with capturing groups \n');
  const regex = /(\d{4})([/.-])(\d{1,2})\2(\d{1,2})/gi;
  const str = '2022/2/3'; // Now both separate has to be either / or - . Both 2022/2-3 or  2022-2/3 would be invalid
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ non-capturing groups \n');
  const regex = /(?:\d{4})([/.-])(\d{1,2})\1(\d{1,2})/gi; // Since first parenthesis marked with ?:, it becomes the non-capturing group. ([/.-]) becomes the new 1st capturing groups and thus is used with \1 later in the expression
  const str = '2022/2/3';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ application: identifying opening and closing of html tags \n'
  );
  const regex = /<(\w+>)[\s\w]*<\/\1/gi;
  const str =
    '<strong>This is a strong tag </strong><i>This is an italic tag </i>';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ named capture groups \n');
  const regex = /<(?<tag>\w+>)[\s\w]*<\/\k<tag>/gi;
  const str =
    '<strong>This is a strong tag </strong><i>This is an italic tag </i>';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ lookahead groups: domain extraction \n');
  const regex = /\w+(?=.com)/gi;
  const str =
    'frontendmasters.com is way better than udemy.com, coursera.com and pluralsight.com';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ lookahead groups: password validator \n');
  const regex = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g; //if we add i flag, then (?=.*[A-Z]) is equivalent to (?=.*[a-z])

  const str = 'aB7lkkjdldk';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
  console.log(`"${'alksldkdj'}".match(${regex})\n`);
  console.log('alksldkdj'.match(regex));
  console.log(`"${'9948938H'}".match(${regex})\n`);
  console.log('9948938'.match(regex));
  console.log(`"${'sJ8'}".match(${regex})\n`);
  console.log('sJ8'.match(regex));
})();

(function () {
  console.log('\n------------------ lookabehing groups: currency \n');
  const regex = /(?<=\$|£)\d+/g;

  const str = '$123 £324';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

console.log(
  '\n\n========================= GROUPING ================================'
);

/**
 *    - {min,max}
 *    - {min}
 *    - {min,}
 *    - {min, max} with lazy
 *
 *
 */

console.log(
  '\n\n========================= REPETITION => Specifying the amount ================================'
);

(function () {
  console.log('\n------------------ {min,max} \n');
  const regex = /\d{1,2}\/\d{1,2}\/\d{2,4}/gi;
  const str = '22/2/1932';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ {min} \n');
  const regex = /\d{3}/gi;
  const str = '2333 234 1200 778 314 31 657 56456';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ {min,} \n');
  const regex = /\d{3,}/gi;
  const str = '2333 234 1200 778 314 31 657 56456';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ {min,max} \n');
  const regex = /\d*\.\d{2,}?/gi;
  const str = '3.1415926535';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();
console.log(
  '\n\n========================= REPETITION => Specifying the amount ================================'
);

/**
 *    - +
 *    - ?
 *    - *
 *
 */

console.log(
  '\n\n========================= REPETITION => Repetition Characters ================================'
);

(function () {
  console.log('\n------------------ + : One or more occurrences\n');
  const regex = /bang!+/gi;
  const str = 'Some say bang! Some shout bang!!!!!';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ + : One or more occurrences\n');
  const regex = /\d0+/gi;
  const str = 'All 10 numbers 300 ending with 4803 0 should be captured';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ ? : Zero or one occurrence\n');
  const regex = /colou?r/gi;
  const str = 'Some spell color, others spell colour';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ * : Zero or more occurrences\n');
  const regex = /apples*/gi;
  const str = 'I found an apple, while others found loads of apples';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

console.log(
  '\n\n========================= REPETITION => Repetition Characters ================================'
);

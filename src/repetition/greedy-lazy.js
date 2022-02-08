/**
 *    - Greedy expressions
 *    - Lazy expressions
 *
 */

console.log(
  '\n\n========================= REPETITION => Greedy vs Lazy ================================'
);

(function () {
  console.log('\n------------------ Greedy expressions \n');
  const regex = /<p>.*<\/p>/gi;
  const str =
    '<p>Should match this p tag separately</p><p>But matches both as one because of greediness</p>';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

(function () {
  console.log('\n------------------ Lazy expressions \n');
  const regex = /<p>.*?<\/p>/gi;
  const str =
    '<p>Now this p tag is one match</p><p>And this is a separate match</p>';
  console.log(`"${str}".match(${regex})`);
  console.log(str.match(regex));
})();

console.log(
  '\n\n========================= REPETITION => Greedy vs Lazy ================================'
);

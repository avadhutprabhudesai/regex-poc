/**
 *  - At start of the line
 *  - At end of the line
 *  - Multi line flag
 *  - Word boundaries
 *  - Non-Word boundaries
 *
 */

console.log(
  '\n\n========================= ANCHORS => Positioning the match ================================'
);

(function () {
  console.log(
    '\n------------------ at the start of the line without multi line flag \n'
  );
  const regex = /^the/gi;
  const str =
    'The regex matches the expression at the \
  start of \
  the new line \
  without newline character';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ at the end of the line without multi line flag\n'
  );
  const regex = /\.$/gi;
  const str =
    'The regex matches the expression. at \nthe start of. \nthe new line.\nwithout newline character.';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ at the start of the line with multi line flag \n'
  );
  const regex = /^the/gim;
  const str =
    'The regex matches the expression at \nthe start of\nthe new line\nwith newline character';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ at the end of the line with multi line flag\n'
  );
  const regex = /\.$/gim;
  const str = 'line1.\nline2.\nline3.';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ word boundaries: non word character before the word \n'
  );
  const regex = /\bplan/gim;
  const str =
    'Saving the planet with planting the trees sounds like a great plan';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ word boundaries: non word character after the word \n'
  );
  const regex = /plan\b/gim;
  const str =
    'Saving the planet with planting the trees sounds like a great plan';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ word boundaries: non word character before and after the word \n'
  );
  const regex = /\bplan\b/gim;
  const str =
    'Saving the planet with planting the trees sounds like a great plan';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

(function () {
  console.log(
    '\n------------------ non-word boundaries: word character before and after the word \n'
  );
  const regex = /\Bplan\B/gim;
  const str =
    'Implant: Saving the planet with planting the trees sounds like a great plan';
  console.log(`"${str}".match(${regex})\n`);
  console.log(str.match(regex));
})();

console.log(
  '\n\n========================= ANCHORS => Positioning the match ================================'
);

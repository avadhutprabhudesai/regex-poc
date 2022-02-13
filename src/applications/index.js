/**
 *    Email
 */

console.log(
  '\n\n========================= APPLICATIONS ================================'
);

(function () {
  console.log('\n------------------  matching email address\n');
  const regex = /^[^\s@.]+@[^\s@.]+\.(com|org|in)$/;
  const e1 = 'avadhut@gmail.com',
    e2 = 'avadhut@gmail.in',
    e3 = 'avadhut@gmail.org',
    e4 = 'avadhu t@gmail.com',
    e5 = 'ava@dhut@gmail.com',
    e6 = 'avadhut@gma.il.com';

  console.log(`"${regex}".test(${e1})`);
  console.log(regex.test(e1));
  console.log(`"${regex}".test(${e2})`);
  console.log(regex.test(e2));
  console.log(`"${regex}".test(${e3})`);
  console.log(regex.test(e3));
  console.log(`"${regex}".test(${e4})`);
  console.log(regex.test(e4));
  console.log(`"${regex}".test(${e5})`);
  console.log(regex.test(e5));
  console.log(`"${regex}".test(${e6})`);
  console.log(regex.test(e6));
})();

(function () {
  console.log('\n------------------  matching twitter handle\n');
  // Should contain @ as the first letter
  // Should contain all lowercase letters and there should be at least one of them
  // Should contain at least 1 digit
  // Should not contain a space
  // Should not contain a caps letter
  const regex = /^@(?=.*\d+)(?=.*[a-z]+)(?!.*[A-Z])\w+$/;
  const e1 = '@avid236',
    e2 = '@avid23 6',
    e3 = '@avid23@6',
    e4 = '@avi.d236',
    e5 = '@sdfasfasd',
    e6 = '@Ajflskdfl1',
    e7 = '@4444';

  console.log(`"${regex}".test(${e1})`);
  console.log(regex.test(e1));
  console.log(`"${regex}".test(${e2})`);
  console.log(regex.test(e2));
  console.log(`"${regex}".test(${e3})`);
  console.log(regex.test(e3));
  console.log(`"${regex}".test(${e4})`);
  console.log(regex.test(e4));
  console.log(`"${regex}".test(${e5})`);
  console.log(regex.test(e5));
  console.log(`"${regex}".test(${e6})`);
  console.log(regex.test(e6));
  console.log(`"${regex}".test(${e7})`);
  console.log(regex.test(e7));
})();

(function () {
  console.log('\n------------------  password tester\n');

  // should contain at least 1 uppercase
  // should contain at least 1 lowercase
  // should contain at least 1 digit
  // should contain at least 1 character from !@#$%^&*
  // should contain at least 5 characters
  // should not contain white spaces
  // should not be more than 10 chars

  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*\s)(?=.*[!@#$%^&*])[\w\W]{5,10}$/;
  const e1 = 'asdf@3D',
    e2 = 'asdf#3F',
    e3 = 'AASSDD@1',
    e4 = 'aasfsdsdfsdfD1',
    e5 = 'sdasdfasdfasdfasdfas',
    e6 = '1111222',
    e7 = 'as @Df2';

  console.log(`"${regex}".test(${e1})`);
  console.log(regex.test(e1));
  console.log(`"${regex}".test(${e2})`);
  console.log(regex.test(e2));
  console.log(`"${regex}".test(${e3})`);
  console.log(regex.test(e3));
  console.log(`"${regex}".test(${e4})`);
  console.log(regex.test(e4));
  console.log(`"${regex}".test(${e5})`);
  console.log(regex.test(e5));
  console.log(`"${regex}".test(${e6})`);
  console.log(regex.test(e6));
  console.log(`"${regex}".test(${e7})`);
  console.log(regex.test(e7));
})();

(function () {
  console.log('\n------------------  tag changer\n');

  // change all p tags to span tags

  const regex = /(?<=.*[</?])p(?=.*[>])(?!\s)/g;
  const e1 =
    '<p> this is a <p p> first p tag </p><p> this is a second p tag </p>';
  const repleacement = 'span';
  console.log(`"${e1}".replaceAll(${repleacement})`);
  console.log(e1.replaceAll(regex, repleacement));
})();

(function () {
  console.log('\n------------------  word combination identifier\n');

  // identify if words 'task' and 'closed' are in the vicinity of each other i.e. if they have at the max 5 words or unlimited spaces between them.

  const regex =
    /(\btask\W+(\w+\W+){0,5}closed\b)|(\bclosed\W+(\w+\W+){0,5}task\b)/g;
  const e1 =
    'The task I worked on got closed. Also I closed the first task from the dashboard';
  console.log(`"${regex}".test(${e1})`);
  console.log(regex.test(e1));
})();

(function () {
  console.log('\n------------------  date format validator\n');

  // Following are the valid formats for date
  // dd/mm/yyyy
  // dd/m/yyyy
  // d/mm/yyyy
  // d/m/yyyy
  // yyyy/dd/mm
  // yyyy/dd/m
  // yyyy/d/mm
  // yyyy/d/m
  // separators can be /, - but have to be same throughout
  // months and day values are not validated against actual calendar

  const regex =
    /(?:(?:\d{1,2})([/-])(?:\d{1,2})\1(?:\d{4}))|(?:(?:\d{4})([/-])(?:\d{1,2})\2(?:\d{1,2}))/;
  const dates = [
    '02/03/2022',
    '2/3/2022',
    '02/12/2022',
    '2/12/2022',
    '02/3/2022',
    '2/3/2022',
    '02/03/2022',
    '2022/02/03',
    '2022/2/3',
    '2022/02/12',
    '2022/2/12',
    '2022/02/3',
    '2022/2/3',
    '2022/02/03',
    '02/03/2022',
    '2-3-2022',
    '02-12-2022',
    '2-12-2022',
    '02-3-2022',
    '2-3-2022',
    '02-03-2022',
    '2022-02-03',
    '2022-2-3',
    '2022-02-12',
    '2022-2-12',
    '2022-02-3',
    '2022-2-3',
    '2022-02-03',
  ];

  for (const d of dates) {
    console.log(`"${regex}".test(${d})`);
    console.log(regex.test(d));
  }
})();

(function () {
  console.log('\n------------------  date value validator\n');

  // Given a date format, validate if the day and month values are correct
  // Valid formats are as following
  // dd/mm/yyyy
  // d/m/yy
  const regex =
    /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2})?([0-9]{2})$/;
  //;
  const dates = [
    '01/02/2022',
    '01/12/2022',
    '1/2/22',
    '01/2/2022',
    '1/02/2022',
    '1/2/20222',
    '33/2/2022',
    '1/22/2022',
    '0/0/2022',
    '122/2/2022',
  ];

  for (const d of dates) {
    console.log(`"${regex}".test(${d})`);
    console.log(regex.test(d));
  }
})();

console.log(
  '\n\n========================= APPLICATIONS ================================'
);

//excercise 4
//Front-End Web Development - D | 18 September 2025

//Kalangie, Juliani Iriani

//______________________________________________________________________

// 1. Menggunakan arrow function dan string literal
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = object => {
  const age = calculateAge(object.year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. Menggunakan arrow function dan reduce untuk menggantikan for loop
const addNumber = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Menggunakan const, arrow function, dan string literal
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = obj => phi * Math.pow(obj.radius, obj.power);

radius = 21;
const area21 = calculateArea({ radius: radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius: radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Menggunakan default parameter
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com');
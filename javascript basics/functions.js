console.log("Welcome to functions");

/**
 * 1. FUNCTION DECLARATION
 * First Name :- Thalla
 * Last Name:- Ajay
 *
 * Here firstName and lastName are input parameters .
 * Input parameters are nothing but the variables that we are passing to that function.
 * --- FUNCTION SHOULD ALWAYS RETURN SOMETHING ------
 *
 */

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(getFullName("AJAY", "KISHAN"), "[Function declaration]");

// console.log(output,'[OUTPUT]')

/**
 * 2. FUNCTION EXPRESSION.
 *
 * If we assign any function to a variable , it becomes function expression.
 * We can call the function using that variable instead of function name.
 */

const fullName = function fetchFullName(fName, lName) {
  return fName + " " + lName;
};

console.log(fullName("Ishan", "Kishan"), "[Function expression]");

/**
 * 3. ARROW FUNCTIONS.
 *      1) Easy to write the function with less syntax.
 *      2) No need of writing return keyword if the code written in a single line.
 *      3) No need of writing curly braces when code is writen in single line.
 *      4) Arrow function can access its lexical scope.
 */

// String manipulation
const formatName = (fName, lName) => fName + " " + lName;
console.log(formatName("Rohit", "Sharma"), "[Arrow function]");

// Number manipulation

const multiplyNumbers = (num1, num2) => num1 + num2;
console.log(multiplyNumbers(3, 5), "[Number manipulation]");

// Array manipulation
const numbers = [2, 3, 43, 21, 41, 65];

const sumOfNumbers = (numbersList) => {
  let total = 0; //2 , 5,
  for (let number = 0; number < numbersList.length; number++) {
    total = total + numbersList[number];
  }
  return total;
};

console.log(sumOfNumbers(numbers), "[SUM OF NUMBERS]");


const reduceExample = numbers.reduce((acc,value)=> acc + value);

console.log(reduceExample,'[USING REDUCE]')

/**
 * CASING
 *      - Upper case
 *          Eg:- ISHAN KISHAN
 *      - Lower case
 *          Eg:- ishan kishan
 *      - Camel case
 *          Eg:- ishanKishan
 *               getFullName
 *      - Pascal case
 *          Eg:- ishan_kishan
 *               get_full_name
 *
 */

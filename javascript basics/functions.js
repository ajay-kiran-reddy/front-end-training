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

const reduceExample = numbers.reduce((acc, value) => acc + value);

console.log(reduceExample, "[this output is done using reduce]");

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

/**
 * ES6
 *    - ECMA SCRIPT (2015)
 *        It will set some standards where other programming languages will adhere to
 *        - Javascript
 *        - Type script
 *        - Vanilla Javascript
 *
 *    Features released as part of es6
 *          - Var is replaced by Let and Const
 *          - Template Strings
 *          - Arrow functions
 *          - Default paramters
 *          - Destructuring
 */

// DEFAULT PARAMETERS

let fName = "Thalla";
let lName = "Ajay";

let fullName1 = fName + " " + lName;

let fullName2 = `${fName} ${lName}`;

console.log(fullName1, "Full Name 1");
console.log(fullName2, "[Full name 2]");

function calculateAmount(amount, tax = 200) {
  return amount + tax;
}

// console.log(calculateAmount(5000))

const output = calculateAmount(5000);

console.log("[output]", output);

//DESTRUCTURING

/**
 * Cloning of all the elements in an array or all the key value pairs of an object
 * and displaying the required data is called destructing
 *
 * You can destructure an array by using spread(...) operator.
 *
 */


//Array destructuring

const originalArray = [20,25,40,50,60];

const [first,last] = originalArray;

console.log(first,'[first]');
console.log(last,'[last]');


// Object desstructuring

const person = {
  name: "Kishan",
  age: 25,
  place: "USA",
  height: "5.10",
  weight: 80,
  skils:{
    frontend:{
        react:['css','html','redux','saga']
    },
    backend:{
      nest:['express','mongodb']
    }
  }
};


const {name,age,place,height,weight} = person; // object destructing
console.log(name,'[name]');
console.log(age,'[age]');
console.log(place,'place')


console.log(person.skils.frontend.react,'[REACT SKILLS]')

const {frontend,backend} = person.skils;

console.log(frontend,'[frontend]');
console.log(backend,'[backend]')



// SPREAD OPERATOR
const firstArray = [1, 2, 3, 4, 5];
const secondAarray = [6, 7, 8, 9, 10]; // [1,2,3,4,5,6,7,8,9,10]

// const finalArray = firstArray + secondAarray; WRONG WAY

// const finalArray = firstArray.concat(secondAarray) // concat property is used in es5 versions
// ...firstArray will get all the elements in the firstArray variable and spreads
// ...firstArray will get all the elements in the firstArray variable and spreads
// const finalArray = [...firstArray, ...secondAarray];
/**
 *  TASK :-
 *        a) Functions
 *        Calculate total amount that has to be paid by the user.
 *
 *        1) Create a function calculateTotalAmount.
 *        2) It should accept amount which is a number and tax percentage which is also a number and discount percentage which is also a number
 *        3) It should return amount plus taxable amount
 * 
 * 
 *        b) Object destructirng -  extract nest,express variables
 *              const projectTechStack = {
                        frontend:{
                            view:['React', 'Angular'],
                            stateManagement:'Redux',
                            middlewares:'Saga'
                        },
                        backend:{
                            nest:{
                              db:'Mongo db'
                            },
                            express:{
                              db:'My Sql'
                            }
                        }
                      }
 * 
 *          
 * 
 *      
 *
 */

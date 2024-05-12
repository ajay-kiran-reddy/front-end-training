/** 
 *1. Javascript is dynamically typed language
  It means based on the data type that you are assigning to a variables, browser will under stand its data type.
*/

// const a = [12,3,4,99]

// a = 'Ajay';

// a =  true;

// console.log(a)

/**
 * We canot re-assign new data or variables to const
 * We can assign a data to the const variable.
 * But , Re assigning of data to a const variables will throw run time errrs/ uncausght errors
 */

// let a = 'Ajay';

// a = [1,3,56]

// console.log(a)

/***
 * We can assign and reassign any variable to let .
 * Even we can change the data type of the variables for let , as it will not throw any run time errors.
 * It will hold data of last overrided statement.
 */

/***
 * 2. Javascript is a case sensitive
 */

let dbName = "Ajay";

uiName = "Ajay";

console.log(dbName === uiName);

/**
 *3. Javascript is a Synchrnous language
 * Synchrnous :-  Executing the code step by step without any delay.
 *
 * Asynchronous :- Exeution will happen asynchronously, which means it will pause and execute.
 * API
 * SetTimeOut
 * SetInterval
 * async await promises
 *
 * 1-5 lines of code executes javascript statements
 * 6-7 line will executes api service which is asynchronous
 * 8-10 lines will display the data that is coming from the api.
 */

console.log("Executing at 0 seconds");

/**
 * Set Time out will execute only once in a particular time interval.
 */
setTimeout(() => {
  console.log("Im executing after 5 seconds");
}, 5000);

/**
 * Set Interval is a series of execution which happens at regular intervals
 */

setInterval(() => {
  console.log(new Date());
}, 2000);
console.log("Im executing after 2 seconds");


/** 4. Client side scripting language*/

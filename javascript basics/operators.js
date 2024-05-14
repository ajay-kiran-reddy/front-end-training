/**
 * 1. BASIC OPERATORS
 *     	- Addition (+)
		- Subtraction (-)
		- Multiplication (*)
		- Division (/)
		- Grouping ()
		- Modulus (Remainder) (%)
		- Increments (++)
		- Decrements (--)
 */

// const array = [1,2,3,34,5,6];
// const obejct = {
//     id:1,
//     name:"Ajay"
// }

// let a = 3;
// let b = 2;

// const c = 5;

// console.log(a + b, "Addition");

// console.log(a - b, " Subtraction");

// console.log(a * b, "Multiplication");

// console.log(a / b, " Division");

// console.log((a * b + c) / c, "Grouping");

// console.log(a % b, " Modulus");

/**
 * INCREMENTING
 */
// let counter = 5;
// for (let i = 3; i <= 10; i++) {
//   // console.log('I Value ', i);
//   // console.log('Bfore incrementing ',counter)
//   counter = counter + 10;
//   // console.log('After Incrementing ', counter)
// }

// console.log(counter, "[COUNTER VALUE]");

/**
 * DECREMENTING
 */

// let deCounter = 17;
// for (i = 0; i <= 0; i++) {
//   deCounter--;
// }

// console.log(deCounter, "De counter");

/** 
 * COMPARISION OPERATORS - Used to comapre any two different variables.
 * 	- Equal = :- used for assigning variables
	- Double Equal ==  It will not check for the data type of variables. Where as , it will check only the value that particualr variables holds.
	- Triple Equal ===  It will check for both value and data type , if it matches itboth data type and value it will return true otherwise it will return false
	- Not Equal !=
	- Not double equal !==
	- Greter than >
	- Less than <
	- Greter than or equal to >=
	- Less than or equal to <=
*/

// const a = 10;
// const b = "10";

// console.log(a == b, "Double equals"); //TRUE

// console.log(a === b, "Triple Equals"); // FALSE

// console.log(a != b, "Not Equals To"); // FALSE
// console.log(a !== b, "Not double equals to"); //TRUE

// const c = 15;
// const d = 20;

// console.log(c > d, "Greater than");
// console.log(c < d, "Less than");

// const e = 32;
// const f = 33;

// console.log(e >= f, "Greater than or equals to ");
// console.log(e <= f, "Less than or equals to ");

/** 
 * LOGICAL OPERATORS
 *      - And &&
		- Or ||
		- Not !
*/

const ajay = 30; // adult
const kishan = 15; // child
const kiran = 60; //old

const majorAge = 18;

// Identify majors available in the given people list , which 18 +

// console.log(!ajay >= majorAge,'FIRST CONDITION');
// console.log( kishan >= majorAge , 'SECOND CONDITION');
// console.log(!kiran >= majorAge, 'THIRDB CONDITION')

if (!(ajay >= majorAge) || !(kishan >= majorAge) || !(kiran >= majorAge)) {
  //True || FALSE || TRUE -----> TRUE -----> FALSE
  console.log("All the given peoples are MAJORS");
} else {
  console.log("All the peoples are not majors.");
}

/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
//

const courseName = 'typescript'; // Always add an ; to the end of the line
// Stick to one quote type. I.e. Single or double quotes, use consistently
const courseName3 = `typescript`;
// There are just strings for characters in TS. No char etc. in TS

const amount = 10;
const canUseDecimals = 10.5;
const canUseExponents = 1e3; // 1000
const canUseOctals = 0o777;  // can use Octals, which are used in Linux permissions
const hexByte = 0xff;
const binary = 0b0100001;
const bigInt = 9000n; // need to end a bit int with 'n'
const yes = true;
const no = false;

const missing = undefined;  // unexpectedly missing
const empty = null; // we know it's missing
// can't reassign const

let someNum = 0;    // use if we want to reassign the value
someNum = 1;
someNum = 2;

// Can use variable shadowing/variable scope (useful in testing)
{
    let someNum = 5;    // someNum is 5 within this block
}

let hello;  // can create uninitialized variables, if we want to intialize later
// TS will give us an error if we try to use it later unassigned

hello = "hi";
hello = "hey";
hello = "hello";

// const whoops;    // can't create an uninitialized variable as we only have one
// chance with const to initialize it
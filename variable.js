// 1. Use strict
// added in ES 5
// use this for vanilla Javascript

"use strict";

// 2. Variable
// let (added in ES6)

let globalName = "global name";

{
  let name = "hellcat";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  var age;
  age = 4;
}

console.log(age);

// 3. Contants
// favor immutable data type always for a few reasons :
// - security
// - thread safety
// - reduce human mistakes
// result === {mutable: let, immutable: const}

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class functiuon

const count = 17; // integer
const size = 17.1; //decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speical numberic values: infinity, negative infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // over (-2^53) ~ (2^53)
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const hellcat = "hellcat";
const greeting = "hello " + hellcat;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${greeting}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = null;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const hellcat1 = { name: "hellcat1", age: 27 };
hellcat1.age = 20; // err => immutable type

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" + "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // ?? => err

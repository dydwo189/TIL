// 1. String concatenation
console.log('my' + 'cat')
console.log('1' + 2)
console.log(`string literals: 1 + 2 = ${1 + 2}`)

// 2. Numeric operators
console.log(1 + 1)
console.log(1 - 1)
console.log(1 / 1)
console.log(1 * 1)
console.log(1 % 1)
console.log(1 ** 1)

// 3. Increment and decrement operators
let counter = 2
const preIncrement = ++counter
// counter = counter + 1
// preincrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

const postIncrement = counter++
// postIncrement = counter
// counter = counter + 1
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`)
const preDecrement = counter++
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`)
const postDecrement = counter++
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3
let y = 6
x += y // x = x + y
x -= y
x *= y
x /= y

// 5. comparison operators
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // more than 
console.log(10 >= 6) // more than or equal

//  6. Logical operators: \\ (or), && (and), ! (not)
const value1 = false // if false => true, not a operating nexts
const value2 = 4 < 2

// \\ (or), find the first truthly value, So You need to place the heavy back.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first truthly value
console.log(`and: ${value1 && value2 && check()}`);

// often used to  copress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time 
        console.log('Hell')
    }
    return true
}

// ! (not)
console.log(!value1)

// 7. Equality
const stringFive = '5'
const numberFive = 5

// == loose equality, with type conversion
console.log(stringFive == numberFive)
console.log(stringFive != numberFive)

// === strict equality, no type conversion
console.log(stringFive === numberFive)
console.log(stringFive !== numberFive)

// object equality by reference
const hellcat1 = {
    name: 'hellcat'
}
const hellcat2 = {
    name: 'hellcat'
}
const hellcat3 = hellcat1
console.log(hellcat1 == hellcat2)
console.log(hellcat1 === hellcat2)
console.log(hellcat1 === hellcat3)

// equality - puzzler
console.log(0 == false) // t
console.log(0 === false) // f
console.log('' == false) // t
console.log('' === false) // f
console.log(null == undefined) // t
console.log(null === undefined) // f 

// 8. Conditional operators: if
// if, else if, else
const name = 'hellcat'
if (name === 'hellcat') {
    console.log('Welcome, Hellcat!')
} else if (name === 'coder') {
    console.log('You are amazing coder !!')
} else {
    console.log('unknown')
}

// 9. Ternary operators
// condition ? value1 : value2
console.log(name === 'hellcat' ? 'yes' : 'no')

// 10. Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in Ts
const browser = 'IE'
switch (browser) {
    case 'IE':
        console.log('go away!')
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('Like it!')
        break;
    default:
        console.log('same all!')
        break;
}

// 11. Loops
// while loop, while the condition is truthly,
// body code is executed.
let i = 3
while (i > 0) {
    console.log(`while: ${i}`)
    i--
}
// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`)
    i--
} while (i > 0)

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`)
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`Q1. ${i}`)
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break
    }
    console.log(`Q2. ${i}`)
}
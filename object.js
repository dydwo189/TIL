// Objects
// one of the JavaScript's data types.
// a collection of related data and.or functionality.
// Nearly all objects on JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {} // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax
function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const hellcat = {
    name: 'hellcat',
    age: 27
}
print(hellcat)

// with JavaScript magic (dynamically typed language)
// can be properties later
hellcat.hasJob = true
console.log(hellcat.hasJob)

//can delete properties later
delete hellcat.hasJob
console.log(hellcat.hasJob)

// 2. Computed properties
console.log(hellcat.name)
console.log(hellcat['name']) // key = string type
hellcat['hasJob'] = true
console.log(hellcat.hasJob)

function printValue(obj, key) {
    console.log(obj[key])
}
printValue(hellcat, 'name')
printValue(hellcat, 'age')

// 3. Property value shortand
const person1 = {
    name: 'bob',
    age: 2
}
const person2 = {
    name: 'steve',
    age: 3
}
const person3 = {
    name: 'dave',
    age: 4
}
const person4 = {
    name: 'tom',
    age: 60
}
console.log(person4)

// 4. Constructor functions
function makePerson(name, age) {
    // this = {};
    this.name = name
    this.age = age
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in hellcat)
console.log('age' in hellcat)
console.log('random' in hellcat)
console.log(hellcat.random)

// 6. for..in vs for..of
// for (key in obj)
console.clear()
for (key in hellcat) {
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5]
// for (let i = 0; i < array.length; i++) {
//      console.log(array[i])
// }
for (value of array) {
    console.log(value)
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user1 = {
    name: 'hellcat',
    age: '20'
}
const user2 = user1
user2.name = 'coder'
console.log(user1)

// old way
const user3 = {}
for (key in user1) {
    user3[key] = user1[key]
}
console.clear()
console.log(user3)

const user4 = Object.assign({}, user1)
console.log(user4)

// another example
const fruit1 = {
    color: 'red'
}
const fruit2 = {
    color: 'blue',
    size: 'big'
}
const mixed = Object.assign({}, fruit1, fruit2)
console.log(`${mixed.color}  ${mixed.size}`)
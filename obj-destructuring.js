// In this file, I will be learning about object destructuring in JavaScript.  
// Object destructuring allows us to extract properties from an object and assign them to variables in a more concise way.
// Let's say we have an object representing a person:
const person = {
    name: 'Jack',
    age: '30',
    occupation: 'Warehouse worker',
    House: 'Owner'    
};

// Usually to access aany of these properties, we would do something like this:

// const name =person.name
// const age  = person.age
// const occupation = person.occupation

// // If we keep going this way and we have 50 properties in "Person Object", it would take forever. instead, we do this

const {name, age, occupation, House} = person

// This way, we have all of the variables we need in one line of code
// If we want to make a sentence, we can do it likes this:

console.log(`${name} is a ${age} year old. He is a ${occupation} and is a ${House} of his house.`)


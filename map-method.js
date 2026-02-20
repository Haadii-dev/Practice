// In this script, I will be practicing the map method in JavaScript. The map method is used to create a new array by applying a function to each element of an existing array. It does not modify the original array.

// Lets say we have an array of numbers and we want to create a new array that contains the squares of those numbers:




const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(function(num){
    return num * num
})
console.log(squares)

// We can perform other functions too
const a = 9
const newArr = numbers.map(function(num){
    return num * a
})
console.log(newArr.join(', '))

// s
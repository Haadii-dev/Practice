// This is for practicing arrrow function, and map method.

const mul = (a, b) => a * b
console.log(mul(2,3))

const sum = (a, b) => a + b
console.log(sum(2,3))

const sub = (a, b) => a-b
console.log(sub(2,3))

const div = (a, b) => a/b
console.log(div(2,3))

const arrMul = [2, 3, 4, 5, 6 , 8]

const newArr = arrMul.map(num => num * 2)
console.log(newArr)


console.log(newArr.join(' | '))

// forEach does not return anything, it simply executes a provided function once for each array element. So, arr2 will be undefined.
const arr2 = arrMul.forEach(num => num*3)

console.log(arr2)


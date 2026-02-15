// We are going to populate an array with the join method. The join method is used to join all elements of an array into a string. It takes an optional separator as an argument, which is used to separate the elements in the resulting string. If no separator is provided, the default separator is a comma.

// We use .join() method with .map() a lot as .map() returns an array with a separator and .join() is used to join the elements of the array into a string.

const cars = ['BMW', 'TOYOTA', 'MERCEDES', ]

console.log(cars.join(' '))
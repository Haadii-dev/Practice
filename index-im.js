import data from './data-ex.js'


const searchFunction = (arr, keyword) => {
    return arr.filter(trip => {
        return trip.description.toLowerCase().includes(keyword)})
}

console.log(searchFunction(data, 'exotic'))
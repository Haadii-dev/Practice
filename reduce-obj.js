 const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]

const totalGrades = studentsArr.reduce((total, currentElement) => {
    return total+currentElement.grade
}, 0)


console.log(totalGrades)
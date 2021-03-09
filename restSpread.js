//rest

const numbers = (...args) => {
    let result = args.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    console.log(result)
}

const result = numbers(1, 3, 4, 5, 2, 42)

//spread

const people = ['fox', 'wb', 'hbo', 'star'];
console.log(...people)


const person = {
    name: 'Sudipta',
    address: 'AC 151',
    status: 'unemployed'
}

const personClone = { ...person, ph: 8910345282 };

console.log(person)
console.log(personClone)
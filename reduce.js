//returns how many instances meet your required criteria

const scores = [10, 20, 22, 45, 23, 11, 56]

const scoresReduced = scores.reduce((acc, curr) => {
    curr > 20 ? acc++ : acc
    return acc
}, 0)

console.log(scoresReduced)


const user = [
    { name: "Sudipta", premium: true, score: 89 },
    { name: "Ryan", premium: true, score: 80 },
    { name: "Treeya", premium: false, score: 72 },
    { name: "Ruhi", premium: true, score: 81 },
    { name: "Sriti", premium: false, score: 94 },
    { name: "Vinita", premium: true, score: 52 },
    { name: "Arsha", premium: true, score: 66 },
    { name: "Taniya", premium: false, score: 77 },
    { name: "Arnav", premium: true, score: 69 },
    { name: "Kitt", premium: false, score: 96 }
]

const userReduced = user.reduce((acc, curr) => {
    curr.score > 80 ? acc.push(curr) : null
    return acc;
}, []);

console.log(userReduced);


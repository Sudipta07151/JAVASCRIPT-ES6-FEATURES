//find a value from a list and stops whenever found

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

const userFirstScoreOver90 = user.find(curr => {
    return curr.score > 90
})

console.log(userFirstScoreOver90)
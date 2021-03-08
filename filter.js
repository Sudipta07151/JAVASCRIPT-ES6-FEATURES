//filtered result based on where the result(condition is true)

const scores = [10, 20, 22, 45, 23, 11, 56]

scoresFiltered = scores.filter(score => score > 25)

console.log(scoresFiltered)

const user = [
    { name: "Sudipta", premium: true },
    { name: "Ryan", premium: true },
    { name: "Treeya", premium: false },
    { name: "Ruhi", premium: true },
    { name: "Sriti", premium: false }
]

const userFiltered = user.filter(el => el.premium)

console.log(userFiltered)

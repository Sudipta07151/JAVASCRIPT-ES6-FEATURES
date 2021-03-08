
const user = ["Sudipta", "Ryan", "Treeya", "Ruhi", "Sriti", "Vinita", "Arsha", "Taniya", "Arnav", "Kitt"]

console.log(user.sort())
console.log(user.reverse())

const userDoc = [
    { name: "Sudipta", premium: true, score: 89 },
    { name: "Ryan", premium: true, score: 80 },
    { name: "Treeya", premium: false, score: 72 },
    { name: "Ruhi", premium: true, score: 81 },
    { name: "Sriti", premium: false, score: 94 },
    { name: "Vinita", premium: true, score: 52 },
    { name: "Arsha", premium: true, score: 66 },
    { name: "Taniya", premium: false, score: 66 },
    { name: "Arnav", premium: true, score: 69 },
    { name: "Kitt", premium: false, score: 96 }
]

// userDoc.sort((curr, next) => {
//     //if 'curr' should come first then return (-)ve
//     //if 'next' should come first then return (+)ve
//     //if neither should come first then return 0
//     if (curr.score > next.score) {
//         return -1;
//     } else if (curr.score < next.score) {
//         return 1
//     } return 0;
// })



//same but one liner function

//logic
//if next element.score > curr element.score 
//then substraction will give a 
//positive value and next will be placed first

userDoc.sort((curr, next) => next.score - curr.score)
console.log(userDoc)



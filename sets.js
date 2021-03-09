//store unique values(no duplicate values allowed)

const people = ['fox', 'wb', 'hbo', 'star', 'fox', 'wb', 'hbo', 'zee', 'hotstar'];

const uniqueSet = [...new Set(people)]
console.log(uniqueSet)
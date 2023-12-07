function anArray(n) {
    numbersSet = []

    for (var i = 0; i <= n; i++) {
        numbersSet.push(Math.random())
    }
    return numbersSet
}
console.log(anArray())

var list = anArray(8)
console.log(list)
list.push(8)
console.log(list)
list.unshift(2)
console.log(list)
list.unshift(2)
console.log(list)
var uniqueSet = new Set(list)
console.log(uniqueSet)

var book = {
    'Simon': 25,
    'Timmy': 4,
    'Elliot': 29,
    'Johnny': 30,
    'Kyle': 1
}
console.log(book)
var names = Object.keys(book)
console.log(names)
var ages = Object.values(book)
console.log(ages)
book.Timmy = 13
console.log(book)
var deleteAge = delete book.Johnny['8']
console.log(deleteAge)
// 1 hour 30 min makr 
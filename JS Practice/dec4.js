function newArray(n) {
    numbersSet = []

    for (var i = 0; i <= n; i++) {
        numbersSet.push(Math.random())
    }
    return numbersSet
}
console.log(newArray())

var newList = array(8)
console.log(newList)
newList.push(8)
console.log(newList)
newList.unshift(2)
console.log(newList)
newList.unshift(2)
console.log(newList)
var uniqueSet = new Set(newList)
console.log(uniqueSet)
// 1 hour mark
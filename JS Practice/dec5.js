function newArray(n) {
    numbersSet = []

    for (var i = 0; i <= n; i++) {
        numbersSet.push(Math.random())
    }
    return newArray
}
console.log(array())
var list = newArray(8)
console.log(list)
list.push(8)
console.log(list)
list.unshift(2)
console.log(list)
list.unshift(2)
console.log(list)
var individual = new Set(list)
console.log(individual)
var book = {
    'Tom': 22,
    'Jerry': 15,
    'Daffy': 11,
    'Buggs': 20,
    'Looney': 21
}
console.log(book)


var names = Object.keys(book)
console.log(names)
var ages = Object.values(book)
console.log(ages , 'ages hit here, line 33')
book.Tom = 13
console.log(book)
var deleteAge = delete book.Looney['8']
console.log(deleteAge)

var newList = {
    Tom : {
        month : "Jan",
        year: 2000
    },
    Jerry : {
        month: "Feb",
        year: 2001
    },
    Daffy : {
        month:  "Mar",
        year:  2002
    },
    Buggs : {
        month:  "Apr",
        year:  2003
    },
    Looney : {
        month:  "May",
        year:  2004
    }
}

function weight() {
    for (const friend in newList) {
        if (newList.hasOwnProperty(friend)) {
            switch (friend) {
                case 'John':
                    newList[friend].weight = 250;
                case 'Peter':
                    newList[friend].weight = 240;
                case 'Jason':
                    newList[friend].weight = 220
                case 'Louis':
                    newList[friend].weight = 230;
                case 'Tom':
                    newList[friend].weight = 260
                default:
                    newList[friend].weight = 0;
            }

        }
    }
}
console.log(weight());

// 1 hour 34 min 
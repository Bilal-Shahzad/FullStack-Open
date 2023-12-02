function array(n) {
    numbersSet = []

    for (var i = 0; i <= n; i++) {
        numbersSet.push(Math.random())
    }
    return numbersSet
}
console.log(array(),'line 9 here')

var functionList = array(8)
console.log(functionList)
functionList.push(8)
console.log(functionList, 'line 14 here')
functionList.unshift(2)
console.log(functionList, 'line 16 here')
functionList.unshift(2)
console.log(functionList, 'line 18 here')
var uniqueSet = new Set(functionList)
console.log(uniqueSet, 'unique set here line 20')
var dictionary = {
    'John': 12,
    'Tom': 10,
    'Peter': 18,
    'Jason': 8,
    'Louis': 15
}
console.log(dictionary)


var names = Object.keys(dictionary)
console.log(names)

var ages = Object.values(dictionary)
console.log(ages , 'ages hit here, line 35')

dictionary.John = 13
console.log(dictionary, 'line 38 hits here')
var deleteAge = delete dictionary.Louis['8']
console.log(deleteAge, 'line 40 hits here')

var friendsList = {
    John : {
        month : "Jan",
        year: 2000
    },
    Tom : {
        month: "Feb",
        year: 2001
    },
    Peter : {
        month:  "Mar",
        year:  1995
    },
    Jason : {
        month:  "Apr",
        year:  2002
    },
    Louis : {
        month:  "May",
        year:  2004
    }
}

function addWeightToFriends() {
    for (const friend in friendsList) {
        if (friendsList.hasOwnProperty(friend)) {
            switch (friend) {
                case 'John':
                    friendsList[friend].weight = 250;
                    break;
                case 'Peter':
                    friendsList[friend].weight = 240;
                    break;
                case 'Jason':
                    friendsList[friend].weight = 220;
                    break;
                case 'Louis':
                    friendsList[friend].weight = 230;
                    break;
                case 'Tom':
                    friendsList[friend].weight = 260;
                    break;
                default:
                    friendsList[friend].weight = 0;
            }

        }
    }
}

console.log(addWeightToFriends());


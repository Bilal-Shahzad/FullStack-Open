// Write a function -> given n (array) -> size n with random numbers
function array(n) {
    // Use that function to create an new array of 8 numbers
    numbersSet = []

    for (var i = 0; i <= n; i++) {
        numbersSet.push(Math.random())
    }
    return numbersSet
}
console.log(array(),'line 11 here')

// Use that function to create an new array of 8 numbers
var functionList = array(8)
console.log(functionList)
// Add the number 8 to the end of that array
functionList.push(8)
console.log(functionList, 'line 18 here')
// Add the number 2 to the beginning of that array
functionList.unshift(2)
console.log(functionList, 'line 21 here')
// Add the number 2 to the beginning of that array again -- then put all unique values in a set.
functionList.unshift(2)
console.log(functionList, 'line 24 here')
var uniqueSet = new Set(functionList)
console.log(uniqueSet, 'unique set here line 26')
// Create a dictionary of five names (key) and ages (values)
var dictionary = {
    'Brady': 12,
    'Eli': 10,
    'Peyton': 18,
    'Jackson': 8,
    'Mahomes': 15
}
console.log(dictionary, 'line 35 here')

// List all names (put it in an array)!

var names = Object.keys(dictionary)
console.log(names, 'names hit here, line 40')

// List all ages (put it in an array)!
var ages = Object.values(dictionary)
console.log(ages , 'ages hit here, line 44')

// Change someone age to 13
dictionary.Mahomes = 13
console.log(dictionary, 'line 48 hits here')
// Delete someones age 
var deleteAge = delete dictionary.Jackson['8']
console.log(deleteAge, 'line 51 hits here')
// Create a dictionary of friends with names and list of month and year of birthday

var friendsList = {
    LeBron : {
        month : "Jan",
        year: 2000
    },
    CarMelo : {
        month: "Feb",
        year: 2001
    },
    Kobe : {
        month:  "Mar",
        year:  1995
    },
    Paul : {
        month:  "Apr",
        year:  2002
    },
    KG : {
        month:  "May",
        year:  2004
    }
}
// Loop through dictionary and add everyone’s weight from original -> this will be a new function

function addWeightToFriends() {
    for (const friend in friendsList) {
        if (friendsList.hasOwnProperty(friend)) {
            switch (friend) {
                case 'LeBron':
                    friendsList[friend].weight = 250;
                    break;
                case 'CarMelo':
                    friendsList[friend].weight = 240;
                    break;
                case 'Kobe':
                    friendsList[friend].weight = 220;
                    break;
                case 'Paul':
                    friendsList[friend].weight = 230;
                    break;
                case 'KG':
                    friendsList[friend].weight = 260;
                    break;
                default:
                    friendsList[friend].weight = 0;
            }

            console.log(`${friend}'s weight is ${friendsList[friend].weight} pounds.`);
        }
    }
}

console.log(addWeightToFriends(), 'add weight hits here');


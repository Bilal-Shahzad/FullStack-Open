const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})                    

// the array can be modified even though its defined as const. The array is an object, the varaibles are the same as the object. 

value => {
    console.log(value)
  }
//   this is how you call it
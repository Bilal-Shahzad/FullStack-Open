// we have a person named Bilal with some properties like name, age, and education. We can make Bilal greet by defining a method in the object like this

const Bilal = {
    name: 'Bilal Shahzad',
    age: 21,
    education: 'WSU',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  Bilal.greet() // This prints "hello, my name is Bilal Shahzad"
  
// We can even add methods to the object after it's created:

Bilal.growOlder = function() {
    this.age += 1
  }
  Bilal.growOlder()
  console.log(Bilal.age, 'grow older hits here') // This prints 22
  
// However, there's a problem when we use references to call methods, like this:

// This happens because the method loses knowledge of the original object (Bilal) when called through a reference. It's due to how JavaScript handles the this keyword, which refers to the object itself. Using arrow functions can help solve some issues, but they shouldn't be used as methods for objects because this won't work as expected.


// To preserve the original this, we can use the bind method like this:
setTimeout(arto.greet.bind(Bilal), 1000)
// This ensures that this inside the greet method will always refer to the arto object, regardless of how it's called.



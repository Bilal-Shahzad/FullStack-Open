// In JavaScript, there's no built-in class mechanism like in other programming languages, but we can simulate classes using features available in the language. One way to do this is by using the ES6 class syntax, which makes defining classes and objects easier.

// class called Person to represent people with a name and age:

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
//   Now, we can create objects from this class, just like how we create objects from a blueprint:

const adam = new Person('Bilal Shahzad', 21)
adam.greet() // This prints "hello, my name is Bilal Shahzad"

const janja = new Person('Janja Garnbret', 23)
janja.greet() // This prints "hello, my name is Janja Garnbret"

// These objects are similar to Java objects, but underneath, they still rely on JavaScript's prototypal inheritance. Even though we use the class syntax, JavaScript essentially defines all types as Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object.


// The introduction of the class syntax sparked debates, but it's widely used in "old" React and Node.js. However, in this course, we primarily focus on the new Hooks feature of React, so we won't use JavaScript's class syntax extensively here.





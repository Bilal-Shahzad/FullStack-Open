// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }
// export default App

// JSX 
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }
// <br> <br />

// multiple components 

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// hello and used it inside the component app they can use multiple terms
// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       {/* We have defined a new component Hello and used it inside the component App */}
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }

// props passing data to components 

// const Hello = (props) => {
//   return (
//     <div>

//       <p>Hello {props.name}</p>
//     </div>
//   )
// }
// function defining component has parameter of props 

// props are defined below 
// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
// {/* daisy and geroge  */}
//       <Hello name='George' /> 
//       <Hello name='Daisy' />
//     </div>
//   )
// }


// hello will be using two props -

// const Hello = (props) => {

//   console.log(props)
//   return (
//     <div>
//       <p>

//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {

//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>

//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// props by App are values of the vriables 

// Hello also logs the value of the object 



// notes 

// When we build things with React, it helps us make web pages look and work nicely
// If we make a mistake, React tells us what's wrong. But when we start, we should do things step by step to make sure it all works
// we need to tell React how to do it in a special way so it understands
// React doesn't like to show special things on the screen directly. It wants us to show simple things like numbers or words
// need to tell React which part of their name to show
//  need to use the right names, and React likes simple things on the screen

// Using a root element is not the only working option. An array of components is also a valid solution:
// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

// // do not render objects 
// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// export default App
// // So now the friend's name is rendered separately inside the curly braces



// const Header = ({ course }) => {
//   return (
//     <div>
//       <h1>{course}</h1>
//     </div>
//   );
// };

// const Part = ({ part, exercises }) => {
//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   );
// };

// const Content = ({ parts }) => {
//   return (
//     <div>
//       {parts.map((part, index) => (
//         <Part key={index} part={part.name} exercises={part.exercises} />
//       ))}
//     </div>
//   );
// };

// const Total = ({ parts }) => {
//   const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
//   return (
//     <div>
//       <p>Total number of exercises {totalExercises}</p>
//     </div>
//   );
// };

// const App = () => {
//   const course = 'Half Stack application development';
//   const parts = [
//     { name: 'Fundamentals of React', exercises: 10 },
//     { name: 'Using props to pass data', exercises: 7 },
//     { name: 'State of a component', exercises: 14 },
//   ];

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   );
// };

// export default App;

  
  // JavaScript 
  
  // browsers dont support all of JS newest features 
  // a lot fo code run in browsers hass been transpiled from a newer version of JS to an older more compatible version 

  // most popular way to do transpiling is using Babel
  
  // node.js is a JS runtime enviroment and works anywhere 
  // the code is written into files ending with .js that are run by issung the command ' node name_of_file.js



  // variables

const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error

// const doesnt define a variable but a constant is where the value can no longer be changed
// let defines a normal variable 


// arrays 
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})                    

// Arrays are like lists that can hold multiple values
// Even though an array is declared as const, its content can be modified, as the variable still points to the same array object


// forEach
t.forEach(value => {
  console.log(value);
});
// You can iterate through array items using forEach
// forEach takes a function as an argument and calls it for each item in the array


// map
const b = [1, 2, 3];
const m1 = t.map(value => value * 2); // [2, 4, 6]

const m2 = t.map(value => '<li>' + value + '</li>');
// ['<li>1</li>', '<li>2</li>', '<li>3</li>']
// map creates a new array by applying a function to each item in the original array.
// It's commonly used for transforming or modifying data.


// Destructuring Assignment:
const l = [1, 2, 3, 4, 5];
const [first, second, ...rest] = t; // first = 1, second = 2, rest = [3, 4, 5]


// // objects
// // Defining objects using object literals
// const object1 = {
//   name: 'Arto Hellas',
//   age: 35,
//   education: 'PhD',
// };

// const object2 = {
//   name: 'Full Stack web application development',
//   level: 'intermediate studies',
//   size: 5,
// };

// const object3 = {
//   name: {
//     first: 'Dan',
//     last: 'Abramov',
//   },
//   grades: [2, 3, 5, 3],
//   department: 'Stanford University',
// };

// These boxes hold different details about people and things
// box 1 has the name "Arto Hellas," box 2 has the name "Full Stack web application development," and box 3 has details about a person named "Dan Abramov"

// // Accessing properties of an object
// console.log(object1.name);  // Prints: Arto Hellas
// const fieldName = 'age';
// console.log(object1[fieldName]);  // Prints: 35
// // Adding properties to an object
// object1.address = 'Helsinki';
// object1['secret number'] = 12341;


// // // Functions

// // Defining arrow functions
// const sum = (p1, p2) => {
//   console.log(p1);
//   console.log(p2);
//   return p1 + p2;
// };

// // Calling the function
// const result = sum(1, 5);
// console.log(result);
// // functions is where you write down the instructions and it function is what performs it 


// // Arrow function with a single parameter
// const square = p => {
//   console.log(p);
//   return p * p;
// };
// // Shorter version without braces and return
// const square = p => p * p;
// // you can write simpler functions

// // Using arrow functions with arrays (like a special list)
// const t = [1, 2, 3];
// const tSquared = t.map(p => p * p);
// // tSquared is now [1, 4, 9]

// // Regular function declaration with a name
// function product(a, b) {
//   return a * b;
// }

// // Function expression without a name
// const average = function(a, b) {
//   return (a + b) / 2;
// };



// exercises 1.3


const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>Total number of exercises {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;


// object methods and "this"
// Defining methods in an object
const Bilal = {
  name: 'Bilal Shahzad',
  greet: function() {
    console.log('hello, my name is ' + this.name);
  },
};

Bilal.greet();  // "hello, my name is Bilal Shahzad" gets printed
// bilal is labeled with labeled greet, when you press greet it says the message

// Adding methods to an object after creation
Bilal.growOlder = function() {
  this.age += 1;
};

console.log(Bilal.age);   // 21 is printed
Bilal.growOlder();
console.log(Bilal.age);   // 22 is printed
// this adds age 

// Using methods with parameters
Bilal.doAddition = function(a, b) {
  console.log(a + b);
};

Bilal.doAddition(1, 4);        // 5 is printed

const referenceToAddition = Bilal.doAddition;
referenceToAddition(10, 15);   // 25 is printed
// adding two numbers



// Classes

// Defining a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log('hello, my name is ' + this.name);
  }
}

// Creating objects (like toys) from the Person class
const adam = new Person('Adam Ondra', 29);
adam.greet();

const janja = new Person('Janja Garnbret', 23);
janja.greet();
// class called person helps classify a person 

// the syntax makes it easier to make a lot of classications without writitng the same thing over and over 

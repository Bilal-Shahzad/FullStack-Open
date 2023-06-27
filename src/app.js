
// const App = () => {

//   const name = 'Bilal'
//   const age = 21

//   return (
//     <div>
//       <h1>Greetings</h1>

//       <Hello name='Maya' age={26 + 21} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

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
// console 
// Hello from componenet 


//   The file App.js now defines a React component with the name App. The command on the final line of file index.js

// JSX
// JSX looks like HTML, we are dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.


// props: passing data to components
// It is possible to pass data to components using so-called props.

// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }


// Now the function defining the component has a parameter props. As an argument, the parameter receives an object, which has fields corresponding to all the "props" the user of the component defines

// The props are defined as follows:
// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>

//       <Hello name='George' />
//       <Hello name='Daisy' />
//     </div>
//   )
// }



// There can be an arbitrary number of props and their values can be "hard-coded" strings or the results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces
// two props 
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

//   const name = 'Bilal'
//   const age = 21

//   return (
//     <div>
//       <h1>Greetings</h1>

//       <Hello name='Maya' age={26 + 21} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// The props sent by the component App are the values of the variables, the result of the evaluation of the sum expression and a regular string.

// Do not render objects
// Consider an application that prints the names and ages of our friends on the screen:

// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0]}</p>
//       <p>{friends[1]}</p>
//     </div>
//   )
// }

// export default App

// In React, the individual things rendered in braces must be primitive values, such as numbers or strings.

// The fix is ​​as follows
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App
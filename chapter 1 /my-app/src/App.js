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


const App = () => {
  const Header = 'Half Stack application development'
  const Content1 = 'Fundamentals of React'
  const Total1 = 10
  const Content2 = 'Using props to pass data'
  const Total2 = 7
  const Content3 = 'State of a component'
  const Total3 = 14

  return (
    <div>
      <h1>{Header}</h1>
      <p>
        {Content1} {Total1}
      </p>
      <p>
        {Content2} {Total2}
      </p>
      <p>
        {Content3} {Total3}
      </p>
      <p>Number of exercises {Total1 + Total2 + Total3}</p>
    </div>
  )
}

export default App
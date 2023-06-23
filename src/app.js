const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {

  const name = 'Bilal'
  const age = 21

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 21} />
      <Hello name={name} age={age} />
    </div>
  )
}

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


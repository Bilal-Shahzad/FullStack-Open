// a good way to make more things clear is console log

const Header = (props) => {

    console.log(props)
    return <h1>{props.course}</h1>
  }
// Objects are not valid as a React child

// modify the variable of the app 
// const App = () => {
//     const course = 'Half Stack application development'
//     const part1 = {
//       name: 'Fundamentals of React',
//       exercises: 10
//     }
//     const part2 = {
//       name: 'Using props to pass data',
//       exercises: 7
//     }
//     const part3 = {
//       name: 'State of a component',
//       exercises: 14
//     }
  
//     return (
//       <div>
//         ...
//       </div>
//     )
//   }

//   1.4
// place objects into array
// modifying the varaibles of definitions 

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
      <div>
        ...
      </div>
    )
  }




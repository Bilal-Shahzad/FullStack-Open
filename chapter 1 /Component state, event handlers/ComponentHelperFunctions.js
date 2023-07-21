// new ex
const Hello = (props) => {
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
    const age = 20
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
    )
  }

//  Component helper functions

// Let's imagine we have a component called Hello that greets a person and guesses their year of birth. We can do this by using a helper function inside the component.
const Hello1 = (props) => {
    // Helper function to guess the year of birth
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    }
  
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
  
//   Here's how it works:

// The Hello component takes some props, such as the person's name and age.

// Inside the component, there's a helper function called bornYear that calculates the year of birth based on the current year and the person's age.

// When the component is rendered, it displays a greeting with the person's name and age, and then uses the bornYear function to make an educated guess about the year the person was born.

// The neat thing is that the helper function can access the props directly without needing them as parameters. This is because JavaScript allows us to define functions within other functions, making it a common technique in JavaScript programming.


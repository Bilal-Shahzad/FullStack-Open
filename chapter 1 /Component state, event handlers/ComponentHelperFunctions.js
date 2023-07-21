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
  
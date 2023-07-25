// event handlers can be called when specific things occur 
// we are going to change the app so it increases the counter happens when a user clicks a button 
// button elements support mouse evennts of when a clicks the most common event 

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
  
    const handleClick = () => {
      console.log('clicked') 
    }
  
    return (
      <div>
        <div>{counter}</div>
        {/* on click to reference the handleclick function defined in code  */}
        <button onClick={handleClick}> 
          plus
        </button>
      </div>
    )
  }

  const App2 = () => {
    const [ counter, setCounter ] = useState(0)
  
    return (
      <div>
        <div>{counter}</div>
  {/* the event handler function can also be defined directly in the value assignment of the onclick atribute */}
        <button onClick={() => setCounter(counter + 1)}>
          plus
        </button>
      </div>
    )
  }
// acheving the wanted behavuor meaning the value of counter is increased and component gets re-rendered

// Let's also add a button for resetting the counter:
const App3 = () => {
    const [ counter, setCounter ] = useState(0)
  
    return (
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>
          plus
        </button>
  
        <button onClick={() => setCounter(0)}> 
          zero
        </button>
      </div>
    )
  }


// When we want our buttons to do something, like increasing a number when clicked, we need to define "event handlers" that decide what should happen when the button is clicked.

// If we try to put the code directly like this
{/* <button onClick={setCounter(counter + 1)}> 
  plus
</button> */}
// It would cause our application to keep re-rendering because the code inside the onClick attribute would be executed immediately, not when the button is clicked. This is not what we want.

// So instead, we define the event handlers like this
<button onClick={() => setCounter(counter + 1)}> 
  plus
</button>
// Now the onClick attribute has a function that will be called only when we click the button.
// Even though defining the event handlers directly inside the JSX-templates is not recommended, it's fine in this simple case.

// We can also separate the event handlers into separate functions, like this:
const App4 = () => {
    const [counter, setCounter] = useState(0);
  
    const increaseByOne = () => setCounter(counter + 1);
    const setToZero = () => setCounter(0);
  
    return (
      <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>
          plus
        </button>
        <button onClick={setToZero}>
          zero
        </button>
      </div>
    );
  };
//   Now the onClick attributes refer to functions, and the buttons will work as expected when clicked
  
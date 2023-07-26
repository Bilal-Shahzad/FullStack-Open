// In React, we want to create small, reusable components for our web applications. To do this, we can refactor our code and follow some best practices


// Display component: We create a component called Display to show the counter's value. We pass the counter state from the App component to the Display component using props
const Display = (props) => {
    return (
      <div>{props.counter}</div>
    );
  };

  
// Lifting state up: To follow best practices, we move the state of the counter from the Button components to the App component. We then pass the relevant state and functions as props to the child components
const App = () => {
    const [counter, setCounter] = useState(0);
  
    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);
  
    return (
      <div>
        <Display counter={counter} />
        <Button handleClick={increaseByOne} text='plus' />
        <Button handleClick={setToZero} text='zero' />
        <Button handleClick={decreaseByOne} text='minus' />
      </div>
    );
  };
  

// Button component: We create a Button component that receives the event handler and button text as props, making it reusable for different actions
const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    );
  };
  
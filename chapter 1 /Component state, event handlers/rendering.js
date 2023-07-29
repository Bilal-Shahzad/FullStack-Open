// When our application starts, the App component's code is executed. It creates the application state using the useState hook and sets an initial value for the counter variable. The App component contains the Display component, which shows the counter's value (initially 0), and three Button components. Each button has an event handler that changes the counter's state.

// When a user clicks a button, the event handler is triggered, and it changes the App component's state using the setCounter function. This change causes the App component to re-render.

// For example, clicking the plus button triggers its event handler, increasing the counter value to 1. The App component re-renders, updating its subcomponents, including Display and the other buttons.

// To better understand how the program works, we can add console.log statements:
const App = () => {
    const [counter, setCounter] = useState(0);
    console.log('rendering with counter value', counter);
  
    const increaseByOne = () => {
      console.log('increasing, value before', counter);
      setCounter(counter + 1);
    };
  
    const decreaseByOne = () => {
      console.log('decreasing, value before', counter);
    }
}
// state to the App component. State is like a special memory that keeps track of things that can change in a component.

// useState and use it to add state to our component. We start with a counter that begins at zero
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(
    () => setCounter(counter + 1),
    1000
  );

  return (
    <div>{counter}</div>
  );
};

export default App;
// useState
// it gives us two things: the current value of the state //counter 
// setCounter that we can use to change the state
// use setTimeout to make the counter increase every one second
// So, our component keeps counting up every second, and the value of the counter is shown
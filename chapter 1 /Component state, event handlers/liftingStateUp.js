// In JavaScript, we can use React to build web applications. React components are like building blocks that make up the user interface

// Components are like building blocks: React components are small pieces of code that represent parts of a web application's user interface
const Component = () => {
    return <div>This is a component!</div>;
  };


//   Props are like messages: We can pass information to components using "props," which are like messages containing data
const Greeting = (props) => {
    return <div>Hello, {props.name}!</div>;
  };
  

// State is like a special memory: State is a way to store and manage data that can change during the life of a component. We use the useState hook to add state to functional components
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};


// Re-rendering makes things dynamic: When the state of a component changes, React automatically re-renders the component, updating the user interface
import { useState } from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};


// Event handlers make things interactive: We can use event handlers, like onClick, to define what happens when users interact with the web application, like clicking a button
const Button = () => {
    const handleClick = () => {
      alert('Button clicked!');
    };
  
    return <button onClick={handleClick}>Click Me!</button>;
  };

  

// Destructuring simplifies code: Destructuring allows us to extract values from objects and arrays, making our code cleaner and more concise
const Person = (props) => {
    const { name, age } = props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  };

// By combining these concepts, we can build dynamic and interactive web applications using React
  
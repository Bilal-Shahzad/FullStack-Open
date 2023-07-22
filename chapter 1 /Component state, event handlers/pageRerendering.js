// Imagine we want to create a counter that increases over time or when we click a button. We start with a simple component called App that displays the counter's value.

// App.js
const App = (props) => {
    const { counter } = props;
    return (
      <div>{counter}</div>
    );
  };
  
  export default App;
  
// And in index.js, we render the App component with an initial counter value of 1.

// index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

let counter = 1;

ReactDOM.createRoot(document.getElementById('root')).render(
  <App counter={counter} />
);

// But when we change the value of the counter, the component doesn't automatically re-render to display the new value. To achieve this, we can call the render method again with the updated value, like this:

let counter2 = 1;

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  );
};

refresh();
counter += 1;
refresh();
counter += 1;
refresh();
// Now, the component re-renders three times, showing the values 1, 2, and 3, but they change so quickly that we can't see them all.

// To make the counter increment and re-render every second, we can use setInterval:

setInterval(() => {
    refresh();
    counter += 1;
  }, 1000);
//   However, repeatedly calling the render method like this is not the recommended way to re-render components.
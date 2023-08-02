// We extracted the Button component from the App component. The Button component receives the event handler function from the handleClick prop and the button text from the text prop.

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );

//   We then used the Button component in the App component, passing different event handlers and texts for each button.
const App = () => {
    const [value, setValue] = useState(10);
  
    const setToValue = (newValue) => {
      console.log('value now', newValue);
      setValue(newValue);
    };
  
    return (
      <div>
        <Display value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>
    );
  };


// However, we were advised not to define components inside other components. Instead, we should define the Display component outside the App component, in its correct place:
const Display = (props) => <div>{props.value}</div>;
// By moving the Display component to its correct place, we ensure better component organization and avoid unnecessary issues that may arise from defining components inside others.
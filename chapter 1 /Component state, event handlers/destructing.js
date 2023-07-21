// destructing that makes it easier to extract and use values from objects and arrays.

const Hello2 = (props) => {
    const { name, age } = props;
    const bornYear = () => new Date().getFullYear() - age;
  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    );
  };
// in the original code, we had to use props.name and props.age multiple times. But with destructuring, we can simplify the code by directly assigning the values of the properties to variables name and age.

// This makes the code cleaner and more concise. We can also take it a step further and directly destructure the props right in the function's parameter itself
const Hello3 = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age;
  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    );
  };
  

// instead of assigning the entire props object to a variable and then extracting its properties, we directly use destructuring in the function parameter to get the values we need.


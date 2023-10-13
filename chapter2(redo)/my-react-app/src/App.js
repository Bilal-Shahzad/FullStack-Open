import React from 'react';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  console.log('Course:', course);

  const totalExercises = course.parts.reduce((sum, part) => {
    console.log('Current Sum:', sum);
    console.log('Current Part:', part);
    return sum + part.exercises;
  }, 0);

  console.log('Total Exercises:', totalExercises);

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <strong>Total exercises: {totalExercises}</strong>
      </p>
    </div>
  );
};

export default App;

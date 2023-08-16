import React from 'react';

const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises} exercises
    </p>
  );
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <p><strong>Total exercises: {totalExercises}</strong></p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;

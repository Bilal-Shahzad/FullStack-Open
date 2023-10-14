import React from 'react';

const Header = ({ courseName, totalExercises}) => {
  console.log(Header, 'header component');
  
  return (
    <div>
      <h2>{courseName}</h2>
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};

const Part = ({part}) => {
  console.log(Part, 'part');
  
  return (
    <p>
      {part.name} - {part.exercises} exercises
    </p>
  );
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  console.log(parts , 'parts ');
  
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        <strong>Total exercises: {totalExercises}</strong>
      </p>
    </div>
  );
};

const Course = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  console.log(courses, 'courses here');
  
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Header
            courseName={course.name}
            totalExercises={course.parts.reduce((sum, part) => sum + part.exercises, 0)}
          />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;

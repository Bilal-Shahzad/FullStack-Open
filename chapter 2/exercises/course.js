
// import React from 'react';

// const Header = ({ course }) => {
//   return <h1>{course.name}</h1>;
// };

// const Content = ({ course }) => {
//   return (
//     <div>
//       {course.parts.map(part => (
//         <Part key={part.id} part={part} />
//       ))}
//     </div>
//   );
// };

// const Part = ({ part }) => {
//   return (
//     <p>
//       {part.name} {part.exercises}
//     </p>
//   );
// };

// const Course = ({ course }) => {
//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//     </div>
//   );
// };

// export default Course;

// Update the Content component in Course.js:

const Content = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return (
      <div>
        {course.parts.map(part => (
          <Part key={part.id} part={part} />
        ))}
        <p>
          <strong>Total exercises: {totalExercises}</strong>
        </p>
      </div>
    );
  };
  
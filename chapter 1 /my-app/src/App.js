import React from 'react';
import Course from './course'; // Import the Course component

const App = () => {
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
        // ... other parts
      ],
    },
    // ... other courses
  ];

  return (
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;

// Deines the course along with header, part,and content


// 2.2 
// changed content to calculate the total exercises by using the reduce function 

// 2.3
// reduce function  inside the content component uses longer form of the arrow function 
// helps see values of total and the current part

// 2.4
// app maps through courses array and loads a course component for each course

// 2.5
// create a course.js file and import it 
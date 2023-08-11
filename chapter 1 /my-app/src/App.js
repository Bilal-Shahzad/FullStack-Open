
import React, { useState } from 'react';


const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>Total number of exercises {totalExercises}</p>
    </div>
  );
};



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <div>
        <h1>Anecdote of the Day</h1>
        <div>{anecdotes[selected]}</div>
        <div>Has {votes[selected]} votes</div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Next Anecdote</button>
      </div>
      <div>
        <h1>Anecdote with Most Votes</h1>
        <div>{anecdotes[mostVotes]}</div>
        <div>Has {votes[mostVotes]} votes</div>
      </div>
    </div>
  )
}

export default App


// 1.7
// removed button and use html 
// removed statistic componennt and used <p>
// added the math for finding the totl 


// 1.8
// added the math of total, average , and postive percentage

// 1.9
// stats section displayed only if theres feed back given (total is not 0)

// 1.10
// button and statisticline are gone making app cleaner 


// 1.11
// stats are displayed in a html table with each stat in a seprate row 
// StatisticLine is used to make each row of the table 

// 1.12
// app will show random anecdote each time clicked next anecdote buttom 
// anecdote - small story (this story was provided)


// 1.13
// have app 'vote' show the array keeps track the number of votes for each anecdote
// handleVote is called that creates a copy of the votes array and increments the vote count
// Next anecdote button makes random index to select a new anecdote to show 

// 1.14
// 'mostvotes variable has the index of tha anecdote with the most votes
// 'indexOf' ,ethod is used to find the index of the maximum value in the votes array 
// app shows the anecdte with the most votes and puts it with Anecdote of the day
// if theres multiple with a tie it only shows one 
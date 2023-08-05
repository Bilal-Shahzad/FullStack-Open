import React, { useState } from 'react';

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
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const mostVotesIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <div>
        <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={getRandomAnecdote}>Next Anecdote</button>
      </div>

      <div>
        <h1>Anecdote with Most Votes</h1>
        <p>{anecdotes[mostVotesIndex]}</p>
        <p>Has {votes[mostVotesIndex]} votes</p>
      </div>
    </div>
  );
};

export default App;

// We calculate the mostVotesIndex by finding the index of the anecdote with the maximum number of votes using votes.indexOf(Math.max(...votes)).

// The first <div> section displays the current selected anecdote along with its votes, and provides buttons for voting and generating a random anecdote.

// The second <div> section displays the anecdote with the most votes along with its vote count.

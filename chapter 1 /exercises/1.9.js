import React, { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = (good - bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  return (
    <div>
      <h2>Feedback Summary</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Average score: {averageScore.toFixed(2)}</p>
      <p>Positive feedback percentage: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  const feedbackGiven = good + neutral + bad > 0;

  return (
    <div>
      <h1>Customer Feedback</h1>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>

      {feedbackGiven && <Statistics good={good} neutral={neutral} bad={bad} />}
      {feedbackGiven || <p>No feedback given yet.</p>}
    </div>
  );
};

export default App;
// In this modified code, the feedbackGiven variable is used to determine whether any feedback has been provided. The Statistics component is conditionally rendered using the && operator only if feedbackGiven is true
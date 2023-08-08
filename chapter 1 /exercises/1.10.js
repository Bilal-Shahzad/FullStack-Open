import React, { useState } from 'react';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = (good - bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  return (
    <div>
      <h2>Feedback Summary</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total feedback" value={totalFeedback} />
      <StatisticLine text="Average score" value={averageScore.toFixed(2)} />
      <StatisticLine text="Positive feedback percentage" value={`${positivePercentage.toFixed(2)}%`} />
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
      <Button text="Good" handleClick={() => handleFeedback('good')} />
      <Button text="Neutral" handleClick={() => handleFeedback('neutral')} />
      <Button text="Bad" handleClick={() => handleFeedback('bad')} />

      {feedbackGiven ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given yet.</p>
      )}
    </div>
  );
};

export default App;
// In this refactored code, the Button component represents the individual feedback buttons, and the StatisticLine component is used to display a single statistic
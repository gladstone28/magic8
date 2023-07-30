import React, { useState } from 'react';
import './App.css';

const answers = [
  "It is certain",
  "It is decidedly so",
  "Reply hazy, try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes"
];

function App() {
  const [userName, setUserName] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setUserQuestion(event.target.value);
  };

  const handleAskClick = () => {
    if (userQuestion.trim() === "") {
      alert("Please enter your question before asking!");
      return;
    }

    const randomNumber = Math.floor(Math.random() * answers.length);
    const eightBall = answers[randomNumber];
    const result = userName ? `${userName}, The eight ball answered: ${eightBall}` : `The eight ball answered: ${eightBall}`;
    setAnswer(result);
  };

  return (
    <div className="container">
      <h1>Magic 8-Ball Game</h1>
      <label htmlFor="username">Enter your name:</label>
      <input type="text" id="username" value={userName} onChange={handleUserNameChange} placeholder="Your Name" />
      <label htmlFor="question">Enter your question:</label>
      <input type="text" id="question" value={userQuestion} onChange={handleQuestionChange} placeholder="Your Question" />
      <button onClick={handleAskClick}>Ask</button>
      <p id="answer">{answer}</p>
    </div>
  );
}

export default App;

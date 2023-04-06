import React, { useState } from "react";
import Qdata from "../Qdata";
import styled from "./QuizApp.module.css";
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Qdata.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleStartAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <>
      {showScore ? (
        <div className={styled.result}>
          <h1>
            Your Score {score} / {Qdata.length}
          </h1>
          <button onClick={handleStartAgain}>Start Again</button>
        </div>
      ) : (
        <div className={styled.container}>
          <h1>
            Question {currentQuestion + 1}/{Qdata.length}
          </h1>
          <div className={styled.question_box}>
            {Qdata[currentQuestion].questionText}
          </div>

          <div className={styled.answer_box}>
            {Qdata[currentQuestion].options.map((Options, index) => {
              return (
                <div className={styled.ans_container}>
                  <input
                    type="radio"
                    name="val"
                    key={index + 1}
                    onClick={() => handleOptionClick(Options.isCorrect)}
                  />
                  <span>{Options.optionText}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default QuizApp;

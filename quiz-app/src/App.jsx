import { useState } from "react";
import Question from "./Question";
import { questionData } from "./data/questionData";
import Result from "./Results";

export default function App() {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questionData[currentIndex];

  const progress = ((currentIndex + 1) / questionData.length) * 100;

  if (isFinished) {
    return (
      <Result
        score={score}
        totalScore={questionData.length}
        onRestart={() => {
          setScore(0);
          setSelected(null);
          setIsFinished(false);
          setCurrentIndex(0);
        }}
      />
    );
  }

  return (
    <div className="quiz-app">
      <h1 className="quiz-title">React Quiz</h1>
      <p className="quiz-meta">
        Question {currentIndex + 1} of {questionData.length} | Score: {score}
      </p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <Question
        key={currentIndex}
        question={currentQuestion.question}
        options={currentQuestion.options}
        answer={currentQuestion.answer}
        selected={selected}
        setSelected={setSelected}
        timeLimit={10}
      />

      {selected && currentIndex < questionData.length - 1 && (
        <button
          className="btn"
          onClick={() => {
            setSelected(null);
            setCurrentIndex(currentIndex + 1);
            if (selected === currentQuestion.answer) {
              setScore(score + 1);
            }
          }}
        >
          Next
        </button>
      )}
      {selected && currentIndex === questionData.length - 1 && (
        <button
          type="submit"
          className="btn"
          onClick={() => {
            if (selected === currentQuestion.answer) {
              setScore(score + 1);
            }
            setIsFinished(true);
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
}

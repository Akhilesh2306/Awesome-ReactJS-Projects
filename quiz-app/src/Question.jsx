import { useState, useEffect } from "react";

export default function Question({
  question,
  options,
  answer,
  selected,
  setSelected,
  timeLimit,
}) {
  const isCorrect = selected === answer;
  const [timer, setTimer] = useState(timeLimit);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="question-card">
      <p className="timer">Time: {timer}s</p>
      <h2 className="question-text">{question}</h2>
      {options.map((option) => {
        const isCurrentOptionCorrect = selected && option === answer;
        const isCurrentOptionWrong =
          selected && option === selected && option !== answer;

        return (
          <button
            key={option}
            onClick={() => setSelected(option)}
            disabled={selected !== null}
            className={`option-btn ${isCurrentOptionCorrect ? "option-btn-correct" : ""} ${isCurrentOptionWrong ? "option-btn-incorrect" : ""}`}
          >
            {option}
          </button>
        );
      })}
      {isCorrect && (
        <p className="feedback feedback-correct">That's correct!</p>
      )}
      {!isCorrect && selected && (
        <p className="feedback feedback-incorrect">
          Incorrect. The correct answer is: {answer}
        </p>
      )}
    </div>
  );
}

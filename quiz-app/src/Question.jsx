export default function Question({
  question,
  options,
  answer,
  selected,
  setSelected,
}) {
  const isCorrect = selected === answer;

  return (
    <div className="question-card">
      <h2 className="question-text">{question}</h2>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          disabled={selected !== null}
          className="option-btn"
        >
          {option}
        </button>
      ))}
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

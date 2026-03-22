export default function Result({ score, totalScore, onRestart }) {
  return (
    <div className="results-card">
      <h1 className="results-title">Quiz Completed: Your Results</h1>
      <p className="results-score">
        You scored: {score} out of {totalScore}
      </p>
      <button className="btn" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

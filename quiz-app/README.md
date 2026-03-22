# Quiz App

A multi-question quiz application built with React. Answer questions one at a time, get instant feedback, and see your final score at the end.

## Features

- 6 questions with multiple choice answers
- Instant correct / incorrect feedback after each answer
- Answer locking — cannot change answer once selected
- Score tracking across all questions
- Live score and question counter visible during quiz
- Progress bar showing how far through the quiz you are
- Correct answer highlighted green, wrong answer highlighted red after selection
- Countdown timer per question — auto stops at 0
- Results screen with final score
- Restart quiz without page reload

## Concepts Practiced

| Concept                    | Where used                                               |
| -------------------------- | -------------------------------------------------------- |
| Components & JSX           | Question, Results, App                                   |
| Props                      | Passing question data, selected state, onRestart handler |
| useState                   | score, selected, currentIndex, isFinished, timer         |
| Derived state              | isCorrect, currentQuestion, progress                     |
| State lifting              | selected moved from Question up to App                   |
| Conditional rendering `&&` | Feedback messages, Next/Submit buttons                   |
| Conditional rendering `if` | Switching between quiz and results screen                |
| `.map()` + key prop        | Rendering answer buttons dynamically                     |
| Dynamic classNames         | Highlighting correct/incorrect options after selection   |
| Inline styles              | Progress bar width driven by state                       |
| disabled attribute         | Locking buttons after selection                          |
| useEffect + setInterval    | Countdown timer with proper cleanup                      |
| key prop reset             | Remounting Question on each new question                 |
| Component decomposition    | Question.jsx, Results.jsx, App.jsx                       |

## Project Structure

```
quiz-app/
├── src/
│   ├── data/
│   │   └── questionData.js    # All quiz questions and answers
│   ├── Question.jsx           # Renders a single question + options
│   ├── Results.jsx            # Results screen with final score
│   ├── App.jsx                # Root component, owns all state
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Running Locally

```bash
cd quiz-app
npm install
npm run dev
```

Open `http://localhost:5173`

## Built With

- React 19
- Vite
- Plain CSS

# React Projects

A collection of React projects built from scratch while learning React JS —
each project focused on specific concepts, written line by line without
copy-pasting. Every concept is learned through struggle, review and iteration
rather than following along with tutorials.

## Projects

| #   | Project                                                                        | Key Concepts                                                                                                                                          | Status      |
| --- | ---                                                                            | ---                                                                                                                                                   | ---         |
| 01  | [Quiz App](./quiz-app)                                                         | Components, props, useState, state lifting, conditional rendering, useEffect, custom hooks                                                            | ✅ Complete |
| 02  | [Movie Search](./movie-search-app)                                             | useEffect, fetch API, loading/error states, API integration, environment variables                                                                    | ✅ Complete |
| 03  | [Expense Tracker](./expense-tracker-app)                                       | useReducer, controlled forms, input validation, derived state, array reduce, Object.entries                                                           | ✅ Complete |
| 04  | [Job Tracker](./job-tracker-app)                                               | React Router, nested routes, dynamic routes, useParams, useNavigate, useContext, createContext                                                        | ✅ Complete |
| 05  | [Notes App](./notes-fullstack-app)                                             | Full stack — React + FastAPI, fetch API, async handlers, API layer separation, env variables                                                          | ✅ Complete |
| 06  | [Tic-Tac-Toe](./react-udemy-learning/07-tic-tac-toe-starting-project/)         | useState, derived state, component decomposition, conditional rendering, controlled inputs, callback props                                            | ✅ Complete |
| 07  | [Investment Calculator](./react-udemy-learning/investment-calculator-project/) | useState, controlled components, component composition, derived state, utility separation, Intl.NumberFormat, conditional rendering, .map() rendering | ✅ Complete |

## Concepts Learned So Far

### Core React

- Components and JSX
- Props — passing data down the component tree
- useState — local and lifted state
- useReducer — centralised state logic with actions and dispatch
- useEffect — side effects, API calls, timers, cleanup
- useContext — global state without prop drilling
- createContext — creating a shared state channel
- Custom hooks — extracting reusable stateful logic
- Conditional rendering — `&&`, ternary, early `if` returns
- Lists with `.map()` and the `key` prop
- Controlled components — forms fully driven by React state
- Component decomposition — single responsibility components
- State lifting — moving state to the lowest common ancestor

### React Router

- BrowserRouter, Routes, Route
- Nested routes with Outlet
- Dynamic routes with URL parameters
- useParams — reading values from the URL
- useNavigate — programmatic navigation
- NavLink — active state on navigation links
- Route ordering — specific before dynamic

### Patterns

- Data/UI separation — keeping content in data files
- Derived state — calculating values instead of storing them
- Callback props — child to parent communication
- Prop drilling — passing callbacks through component layers
- Context + Reducer — global state management pattern
- Dynamic classNames — UI driven by state

## How This Repo Is Structured

Each project lives in its own folder with its own `package.json`.
To run any project locally:

```bash
cd project-name
npm install
npm run dev
```

## Reference & Learning Notes

In addition to the runnable apps above, this repo tracks learning material:

- `react-self-learning/theory/` — a 15-part, build-first React guide (JSX → production) with a paired `.md` + rendered `.html` per topic, 100+ exercises and 3 capstones. Read top-to-bottom the first time, then keep as a reference.
- `react-self-learning/projects/` — exercise scratch space for the guide.
- `.learning/` — concept notes (`concepts.md`), gotchas (`gotchas.md`), and a rolling plan (`plan.md`); updated after each session and read on-demand by Copilot for deeper explanations.

## Tech Stack

- React 19
- React Router v6
- Vite
- Plain CSS
- REST APIs (OMDB, custom FastAPI)
- FastAPI (Project 5 backend)
- Python / Pydantic / Uvicorn

## About

I'm Akhilesh, an AI/ML Engineer learning React JS to add
frontend skills to my full-stack toolkit. These projects are built
hands-on — every line written and understood personally.

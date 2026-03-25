# React Projects

A collection of React projects built from scratch while learning React JS —
each project focused on specific concepts, written line by line without
copy-pasting. Every concept is learned through struggle, review and iteration
rather than following along with tutorials.

## Projects

| #   | Project                              | Key Concepts                                                                                | Status      |
| --- | ------------------------------------ | ------------------------------------------------------------------------------------------- | ----------- |
| 01  | [Quiz App](./quiz-app)               | Components, props, useState, state lifting, conditional rendering, useEffect, custom hooks  | ✅ Complete |
| 02  | [Movie Search](./movie-search)       | useEffect, fetch API, loading/error states, API integration, environment variables          | ✅ Complete |
| 03  | [Expense Tracker](./expense-tracker) | useReducer, controlled forms, input validation, derived state, array reduce, Object.entries | ✅ Complete |

## Concepts Learned So Far

### Core React

- Components and JSX
- Props — passing data down the component tree
- useState — local and lifted state
- useReducer — centralised state logic with actions
- useEffect — side effects, API calls, timers, cleanup
- Custom hooks — extracting reusable stateful logic
- Conditional rendering — `&&`, ternary, `if` returns
- Lists with `.map()` and the `key` prop
- Controlled components — forms driven by React state
- Component decomposition — single responsibility components
- State lifting — moving state to the lowest common ancestor

### Patterns

- Data/UI separation — keeping content in data files
- Derived state — calculating values instead of storing them
- Callback props — child to parent communication
- Prop drilling — passing callbacks through component layers
- Dynamic classNames — UI driven by state

### JavaScript

- Array methods — `filter`, `map`, `reduce`
- Object spread — immutable state updates
- `Object.entries` — iterating over grouped data
- Intl API — locale-aware number and date formatting
- Regex — input validation
- Environment variables — keeping API keys out of code

## How This Repo Is Structured

Each project lives in its own folder with its own `package.json`.
To run any project locally:

```bash
cd project-name
npm install
npm run dev
```

## Tech Stack

- React 19
- Vite
- Plain CSS
- REST APIs (OMDB)

## About

I'm Akhilesh, an AI/ML Engineer learning React JS to add
frontend skills to my full-stack toolkit. These projects are built
hands-on — every line written and understood personally.

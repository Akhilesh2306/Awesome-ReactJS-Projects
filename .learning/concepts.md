# React Concepts — Detailed Notes

Copilot reads this file on-demand for deeper concept explanations.
Update after each learning session.

---

## Core React

### Components & JSX
- **Learned in:** 01-quiz-app
- React components are functions that return JSX
- JSX looks like HTML but is JavaScript — gets compiled to React.createElement()
- Must return a single root element (use `<>...</>` fragments for multiple)
- Self-closing tags required for void elements: `<img />`, `<input />`
- JavaScript expressions go inside `{curly braces}`

### Props
- **Learned in:** 01-quiz-app
- Props = arguments passed to components. Read-only — never modify them
- Destructure in function signature: `function Card({ title, body })`
- `children` is a special prop for nested content
- Callback props enable child → parent communication

### useState
- **Learned in:** 01-quiz-app
- `const [value, setValue] = useState(initialValue)`
- Calling setter triggers a re-render
- Never mutate state directly (no `state.push()`, no `state.x = y`)
- For state based on previous value, use functional update: `setValue(prev => prev + 1)`
- State lifting: move state to lowest common ancestor when siblings need to share it

### useReducer
- **Learned in:** 03-expense-tracker-app
- Alternative to useState for complex state logic
- `const [state, dispatch] = useReducer(reducer, initialState)`
- Reducer is a pure function: `(state, action) => newState`
- dispatch sends actions: `dispatch({ type: 'ADD', payload: data })`
- Centralises all state transitions in one place

### useEffect
- **Learned in:** 01-quiz-app, 02-movie-search-app
- Runs side effects after render
- Dependency array controls when it runs:
  - `[]` = once on mount
  - `[dep]` = when dep changes
  - No array = every render (usually wrong)
- Cleanup function runs before next effect and on unmount
- Common uses: API calls, timers, event listeners

### useContext + createContext
- **Learned in:** 04-job-tracker-app
- Solves prop drilling — share state without passing through every level
- `createContext()` in a separate file
- `<Context.Provider value={...}>` wraps the tree
- `useContext(Context)` consumes it in any child
- Often paired with useReducer for global state management

### Custom Hooks
- **Learned in:** 01-quiz-app
- Extract reusable stateful logic into `useXxx()` functions
- Must start with "use" prefix
- Can use other hooks inside them
- Returns whatever the consumer needs (state, handlers, etc.)

---

## React Router

### Routing Basics
- **Learned in:** 04-job-tracker-app
- `BrowserRouter` wraps the app
- `Routes` contains `Route` elements
- `Route path="/" element={<Component />}`
- Nested routes use `Outlet` for rendering child routes
- Dynamic routes: `path=":id"` → access via `useParams()`

### Navigation
- **Learned in:** 04-job-tracker-app
- `useNavigate()` for programmatic navigation
- `NavLink` for navigation with active state styling
- Route ordering matters: specific routes before dynamic ones

---

## Patterns

### Data/UI Separation
- **Learned in:** 01-quiz-app, 03-expense-tracker-app, 04-job-tracker-app
- Keep data in `data/*.js` files, not hardcoded in components
- Components just render whatever data they receive

### Derived State
- **Learned in:** 03-expense-tracker-app
- Calculate values from existing state instead of storing redundant state
- Example: total = expenses.reduce() — don't store total separately

### Controlled Forms
- **Learned in:** 03-expense-tracker-app
- Form inputs driven entirely by React state
- `value={state}` + `onChange={e => setState(e.target.value)}`
- Validation runs on state, not on DOM

### API Layer Separation
- **Learned in:** 05-notes-fullstack-app
- Keep fetch calls in `api/*.js` files, not in components
- Components call API functions, handle loading/error states
- Environment variables for API URLs (`.env` files)

---

## Concepts Not Yet Covered
<!-- Move items up as you learn them -->
- useMemo / useCallback (performance optimization)
- useRef (DOM access, mutable refs)
- React.memo (preventing unnecessary re-renders)
- Error boundaries
- Suspense / lazy loading
- TypeScript with React
- Testing (Jest, React Testing Library)
- State management libraries (Redux, Zustand)
- CSS-in-JS / CSS Modules / Tailwind
- Server-side rendering (Next.js)
- Deployment

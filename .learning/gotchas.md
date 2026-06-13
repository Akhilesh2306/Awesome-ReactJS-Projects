# React Gotchas & Pitfalls Log

Every mistake is a lesson. When you hit a gotcha, log it here with a code example.

**Severity:** 🔴 Broke something | 🟡 Subtle/confusing | 🟢 Good pattern discovered

---

## State Management

### 🔴 Never mutate state directly
**Project:** 03-expense-tracker-app
```jsx
// ❌ WRONG — mutates state, React won't re-render
expenses.push(newExpense)

// ✅ RIGHT — create new array
setExpenses([...expenses, newExpense])

// ✅ RIGHT with useReducer
dispatch({ type: 'ADD', payload: newExpense })
```

### 🔴 Functional updates for state based on previous value
**Project:** 01-quiz-app
```jsx
// ❌ WRONG — may use stale state in batched updates
setCount(count + 1)

// ✅ RIGHT — always gets latest value
setCount(prev => prev + 1)
```

### 🟢 Derived state over redundant state
**Project:** 03-expense-tracker-app
```jsx
// ❌ WRONG — storing a value you can calculate
const [total, setTotal] = useState(0)
// Now you have to keep total in sync manually

// ✅ RIGHT — derive it
const total = expenses.reduce((sum, e) => sum + e.amount, 0)
```

---

## Lists & Keys

### 🔴 Use stable IDs as keys, not array index
**Project:** 01-quiz-app
```jsx
// ❌ WRONG — index shifts when items reorder/delete
{items.map((item, index) => <Card key={index} />)}

// ✅ RIGHT — stable unique ID
{items.map(item => <Card key={item.id} />)}
```

---

## useEffect

### 🟡 Cleanup runs before EVERY re-execution, not just unmount
**Project:** 02-movie-search-app
```jsx
useEffect(() => {
  const timer = setTimeout(() => search(query), 500)
  // This cleanup runs BEFORE the next effect, not just on unmount
  return () => clearTimeout(timer)
}, [query])
```

### 🟡 Missing dependency array = runs every render
```jsx
// ❌ Runs after EVERY render — usually a bug
useEffect(() => { fetchData() })

// ✅ Runs once on mount
useEffect(() => { fetchData() }, [])

// ✅ Runs when query changes
useEffect(() => { fetchData(query) }, [query])
```

---

## JSX Syntax

### 🟡 Event handlers are camelCase
```jsx
// ❌ HTML habit
<button onclick={handleClick}>

// ✅ React JSX
<button onClick={handleClick}>
```

### 🟡 className, not class
```jsx
// ❌ HTML habit
<div class="card">

// ✅ React JSX
<div className="card">
```

### 🟡 Self-closing tags required for void elements
```jsx
// ❌ Won't compile
<img src="photo.jpg">
<input type="text">

// ✅ Must self-close
<img src="photo.jpg" />
<input type="text" />
```

---

## Routing

### 🟡 Route order matters
**Project:** 04-job-tracker-app
```jsx
// ❌ Dynamic route catches everything first
<Route path=":id" element={<JobDetail />} />
<Route path="add" element={<AddJob />} />

// ✅ Specific before dynamic
<Route path="add" element={<AddJob />} />
<Route path=":id" element={<JobDetail />} />
```

---

<!-- ADD NEW GOTCHAS BELOW THIS LINE -->

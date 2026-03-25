# Expense Tracker

A personal finance tracking application built with React. Add expenses by
category, filter the list, and see a live summary of your spending.

## Features

- Add expenses with name, amount and category
- Delete any expense from the list
- Filter expenses by category with active button highlight
- Live summary showing total spent across all expenses
- Per-category breakdown of spending
- Input validation — rejects empty names and zero amounts
- Numeric-only amount input with regex validation
- Currency formatting using Intl API with INR locale
- Responsive layout for mobile and desktop

## Concepts Practiced

| Concept                 | Where used                                               |
| ----------------------- | -------------------------------------------------------- |
| Components & props      | ExpenseItem, ExpenseList, AddExpense, FilterBar, Summary |
| useState                | filter state in App                                      |
| useReducer              | expenses state — ADD_EXPENSE, DELETE_EXPENSE             |
| Controlled inputs       | AddExpense form — name, amount, category                 |
| Input validation        | Empty name and zero amount guard on submit               |
| Regex validation        | Numeric-only amount input `/^\d+$/`                      |
| State lifting           | onDelete, onAddExpense callbacks passed down             |
| Derived state           | filteredExpenses, byCategory totals                      |
| Array reduce            | Total calculation and per-category grouping              |
| Object.entries          | Rendering grouped category data                          |
| Conditional filter      | filteredExpenses based on active filter                  |
| Dynamic classNames      | Active filter button highlight                           |
| Intl formatting         | `toLocaleString("en-IN")` for INR currency and dates     |
| Component decomposition | 6 components each with single responsibility             |

## Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── AddExpense.jsx      # Controlled form to add new expense
│   │   ├── ExpenseList.jsx     # Renders list of ExpenseItem components
│   │   ├── ExpenseItem.jsx     # Single expense row with delete button
│   │   ├── FilterBar.jsx       # Category filter buttons
│   │   └── Summary.jsx         # Total and per-category breakdown
│   ├── App.jsx                 # Root component, owns all state
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Running Locally

```bash
cd expense-tracker
npm install
npm run dev
```

Open `http://localhost:5173`

## Built With

- React 19
- Vite
- Plain CSS

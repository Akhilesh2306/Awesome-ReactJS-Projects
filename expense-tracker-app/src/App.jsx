import { useReducer, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import Summary from "./components/Summary";
import FilterBar from "./components/FilterBar";
import { expenseData } from "./data/expenseData";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export default function App() {
  const [expenses, dispatch] = useReducer(reducer, expenseData);
  const [filter, setFilter] = useState("All");

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  const handleAddExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.floor(Math.random() * 1000),
      date: new Date(),
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  return (
    <div className="app">
      <h1 className="app-title">Expense Tracker App</h1>
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
      <AddExpense onAddExpense={handleAddExpense} />
      <Summary expenses={expenses} />
      <FilterBar filter={filter} onFilterChange={handleFilter} />
    </div>
  );
}

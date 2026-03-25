import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import Summary from "./components/Summary";
import FilterBar from "./components/FilterBar";

const expenseData = [
  {
    id: 1,
    name: "Coffee shop",
    amount: 120,
    category: "Food",
    date: new Date("2024-03-24"),
  },
  {
    id: 2,
    name: "Groceries",
    amount: 500,
    category: "Food",
    date: new Date("2024-03-24"),
  },
  {
    id: 3,
    name: "Petrol",
    amount: 600,
    category: "Transport",
    date: new Date("2024-03-22"),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [filter, setFilter] = useState("All");

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleAddExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.floor(Math.random() * 1000),
      date: new Date(),
    };

    setExpenses([...expenses, newExpense]);
    console.log(expenses);
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

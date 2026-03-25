import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
}

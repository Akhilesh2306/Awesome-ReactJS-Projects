export default function ExpenseItem({ expense, onDelete }) {
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const amountOptions = {
    style: "currency",
    currency: "INR",
  };

  return (
    <div className="expense-item">
      <p className="expense-item__name">Name: {expense.name}</p>
      <p className="expense-item__amount">
        Amount: {expense.amount.toLocaleString("en-IN", amountOptions)}
      </p>
      <p className="expense-item__date">
        Date: {expense.date.toLocaleDateString("en-IN", dateOptions)}
      </p>
      <p className="expense-item__category">Category: {expense.category}</p>
      <button
        className="expense-item__delete"
        onClick={() => onDelete(expense.id)}
      >
        Delete
      </button>
    </div>
  );
}

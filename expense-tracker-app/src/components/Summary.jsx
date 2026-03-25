export default function Summary({ expenses }) {
  const amountOptions = {
    style: "currency",
    currency: "INR",
  };

  const byCategory = expenses.reduce((acc, expense) => {
    const category = expense.category;

    if (acc[category]) {
      acc[category] += expense.amount;
    } else {
      acc[category] = expense.amount;
    }

    return acc;
  }, {});

  return (
    <div className="summary">
      <p className="summary__total">
        Total Expenses:{" "}
        {expenses
          .reduce((total, expense) => total + expense.amount, 0)
          .toLocaleString("en-IN", amountOptions)}
      </p>
      <p className="summary__subtitle">Total Expense per Category</p>
      {Object.entries(byCategory).map(([category, amount]) => {
        return (
          <p key={category} className="summary__category">
            {category}: {amount.toLocaleString("en-IN", amountOptions)}
          </p>
        );
      })}
    </div>
  );
}

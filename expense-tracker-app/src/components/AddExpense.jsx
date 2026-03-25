import { useState } from "react";

export default function AddExpense({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  return (
    <div className="add-expense">
      <form
        className="add-expense__form"
        onSubmit={(event) => {
          event.preventDefault();

          if (!name.trim() || amount <= 0) {
            alert("Please enter a valid name and amount.");
            return;
          }

          onAddExpense({ name, amount: Number(amount), category });

          setName("");
          setAmount("");
          setCategory("Food");
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="add-expense__input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          className="add-expense__input"
          onChange={(e) => {
            const val = e.target.value;
            if (val === "" || /^\d+$/.test(val)) {
              setAmount(val);
            }
          }}
        />
        <select
          name="category"
          value={category}
          className="add-expense__select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit" className="add-expense__btn">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="filter-bar">
      <p className="filter-bar__label">Filter by category:</p>
      <button
        className={`filter-bar__btn ${filter === "All" ? "filter-bar__btn--active" : ""}`}
        onClick={() => onFilterChange("All")}
      >
        All
      </button>
      <button
        className={`filter-bar__btn ${filter === "Food" ? "filter-bar__btn--active" : ""}`}
        onClick={() => onFilterChange("Food")}
      >
        Food
      </button>
      <button
        className={`filter-bar__btn ${filter === "Transport" ? "filter-bar__btn--active" : ""}`}
        onClick={() => onFilterChange("Transport")}
      >
        Transport
      </button>
      <button
        className={`filter-bar__btn ${filter === "Shopping" ? "filter-bar__btn--active" : ""}`}
        onClick={() => onFilterChange("Shopping")}
      >
        Shopping
      </button>
      <button
        className={`filter-bar__btn ${filter === "Health" ? "filter-bar__btn--active" : ""}`}
        onClick={() => onFilterChange("Health")}
      >
        Health
      </button>
      <button
        className={`filter-bar__btn ${filter === "Others" ? "filter-bar__btn--active" : ""}`}
        onClick={() => onFilterChange("Others")}
      >
        Others
      </button>
    </div>
  );
}

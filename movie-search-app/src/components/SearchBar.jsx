export default function SearchBar({ query, onChange, onSearch }) {
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input className="search-input" value={query} onChange={onChange} />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

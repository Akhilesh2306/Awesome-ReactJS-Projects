import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";

// Movie database OMDB API key
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("inception");
  const [selectedId, setSelectedId] = useState(null);

  const fetchMovies = (searchTerm) => {
    setLoading(true);
    setError(null);

    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.Response === "False") {
          setError(json.Error);
          setMovies([]);
        } else {
          setMovies(json.Search);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(`Error occurred while fetching movies. ${error}`);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=inception&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.Response === "False") {
          setError(json.Error);
          setMovies([]);
        } else {
          setMovies(json.Search);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Error fetching movies. ${err}`);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="app-title">Movie Search App</h1>
      <SearchBar
        query={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={() => fetchMovies(query)}
      />
      {loading && <p className="status-msg">Loading...</p>}
      {error && <p className="status-msg--error">{error}</p>}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onSelect={() => setSelectedId(movie.imdbID)}
          />
        ))}
      </div>
      {selectedId && (
        <MovieDetail id={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </div>
  );
}

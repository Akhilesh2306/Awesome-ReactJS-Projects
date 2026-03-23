import { useState } from "react";

export default function MovieCard({ movie, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="movie-card" onClick={onSelect}>
      {movie.Poster !== "N/A" && !imgError ? (
        <img
          className="movie-card__poster"
          src={movie.Poster}
          alt={movie.Title}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="no-poster">No Image</div>
      )}

      <h3 className="movie-card__title">{movie.Title}</h3>
      <p className="movie-card__year">Year: {movie.Year}</p>
    </div>
  );
}

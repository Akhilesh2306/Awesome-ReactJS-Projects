import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetail({ id, onClose }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.Response === "False") {
          setError(json.Error);
        } else {
          setDetail(json);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to load movie details. Please try again. ${error}`);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="movie-detail">
      {loading ? (
        <p className="status-msg">Loading...</p>
      ) : error ? (
        <p className="status-msg--error">Error: {error}</p>
      ) : (
        <div className="detail-card">
          {detail.Poster !== "N/A" && !imgError ? (
            <img
              className="detail-poster"
              src={detail.Poster}
              alt={detail.Title}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="no-poster">No Image</div>
          )}
          <h2 className="detail-title">{detail.Title}</h2>
          <p className="detail-info">Year: {detail.Year}</p>
          <p className="detail-info">Genre: {detail.Genre}</p>
          <p className="detail-info">Director: {detail.Director}</p>
          <p className="detail-info">Plot: {detail.Plot}</p>
          <p className="detail-info">Actors: {detail.Actors}</p>
          <p className="detail-info">IMDB Rating: {detail.imdbRating}</p>
          <p className="detail-info">IMDB Votes: {detail.imdbVotes}</p>
          <p className="detail-info">Runtime: {detail.Runtime}</p>
          <p className="detail-info">Language: {detail.Language}</p>
          <p className="detail-info">Country: {detail.Country}</p>
          <p className="detail-info">Awards: {detail.Awards}</p>
          <p className="detail-info">Box Office: {detail.BoxOffice}</p>
          <p className="detail-info">Production: {detail.Production}</p>
          <p className="detail-info">Website: {detail.Website}</p>
        </div>
      )}
      <button className="detail-close" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

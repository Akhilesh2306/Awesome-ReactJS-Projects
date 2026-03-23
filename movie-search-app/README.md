# Movie Search App

A movie search application built with React that lets you search for any film,
browse results, and view detailed information — powered by the OMDB API.

## Features

- Search any movie by title using the OMDB API
- Displays movie cards with poster, title and release year
- Graceful fallback for missing or broken poster images
- Detailed view on card click — plot, director, actors, ratings and more
- Loading state while fetch is in progress
- Error handling for failed requests and no results found
- Responsive grid layout

## Concepts Practiced

| Concept                              | Where used                                   |
| ------------------------------------ | -------------------------------------------- |
| `useEffect` on mount                 | Initial fetch of "inception" on load         |
| `useEffect` with `[id]` dependency   | Fetching movie detail when selection changes |
| `fetch` with `.then()` / `.catch()`  | All API calls                                |
| Loading / error / data state pattern | Every fetch across all components            |
| Controlled input                     | SearchBar driving query state                |
| Response validation                  | `json.Response === "False"` check            |
| `onError` on images                  | Broken and missing poster handling           |
| State lifting                        | `selectedId` owned by App, passed down       |
| Callback props                       | `onSelect`, `onClose`, `onSearch`            |
| Conditional rendering `&&`           | Loading, error, detail view                  |
| Conditional rendering ternary        | Poster vs no-poster fallback                 |
| Component decomposition              | SearchBar, MovieCard, MovieDetail, App       |
| Environment variables                | `import.meta.env.VITE_OMDB_API_KEY`          |

## Project Structure

```
movie-search/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Controlled search form
│   │   ├── MovieCard.jsx      # Single movie card with poster
│   │   └── MovieDetail.jsx    # Full detail overlay on click
│   ├── App.jsx                # Root component, owns all state
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── .env                       # API key (not committed)
├── index.html
├── package.json
└── vite.config.js
```

## Setup

This project requires a free OMDB API key.

1. Get a free key at [omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Create a `.env` file in the project root:

```
VITE_OMDB_API_KEY=your_key_here
```

3. Install and run:

```bash
cd movie-search
npm install
npm run dev
```

Open `http://localhost:5173`

## Built With

- React 19
- Vite
- OMDB API
- Plain CSS

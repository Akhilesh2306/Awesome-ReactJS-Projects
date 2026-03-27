# Notes App — Frontend

A React frontend for the Notes full stack application. Create, view and
delete notes — all persisted via a FastAPI backend.

## Features

- Fetches and displays all notes on load
- Add a new note with title and content
- Delete any note with instant list refresh
- Loading state while fetching from API
- Error state for failed requests
- Form validation — both fields required before submit

## Concepts Practiced

| Concept                        | Where used                                                |
| ------------------------------ | --------------------------------------------------------- |
| useEffect on mount             | Fetching notes when app loads                             |
| Async fetch with try/catch     | All API calls in fetchNotes, handleDelete, handleCreate   |
| Loading / error / data pattern | App state for all three phases of a fetch                 |
| Controlled form                | AddNote — title and content driven by state               |
| Callback props                 | onDelete, onAdd passed down to components                 |
| API layer separation           | api/notes.js isolates all fetch logic                     |
| Response unwrapping            | Backend returns `{ data: [...] }` — accessing `data.data` |
| Environment variables          | VITE_API_URL in .env for base URL                         |
| Conditional rendering          | Loading, error, empty list states                         |
| Component decomposition        | App, AddNote, NoteList, NoteCard                          |

## Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── notes.js        # All fetch functions — getNotes, createNote, deleteNote
│   ├── components/
│   │   ├── AddNote.jsx     # Controlled form to add a new note
│   │   ├── NoteList.jsx    # Renders list of NoteCard components
│   │   └── NoteCard.jsx    # Single note with delete button
│   ├── App.jsx             # Root component — owns all state and handlers
│   ├── index.css           # Global styles
│   └── main.jsx            # React entry point
├── .env                    # API base URL (not committed)
├── index.html
├── package.json
└── vite.config.js
```

## Setup

1. Make sure the backend is running on port 9000
2. Create a `.env` file in the `frontend/` root:

```
VITE_API_URL=http://localhost:9000
```

3. Install and run:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`

## Built With

- React 19
- Vite
- Plain CSS

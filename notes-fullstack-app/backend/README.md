# Notes App — Backend

A FastAPI backend for the Notes full stack application. Provides a REST API
for creating, reading and deleting notes with in-memory storage.

## Endpoints

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| GET    | `/notes`      | Returns all notes           |
| GET    | `/notes/{id}` | Returns a single note by id |
| POST   | `/notes`      | Creates a new note          |
| DELETE | `/notes/{id}` | Deletes a note by id        |

## Request / Response Format

All endpoints return a consistent response structure:

```json
{
  "message": "Notes retrieved successfully",
  "status": "success",
  "data": [...]
}
```

**POST /notes request body:**

```json
{
  "title": "My note",
  "content": "Note content here"
}
```

## Models

| Model          | Fields                         |
| -------------- | ------------------------------ |
| `Note`         | id, title, content, created_at |
| `NoteCreate`   | title, content                 |
| `NoteResponse` | message, status, data          |

## Validation

- `title` — required, 1–30 characters
- `content` — required, 1–100 characters

## Running Locally

```bash
cd backend
uvicorn main:app --reload --port 9000
```

API docs available at `http://localhost:9000/docs`

## Tech Stack

- Python
- FastAPI
- Pydantic
- Uvicorn
- uv (package manager)

## Note

This backend uses in-memory storage — a Python list. Data resets on every
server restart. A database like SQLite or PostgreSQL would be the next step for persistence.

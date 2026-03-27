# Import standard libraries
import logging
from datetime import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import internal modules
from notes_data import NOTES_DATA
from models import NoteCreate, NoteResponse

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

# Create a logger instance
logger = logging.getLogger(__name__)

# Initialize the FastAPI app
app = FastAPI(
    title="Notes API backend server",
    version="0.1.0",
    description="This is backend for the Notes fullstack app. The frontend will be built with React and Vite.",
)


# Adding CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/notes", tags=["Notes"], response_model=NoteResponse)
async def get_notes() -> dict:
    logger.info("Getting all notes")
    return {
        "message": "Notes retrieved successfully",
        "status": "success",
        "data": NOTES_DATA,
    }


@app.get("/notes/{note_id}", tags=["Notes"], response_model=NoteResponse)
async def get_note(note_id: int) -> dict:
    for note in NOTES_DATA:
        if note["id"] == note_id:
            logger.info(f"Getting note with id {note_id}")
            return {
                "message": f"Note with id {note_id} retrieved successfully",
                "status": "success",
                "data": note,
            }

    return {
        "message": f"Note with id {note_id} not found",
        "status": "error",
        "data": None,
    }


@app.post("/notes", tags=["Notes"], response_model=NoteResponse)
async def create_note(note_input: NoteCreate) -> dict:

    new_id = max((note["id"] for note in NOTES_DATA), default=0) + 1

    new_note = {
        "id": new_id,
        "title": note_input.title,
        "content": note_input.content,
        "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }
    logger.info("Creating new note")

    NOTES_DATA.append(new_note)
    logger.info(f"Created note with id {new_note['id']}")

    return {
        "message": f"Note with id {new_note['id']} created successfully",
        "status": "success",
        "data": new_note,
    }


@app.delete("/notes/{note_id}", tags=["Notes"], response_model=NoteResponse)
async def delete_note(note_id: int) -> dict:
    for note in NOTES_DATA:
        if note["id"] == note_id:
            logger.info(f"Deleting note with id {note_id}")

            NOTES_DATA.remove(note)

            return {
                "message": f"Note with id {note_id} deleted successfully",
                "status": "success",
                "data": note,
            }

    return {
        "message": f"Note with id {note_id} not found",
        "status": "error",
        "data": None,
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=9000,
        log_level="info",
        reload=True,
    )

# Import standard libraries
from pydantic import BaseModel, Field


class Note(BaseModel):
    id: int = Field(
        ...,
        gt=0,
        description="The unique identifier of the note",
    )
    title: str = Field(
        ...,
        min_length=1,
        max_length=30,
        description="The title of the note",
    )
    content: str = Field(
        ...,
        min_length=1,
        max_length=100,
        description="The content of the note",
    )
    created_at: str | None = Field(
        default=None,
        description="The date and time the note was created",
    )


class NoteCreate(BaseModel):
    title: str = Field(
        ...,
        min_length=1,
        max_length=30,
        description="The title of the note",
    )
    content: str = Field(
        ...,
        min_length=1,
        max_length=100,
        description="The content of the note",
    )


class NoteResponse(BaseModel):
    message: str
    status: str
    data: Note | list[Note] | None = None

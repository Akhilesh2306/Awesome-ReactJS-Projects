import NoteCard from "./NoteCard";

export default function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={onDelete} />
        ))
      ) : (
        <p className="note-list__empty">No notes yet.</p>
      )}
    </div>
  );
}

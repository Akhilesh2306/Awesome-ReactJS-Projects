export default function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <h2 className="note-card__title">{note.title}</h2>
      <p className="note-card__content">{note.content}</p>
      <p className="note-card__date">
        {note.created_at ? note.created_at : ""}
      </p>
      <button className="btn btn--danger" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

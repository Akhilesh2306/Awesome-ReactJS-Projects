/* eslint-disable react-hooks/set-state-in-effect */
import { getNotes, createNote, deleteNote } from "./api/notes";
import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const data = await getNotes();
      setNotes(data.data);
      setLoading(false);
    } catch (error) {
      setError(`Error fetching notes: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      await fetchNotes();
    } catch (error) {
      setError(`Error deleting note; ${error}`);
    }
  };

  const handleCreate = async (title, content) => {
    try {
      await createNote(title, content);
      await fetchNotes();
    } catch (error) {
      setError(`Error creating note; ${error}`);
    }
  };

  return (
    <div className="app">
      <h2 className="app__title">Notes App</h2>
      {loading && <p className="status-msg">Loading...</p>}
      {error && <p className="status-msg status-msg--error">{error}</p>}
      <NoteList notes={notes} onDelete={handleDelete} />
      <AddNote onAdd={handleCreate} />
    </div>
  );
}

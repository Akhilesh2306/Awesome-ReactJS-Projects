import { useState } from "react";

export default function AddNote({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required");
      return;
    }
    onAdd(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="add-note">
      <form className="add-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className="add-note__input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={content}
          className="add-note__input"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />

        <button className="btn" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
}

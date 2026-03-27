/* 
Dedicated file for all API calls. This separates fetch logic from UI components.
*/

const BASE_URL = import.meta.env.VITE_API_URL;

export const getNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes`);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  const data = await response.json();
  return data;
};

export const getNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  const data = await response.json();
  return data;
};

export const createNote = async (title, content) => {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  const data = await response.json();
  return data;
};

export const deleteNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  const data = await response.json();
  return data;
};

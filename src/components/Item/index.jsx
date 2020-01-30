import React from "react";

export default function Item({ note, selectNote, deleteNote }) {
  return (
    <li onClick={() => selectNote(note.id)}>
      <h3>{note.title}</h3>
      <button onClick={() => deleteNote(note.id)}>삭제</button>
    </li>
  );
}

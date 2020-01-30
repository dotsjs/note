import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Item({ note, selectNote, deleteNote }) {
  return (
    <li onClick={() => selectNote(note.id)}>
      <h3>{note.title}</h3>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteNote(note.id)} />
    </li>
  );
}

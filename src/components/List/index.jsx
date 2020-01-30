import React from "react";
import Item from "./../Item";

export default function List({ notes, selectNote, deleteNote }) {
  const noteList = notes.map(note => (
    <Item
      key={note.id}
      note={note}
      selectNote={selectNote}
      deleteNote={deleteNote}
    />
  ));
  return <ul>{noteList}</ul>;
}

import React, { useState } from "react";
import List from "./../List";
import Note from "./../Note";
import Edit from "./../Edit";

export default function Main({ editing, setEditing }) {
  const [selected, setSelected] = useState(0);
  const [modifying, setModifying] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: "01",
      title: "제목1",
      content: "내용1"
    },
    {
      id: "02",
      title: "제목2",
      content: "내용2"
    },
    {
      id: "03",
      title: "제목3",
      content: "내용3"
    },
    {
      id: "04",
      title: "제목4",
      content: "내용4"
    }
  ]);

  function addNote(title, content) {
    const id = Date.now();
    setNotes(prev => [...prev, { id, title, content }]);
  }
  function indexOfNote(id) {
    return notes.findIndex(note => note.id === id);
  }
  function modifyNote(id, title, content) {
    const index = indexOfNote(id);
    setNotes(prev => [
      ...prev.slice(0, index),
      { id, title, content },
      ...prev.slice(index + 1)
    ]);
  }
  function deleteNote(id) {
    const index = indexOfNote(id);
    setNotes(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }
  const selectNote = id => {
    const index = indexOfNote(id);
    setSelected(index);
  };
  return (
    <main>
      <List notes={notes} selectNote={selectNote} deleteNote={deleteNote} />
      {editing ? (
        <Edit
          addNote={addNote}
          modifyNote={modifyNote}
          modifying={modifying}
          setModifying={setModifying}
          setEditing={setEditing}
          note={notes[selected]}
        />
      ) : (
        <Note
          note={notes[selected]}
          setEditing={setEditing}
          setModifying={setModifying}
        />
      )}
    </main>
  );
}

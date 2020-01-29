import React, { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
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
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

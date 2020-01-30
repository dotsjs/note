import React, { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [editing, setEditing] = useState(false);
  return (
    <div className="App">
      <Header setEditing={setEditing} />
      <Main editing={editing} setEditing={setEditing} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

export default function Edit({
  addNote,
  modifyNote,
  modifying,
  setEditing,
  setModifying,
  note
}) {
  const [title, setTitle] = useState(modifying ? note.title : "");
  const [content, setContent] = useState(modifying ? note.content : "");
  const submitHandler = e => {
    e.preventDefault();
    if (modifying) {
      modifyNote(note.id, title, content);
      setModifying(false);
    } else {
      addNote(title, content);
    }
    setEditing(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input type="submit" value="확인" />
    </form>
  );
}

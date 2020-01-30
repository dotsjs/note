import React from "react";

export default function Note({ note, setEditing, setModifying }) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button
        onClick={() => {
          setEditing(true);
          setModifying(true);
        }}
      >
        수정
      </button>
    </div>
  );
}

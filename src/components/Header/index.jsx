import React from "react";

function Header({ setEditing }) {
  return (
    <nav>
      <button>메뉴</button>
      <button>Note</button>
      <button onClick={() => setEditing(true)}>추가</button>
    </nav>
  );
}

export default Header;

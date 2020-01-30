import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

function Header({ setEditing }) {
  return (
    <nav>
      <FontAwesomeIcon icon={faBars} />
      <button>Note</button>
      <FontAwesomeIcon onClick={() => setEditing(true)} icon={faPlus} />
    </nav>
  );
}

export default Header;

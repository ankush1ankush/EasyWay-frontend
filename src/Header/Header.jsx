import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

import "./Header.css";


function Header(props) {
  const logout = () => {
		window.open(`http://localhost:8080/auth/logout`, "_self");
	};
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      {props.User?<button  className="logout" fontSize="large" onClick={logout}>Logout</button>:null}
    </header>
  );
}

export default Header;

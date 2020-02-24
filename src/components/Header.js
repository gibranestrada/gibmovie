import React from "react";

const Header = (props) => {
  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <header className="App-header">
      <h2 onClick={reloadPage}>{props.text}</h2>
    </header>
  );
};

export default Header
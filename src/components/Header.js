import React from "react";

const Header = (props) => {
  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <header className="App-header" onClick={reloadPage}>
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header
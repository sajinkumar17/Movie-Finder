import React, { useContext } from "react";
import ThemeButton from "./shared/ThemeButton";
import FeedbackTheme from "./context/FeedbackTheme";

const Header = ({ text }) => {
  const { theme } = useContext(FeedbackTheme);

  const headerStyle = {
    backgroundColor: theme === "white" ? "white" : "black",
    color: theme === "white" ? "black" : "white",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;

Header.defaultProps = {
  text: "Sajin",
};
import React, { useContext } from "react";
import ThemeButton from "./shared/ThemeButton";
import FeedbackTheme from "./context/FeedbackTheme";
import { Link } from "react-router-dom";


const Header = ({ text }) => {
  const { theme } = useContext(FeedbackTheme);

  const headerStyle = {
    backgroundColor: theme === "white" ? "white" : "black",
    color: theme === "white" ? "black" : "white",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <div>
          <Link to="/"><h2>{text}</h2></Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;

Header.defaultProps = {
  text: "Sajin",
};
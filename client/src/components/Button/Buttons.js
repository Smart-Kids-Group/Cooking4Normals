import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

const Buttons = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const STYLES = ["btn--primary", "btn--outline", "btn--test"];
  const SIZES = ["btn--medium", "btn--large"];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button 
        className={`btns ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Buttons;

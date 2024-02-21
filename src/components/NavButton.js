import React from "react";

function NavButton(props) {
  const value = props.value;

  const dark = {
    color: "var(--color-secondary-container)",
    backgroundColor: "var(--color-secondary)",
  };
  const styles = {
    padding: "1em 2em",
    border: "0",
    borderRadius: "2rem",
    outline: "none",
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--color-secondary-container)",
    color: "var(--color-secondary)",
  };
  const button_style = value ? { ...styles, ...dark } : { ...styles };
  return (
    <div>
      <button className="nav-button" style={button_style}>
        <a
          href="#"
          className="nav-button__link"
          style={{
            fontSize: "1.4em",
            textDecoration: "none",
            color: "var(--color-secondary-container)",
          }}
        >
          Contact Me
        </a>
      </button>
    </div>
  );
}

export default NavButton;

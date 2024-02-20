import React from "react";

function NavButton() {
  return (
    <div>
      <button
        className="nav-button"
        style={{
          padding: "1em 2em",
          border: "0",
          borderRadius: "2rem",
          outline: "none",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--color-secondary)",
        }}
      >
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

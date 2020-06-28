import React from "react";
import Log from "core-library";
const Button = ({ title, onClick, style }) => {
  const buttonStyle = {
    backgroundColor: "#2AA810",
    color: "#fff",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
    margin: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  };
  return (
    <div>
      <button
        onClick={() => {
          onClick();
          Log();
        }}
        style={buttonStyle}
      >
        {" "}
        {title}
      </button>
    </div>
  );
};
export default Button;

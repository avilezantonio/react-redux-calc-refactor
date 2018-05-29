import React from "react";

export const Button = ({ buttonClass, text, clickHandler }) => {
  console.log("click handler");
  console.log(clickHandler);
  return (
    <button
      className={buttonClass}
      onClick={() => (clickHandler ? clickHandler.call(null, text) : null)}
    >
      <span className="title">{text}</span>
    </button>
  );
};

export default Button;

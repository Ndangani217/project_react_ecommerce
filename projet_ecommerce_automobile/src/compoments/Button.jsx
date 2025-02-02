import React from "react";
import Button from'./Button'

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} p-4`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

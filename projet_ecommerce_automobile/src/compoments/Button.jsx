import React from "react";

const Button = ({ 
  type = "button", 
  onClick, 
  children, 
  bgColor = "bg-blueCustom", 
  textColor = "text-white", 
  width = "w-fit", 
  padding = "p-2", 
  border = "" 
}) => {
  return (
    <button
      className={`rounded ${bgColor} ${textColor} ${width} ${border} ${padding} text-amstelvar hover:bg-grayCustom hover:opacity-80 transition`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
